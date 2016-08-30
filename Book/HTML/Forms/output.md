<section data-markdown>
<script type="text/template">
#output
This HTML5 block element defines a region that will be used to display output from some calculation or form control.
</script>
</section>

<section data-markdown>
<script type="text/template">
###HTML5 Standard Syntax
```
<output
     accesskey="spaced list of accelerator key(s)"
     class="class name(s)"
     contenteditable="true | false | inherit"
     contextmenu="id of menu"
     data-X="user-defined data"
     dir="ltr | rtl"
     draggable="true | false | auto"
     for="list of spaced id values of related elements"
     form="id of related form element"
     hidden="hidden"
     id="unique alphanumeric identifier"
     itemid="microdata id in URL format"
     itemprop="microdata value"
     itemref="space-separated list of IDs that may contain microdata"
     itemscope="itemscope"
     itemtype="microdata type in URL format"
     lang="language code"
     name="element name for submission purposes"
     spellcheck="true | false"
     style="style information"
     tabindex="number"
     title="advisory text">
</output>
```
</script>
</section>

<section data-markdown data-render=both>
<script type="text/template" >
###Element-Specific Attributes
* `for` This attribute should be set to the id value(s) of the elements that target this element.
* `form` This attribute should be set to the id value of the form element that the output element is associated with; otherwise, the nearest parent form is used.
* `name` This attribute should set the name to be used in a name/value pair if the element is used in form submission.
</script>
</section>
#### Examples
<section>
{% codeeditor src='../../../HTML/4Elements/forms/output.html' %}{% endcodeeditor %}
</section>

<section data-markdown>
<script type="text/template">
###Notes
* This element supports two useful event handlers that are globally defined by HTML5, onformchange and onforminput, if the element will be used to monitor forms it is associated with rather than forms targeting it.
</script>
</section>