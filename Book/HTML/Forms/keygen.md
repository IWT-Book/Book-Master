<section data-markdown>
<script type="text/template">
#keygen
This element is used to control the generation of key pairs in secured communications. On form submission, the browser will generate a key pair and store the private key in the browser’s private key storage and send the public key to the server.
</script>
</section>

<section data-markdown>
<script type="text/template">
###HTML5 Standard Syntax
```
<keygen
     accesskey="spaced list of accelerator key(s)"
     autofocus="true | false"
     challenge="value for generating challenge"
     class="class name(s)"
     contenteditable="true | false | inherit"
     contextmenu="id of menu"
     data-X="user-defined data"
     dir="ltr | rtl"
     disabled="disabled"
     draggable="true | false | auto"
     form="id of enclosing form"
     hidden="hidden"
     id="unique alphanumeric identifier"
     itemid="microdata id in URL format"
     itemprop="microdata value"
     itemref="space-separated list of IDs that may contain microdata"
     itemscope="itemscope"
     itemtype="microdata type in URL format"
     keytype="enumerated value for type of key (generally rsa)"
     lang="language code"
     name="field name"
     spellcheck="true | false"
     style="style information"
     tabindex="number"
     title="advisory text">
</keygen>
```
</script>
</section>

#### Examples
<section>
{% codeeditor src='../../../HTML/4Elements/forms/keygen.html' %}{% endcodeeditor %}
</section>

<section data-markdown>
<script type="text/template">
###Notes
* As an empty element when using XML-style syntax for HTML5, a trailing slash is required for this element: &lt;keygen /&gt;.
* This element was initially introduced by Netscape and, although it has been poorly documented, has been formalized for HTML5. There is strong indication that some browser vendors like Microsoft may not support this element or support it only as a dummy element.
</script>
</section>