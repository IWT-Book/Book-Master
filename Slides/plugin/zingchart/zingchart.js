var RevealZingChart = window.RevealZingChart || (function() {

    var _zingcounter = 1;
    initCharts();

    /**
     * initEditors - Run in Main Page and search for all iframes
     */
    function initCharts() {
      var blocks = document.querySelectorAll('iframe[data-zingchart]');
      for (var i = 0; i < blocks.length; i++) {
        injectCode(blocks[i]);
      }
    }

    function injectCode(iframe){
      iframe.id = 'zingchart-container' + _zingcounter++;
      var d = iframe.contentWindow.document;

      var data = iframe.textContent.replace(/<!--/, '').replace(/-->/, '').trim();

      d.write(loadPage());

      iframe.onload = function() {
        renderChart(iframe, data);
      };

      d.close();


    }

    function renderChart(iframe, data) {
      var w = iframe.contentWindow;

      var obj = {id: 'zingchart-chart'};

      if (data !== '') {
        obj.data = data;
      }

      for (var key in iframe.dataset) {
        if (key !== 'zingchart') {
          obj[key] = iframe.dataset[key];
        }
      }

console.log(obj)
      w.zingchart.render(obj);

    }

    function loadPage(){
        var str = `
  <!DOCTYPE html><html>
    <head>
    <script src="https://cdn.zingchart.com/zingchart.min.js"></script>
    </head>
    <body>
    <div id="zingchart-chart"></div>
    </body>
    </html>`;

      return str;
    }

})();
