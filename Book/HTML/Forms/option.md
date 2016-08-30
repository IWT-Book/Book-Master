<section data-markdown>
<script type="text/template">
#option
This element specifies an item in a selection list defined by a select element.
</script>
</section>

<section data-markdown>
<script type="text/template">
###HTML5 Standard Syntax
```
<option
     class="class name(s)"
     dir="ltr | rtl"
     disabled="disabled"
     id="unique alphanumeric identifier"
     label="text description"
     lang="language code"
     selected="selected"
     style="style information"
     title="advisory text"
     value="option value">
</option>
```
</script>
</section>

<section data-markdown data-render=both>
<script type="text/template" >
###Element-Specific Attributes
* `disabled` Presence of this attribute indicates that the particular item is not selectable. Traditional HTML did not require a value for this attribute, but it should be set to disabled under XHTML.
* `label` This attribute contains a short label that might be more appealing to use when the selection list is rendered as a hierarchy due to the presence of an optgroup element.
* `selected` This attribute indicates that the associated item is the default selection. If this attribute is not included, the first item in the selection list is the default. If the select element enclosing the option elements has the multiple attribute, the selected attribute might occur in multiple entries. Otherwise, it should occur in only one entry. Under XHTML, the value of the selected attribute must be set to selected.
* `value` This attribute indicates the value to be included with the form result when the item is selected.
</script>
</section>
#### Examples
<section>
{% codeeditor src='../../../HTML/4Elements/forms/option.html' %}{% endcodeeditor %}
</section>

<section data-markdown>
<script type="text/template">
###Notes
* Under HTML specifications, the closing tag for <option> is optional. However, for XHTML compatibility, the closing tag </option> is required.
* This element should occur only within the context of a select element.
* The HTML 2.0 and 3.2 specifications define only the selected and value attributes for this element.
</script>
</section>