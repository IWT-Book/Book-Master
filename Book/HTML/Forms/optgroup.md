<section data-markdown>
<script type="text/template">
#optgroup
This element specifies a grouping of items in a selection list defined by option elements so that the menu choices can be presented in a hierarchical menu or similar alternative fashion to improve access through nonvisual browsers.
</script>
</section>

<section data-markdown>
<script type="text/template">
###HTML5 Standard Syntax
```
<optgroup
     class="class name(s)"
     dir="ltr | rtl"
     disabled="disabled"
     id="unique alphanumeric identifier"
     label="text description"
     lang="language code"
     style="style information"
     title="advisory text">
          option elements
</optgroup>
```
</script>
</section>

<section data-markdown data-render=both>
<script type="text/template" >
###Element-Specific Attributes
* `disabled` Occurrence of this attribute indicates that the enclosed set of options is disabled.
* `label` This attribute contains a short label to use when the selection list is rendered as items in a hierarchy.
</script>
</section>
#### Examples
<section>
{% codeeditor src='../../../HTML/4Elements/forms/optgroup.html' %}{% endcodeeditor %}
</section>

<section data-markdown>
<script type="text/template">
###Notes
* This element should occur only within the context of a select element.
* The visual presentation of this element may vary slightly between browsers.
</script>
</section>