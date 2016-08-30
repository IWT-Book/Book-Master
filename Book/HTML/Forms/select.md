<section data-markdown>
<script type="text/template">
#select
This element defines a selection list within a form. Depending on the form of the selection list, the control allows the user to select one or more list options.
</script>
</section>

<section data-markdown>
<script type="text/template">
###HTML5 Standard Syntax
```
<select
     class="class name(s)"
     dir="ltr | rtl"
     disabled="disabled"
     id="unique alphanumeric identifier"
     lang="language code"
     multiple="multiple"
     name="unique alphanumeric name"
     size="number"
     style="style information"
     tabindex="number"
     title="advisory text">
  option and optgroup elements only
</select>
```
</script>
</section>

<section data-markdown data-render=both>
<script type="text/template" >
###Element-Specific Attributes
* `align` This Microsoft-specific attribute controls the alignment of the image with respect to the content on the page. The default value is left, but other values such as absbottom, absmiddle, baseline, bottom, middle, right, texttop, and top also might be supported. The meaning of these values should be similar to those used for inserted objects, such as images.
* `autofocus` This HTML5 Boolean attribute is used to indicate that the user agent should immediately focus this form item once its containing window object (usually the document) is made active. It only takes an attribute value of autofocus when using the XML-style syntax for HTML5.
* `disabled` This attribute is used to turn off a form control. Elements will not be submitted, nor can they receive any focus from the keyboard or mouse. Disabled form controls will not be part of the tabbing order. The browser also can gray out the form that is disabled, to indicate to the user that the form control is inactive. This attribute requires no value under traditional HTML, but under XHTML variants it should be set to disabled.
* `form` This HTML5 attribute should be set to a string that corresponds to the id of the form element that the button is associated with. This allows form elements in one form to trigger actions in others.
* `multiple` This attribute allows the selection of multiple items in the selection list. The default is single-item selection. Under XHTML, this attribute must have its value set to multiple.
* `name` This attribute allows a form control to be assigned a name for defining the name/ value pair used in form submission. Traditionally, these values were used by scripting languages as well, though the standards encourage the use of the id attribute. For compatibility purposes, both might have to be used.
* `size` This attribute sets the number of visible items in the selection list. When the multiple attribute is not present, only one entry should show; however, when multiple is present, this attribute is useful for setting the size of the scrolling list box.
* `tabindex` This attribute takes a numeric value indicating the position of the form control in the tabbing index for the form. Tabbing proceeds from the lowest positive tabindex value to the highest. Negative values for tabindex will leave the form control out of the tabbing order. When tabbing is not explicitly set, the browser might tab through items in the order they are encountered. Form controls that are disabled due to the presence of the disabled attribute will not be part of the tabbing index.
</script>
</section>
#### Examples
<section>
{% codeeditor src='../../../HTML/4Elements/forms/select.html' %}{% endcodeeditor %}
</section>

<section data-markdown>
<script type="text/template">
###Notes
* The HTML 4.01 specification reserves the attributes `datafld` and `datasrc` for future use, but these are removed under XHTML.
* Internet Explorer’s variant of the disabled attribute allows values of `true` and `false`, as well as the standard disabled value.
* Under traditional HTML, the end tag &lt;/option&gt; is often omitted.
* Be careful of the name and id attribute problem that may occur, particularly when setting the multiple attribute. It may be better to have separate values.
* The HTML 2.0 and 3.2 specifications define only multiple, name, and size
attributes.
</script>
</section>