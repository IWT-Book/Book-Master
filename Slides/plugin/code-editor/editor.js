var RevealCodeEditor = window.RevealCodeEditor || (function() {

    var _zingeditcounter = 1;
    var _config = Reveal.getConfig().codeEditor || {};
    var _root = _config.root || '';

    initEditors();

    /**
     * initEditors - Run in Main Page and search for all iframes
     */
    function initEditors() {
      var id;
      var blocks = document.querySelectorAll('iframe[data-code-editor]');
      for (var i = 0; i < blocks.length; i++) {
        injectCode(blocks[i]);
      }
    }

    /**
     * For each iframe, construct the content and set options.
     * @param iframe
     */
    function injectCode(iframe) {
      var id = _zingeditcounter++;
      var config = iframe.dataset;

      var height = config.height || '300px';

      var settings = {
        readOnly: config.readOnly || false,
        mode: config.language || 'html',
        theme: config.theme || 'chrome',
        maxLines: config.maxLines || 25
      };

      iframe.id = 'code-edit-container' + id;
      iframe.dataset.id = id;

      var options = {};
      options.css = "";
      options.js = "";
      options.editorSettings = settings;
      options.height = height;
      options.id = id;
      options.initTab = config.initTab || 'html';
      options.singleTab = config.singleTab || false;
      if (options.singleTab) {
        options.initTab = options.singleTab;
      }

      if (config.codeurl){
        getExternalContent(config.codeurl, function(data){createMainIframe(iframe, options, data);});
      }
      else {
        createMainIframe(iframe, options, iframe.textContent);
      }
    }

    /**
     * Load the data into the iframe.  Update the data.  Initiate the editor on completion
     * @param iframe
     * @param options
     */
    function createMainIframe(iframe, options, data) {

      var d = iframe.contentWindow.document;

      data = data.replace(/<!--/, '').replace(/-->/, '');
      data = Encoder.htmlEncode(data);
      options.html = data;

      d.write(loadTemplate(options));

      iframe.onload = function() {
        initEditor(iframe);
      };

      d.close();
    }

    /**
     * Launch the Ace Editor and set the js and css fields.  Unnecessary really for now, but will need in future
     * @param iframe
     */
    function initEditor(iframe) {
      var w = iframe.contentWindow;
      var d = w.document;
      var id = iframe.dataset.id;
      var singleTab = iframe.dataset.singleTab || false;

      var editor = initAce(iframe);

      var obj = {
        js: d.getElementById('init-js').value,
        html: editor.getValue(),
        css: d.getElementById('init-css').value
      };

      //when we do js and css in the future, we'll need to check for active tabs here.
      obj.js = obj.js.replace(/>/g, '&gt;');
      obj.js = obj.js.replace(/</g, '&lt;');
      d.getElementById('css-code').innerHTML = obj.css;
      d.getElementById('js-code').innerHTML = obj.js;

      //Set default tab
      toggle(d.getElementById('init-active').value, id, singleTab);
    }

    /**
     * Inits the Ace Editor and sets the options
     * @param id
     * @param w
     * @param d
     * @returns {*}
     */
    function initAce(iframe) {
      var w = iframe.contentWindow;
      var d = w.document;

      var fullId = 'codeeditor';
      var block = d.getElementById(fullId);
      var settings = JSON.parse(block.dataset.settings);
      var editor = w.ace.edit(fullId);

      editor.setTheme('ace/theme/' + settings.theme);
      editor.getSession().setMode('ace/mode/' + settings.mode);
      editor.setReadOnly(settings.readOnly);
      editor.setOption('maxLines', settings.maxLines);
      editor.setOption('fontSize', '16pt');

      return editor;
    }

    /**
     * Toggle the tab
     * @param target
     * @param id
     * @param singleTab
     * @param iframe
     */
    function toggle(target, id, singleTab) {
      var iframe = document.getElementById('code-edit-container' + id);

      var d = iframe.contentWindow.document;

      if (target === 'result') {
        updateIframeCode(iframe);
      }

      if (singleTab) {
        var container = d.getElementById(target);
        container.style.display = "";
      }
      else {
        var containers = ['result', 'html', 'js', 'css'];
        for (var i = 0; i < containers.length; i++) {
          var container = d.getElementById(containers[i]);
          var btn = d.getElementById(containers[i] + '-btn');

          if (container.id === target) {
            container.style.display = "";
            btn.className = "zc-btn active";
          }
          else {
            if (btn) {
              btn.className = "zc-btn";
            }
            container.style.display = "none";
          }
        }
      }
    }

    function extractDelimited(source, start, end) {
      var aParts = source.split(start);
      var i = 1;
      var deferString = "";
      var headString = aParts[0];
      while (i < aParts.length) {
        //Defer String
        deferString += aParts[i].split(end)[0];
        headString += aParts[i].slice(aParts[i].indexOf(end) + 9);
        i++;
      }
      return {
        extracted: deferString,
        remaining: headString
      }
    }

    function updateIframeCode(iframe) {
      var w = iframe.contentWindow;
      var d = w.document;

      var editor = w.ace.edit('codeeditor');
      var obj = {
        js: d.getElementById('init-js').value,
        html: editor.getValue(),
        css: d.getElementById('init-css').value
      };

      var htmlParts = extractDelimited(obj.html, "<" + "script>", "<" + "/script>");
      var sJS = "<" + "script> window.onload= function(){" + htmlParts.extracted + obj.js + "}<" + "/script>";
      var aParts = htmlParts.remaining.split('<' + '/body>');
      var index = aParts[0].indexOf('<' + 'body>');
      aParts[0] = aParts[0].slice(0, index + 5) + " style='margin:0px'" + aParts[0].slice(index + 5);
      var sHTML = aParts[0] + sJS + aParts[1];

      //Inject CSS
      aParts = sHTML.split('<' + '/head>');
      sHTML = aParts[0] + "<" + "style>" + obj.css + "<" + "/style>" + "</" + "head>" + aParts[1];

      createResultIframe(sHTML, iframe);
    }

    function createResultIframe(sHTML, iframe) {
      var d = iframe.contentWindow.document;
      var result = d.getElementById('result');
      var child = d.getElementById('preview');

      if (child) {
        result.removeChild(child);
      }

      var height = result.dataset.height;
      var iFrame = d.createElement('iframe');
      iFrame.style.width = "100%";
      iFrame.style.height = height;
      iFrame.id = "preview";
      iFrame.src = "";
      iFrame.frameBorder = "0";
      result.appendChild(iFrame);
      d.getElementById('preview').contentWindow.document.write(sHTML);
      d.getElementById('preview').contentWindow.document.close();
    }

    function exportToCodepen(id) {
      var iframe = document.getElementById('code-edit-container' + id);
      var w = iframe.contentWindow;
      var d = w.document;

      var editor = w.ace.edit('codeeditor');

      var obj = {
        js: d.getElementById('init-js').value,
        html: editor.getValue(),
        css: d.getElementById('init-css').value
      };

      d.getElementById('codepen-data').value = JSON.stringify(obj);
      d.getElementById('codepen-form').submit();
    }

    function getExternalContent(url, callback){
      var xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function() {
        if( xhr.readyState === 4 ) {
            callback(xhr.responseText);
        }
      };

      xhr.open('GET', url, false);
      xhr.send();
    }

    function loadTemplate(options) {
      var str = `
  <!DOCTYPE html><html>
    <head>
    <link rel="stylesheet" href="${_root}/plugin/code-editor/editor.css">
    <script src="http://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.3/ace.js"></script>
    <script src="${_root}/plugin/code-editor/encoder.js"></script>
    </head>
    <body>
    <div class="zc-editor" data-id="${options.id}" data-single-tab="${options.singleTab}">`;

      if (!options.singleTab) {
        str += `
      <div class="zc-top blue">
        <div class="zc-actions">
          <div class="zc-btn" data-text="JSFiddle" onclick="parent.RevealCodeEditor.exportToCodepen(${options.id});">
            <div>Export</div>
          </div>
        </div>

        <div class="zc-commands">
          <div id="html-btn" class="zc-btn" onclick="parent.RevealCodeEditor.toggle('html', ${options.id})">HTML</div>
          <!--<div id="js-btn" class="zc-btn" onclick="toggle('js', ${options.id})">JavaScript</div>-->
          <!--<div id="css-btn" class="zc-btn" onclick="toggle('css', ${options.id})">CSS</div>-->
          <div id="result-btn" class="zc-btn" onclick="parent.RevealCodeEditor.toggle('result', ${options.id})">Result</div>
        </div>
      </div>`;
      }

      str += `
      <div class="zc-content">
        <div id="html" class="zc-cont" style="display:none; ">
          <div class="editor" id="codeeditor" data-settings='${ JSON.stringify(options.editorSettings) }'>${options.html}</div>
        </div>`;

      if (!options.singleTab || options.singleTab === 'result') {
        str += `<div id="result" class="zc-cont" style="overflow:hidden;" data-height="${options.height}"></div>`;
      }

      str += `
        <div id="js" class="zc-cont" style="display:none">
          <pre  id="js-code" class="prettyprint linenums"></pre>
        </div>

        <div id="css" class="zc-cont" style="display:none">
          <pre  id="css-code" class="prettyprint linenums"></pre>
        </div>

      </div>

      <input type="hidden" id="init-html" value= "${ options.html }">
      <input type="hidden" id="init-css" value= "${ options.css }">
      <input type="hidden" id="init-js" value= "${options.js }">
      <input type="hidden" id="init-active" value= "${options.initTab }">

      <div style="display:none;">
        <form method="post" id="codepen-form" action="//codepen.io/pen/define" target="check">
          <input id="codepen-data" type="hidden" name="data" />
          <input type="hidden" name="wrap" value="l">
        </form>
      </div>
    </div></body>
    </html>
  `;

      return str;
    }

    return {
      toggle: toggle,
      exportToCodepen: exportToCodepen
    };

})();
