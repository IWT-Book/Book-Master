<section data-markdown>
<script type="text/template">
#datalist
This HTML5 element contains option elements that populate an input element with type="list". These listed items would be considered the quick choices for the field, not a limitation of what can be entered, which would be the functionality of a select menu.
</script>
</section>

<section data-markdown>
<script type="text/template">
###HTML5 Standard Syntax
```
<datalist
     accesskey="spaced list of accelerator key(s)"
     class="class name(s)"
     contenteditable="true | false | inherit"
     contextmenu="id of menu"
     data-X="user-defined data"
     dir="ltr | rtl"
     draggable="true | false | auto"
     hidden="hidden"
     id="unique alphanumeric identifier"
     itemid="microdata id in URL format"
     itemprop="microdata value"
     itemref="space-separated list of IDs that may contain microdata"
     itemscope="itemscope"
     itemtype="microdata type in URL format"
     lang="language code"
     spellcheck="true | false"
     style="style information"
     tabindex="number"
     title="advisory text">
  option elements only
</datalist>
```
</script>
</section>

#### Examples
<section>
{% codeeditor src='../../../HTML/4Elements/forms/datalist.html' %}{% endcodeeditor %}
</section>

<section data-markdown>
<script type="text/template">
###Notes
* This element could be simulated with other browsers using script, custom elements, and careful use of CSS.
</script>
</section>