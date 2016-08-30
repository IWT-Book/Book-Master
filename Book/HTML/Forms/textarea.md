<section data-markdown>
<script type="text/template">
#textarea
This element specifies a multiline text input field contained within a form.
</script>
</section>

<section data-markdown>
<script type="text/template">
###HTML5 Standard Syntax
```
<textarea
     accesskey="character"
     class="class name"
     cols="number"
     dir="ltr | rtl"
     disabled="disabled"
     id="unique alphanumeric identifier"
     lang="language code"
     name="unique alphanumeric identifier"
     readonly="readonly"
     rows="number"
     style="style information"
     tabindex="number"
     title="advisory text">
</textarea>
```
</script>
</section>

<section data-markdown data-render=both>
<script type="text/template" >
###Element-Specific Attributes
* `autofocus` This HTML5 Boolean attribute is used to indicate that the user agent should immediately focus this form item once its containing window object (usually the document) is made active. It only takes an attribute value of autofocus when using the XML-style syntax for HTML5.
* `cols` This attribute sets the width, in characters, of the text area. The typical default value for the size of a &lt;textarea&gt; tag when this attribute is not set is 20 characters.
* `disabled` This attribute is used to turn off a form control. Elements will not be submitted, nor can they receive any focus from the keyboard or mouse. Disabled form controls will not be part of the tabbing order. The browser also can gray out the form that is disabled, to indicate to the user that the form control is inactive. This attribute requires no value.
* `form` This HTML5 attribute should be set to a string that corresponds to the id of the form element that an interactive control such as a button is associated with. This allows form elements in one form to trigger actions in others.
* `name` This attribute allows a form control to be assigned a name for submitting to the server the appropriate name/value pair. Previously it was also used so that the field could be referenced by a scripting language. However, it is more appropriate to use the id attribute. For compatibility purposes, both attributes might be used and set to the same value.
* `pattern` This HTML5 attribute specifies a regular expression against which the field should be validated. The title attribute should be provided when this attribute is used, to give an indication of what is an acceptable pattern and what isn’t.
* `placeholder` This HTML5 attribute specifies a short bit of text that is used to help the user figure out what type of information to fill in for a form control. Likely, the text will be placed in the field and cleared upon focus.
* `readonly` This attribute prevents the form control’s value from being changed. Form controls with this attribute set might receive focus from the user but should not permit the user to modify the value. Because it receives focus, a readonly form control will be part of the form’s tabbing order. Finally, the control’s value will be sent on form submission. Under XHTML, the value of the readonly attribute should be set to readonly.
* `required` The presence of this HTML5 Boolean attribute indicates that the user is required to provide a value for the &lt;textarea&gt; tag for the form to be submitted. User agents that understand this should set the CSS pseudo-class :invalid when the field goes into error.
* `rows` This attribute sets the number of rows in the text area. The value of the attribute should be a positive integer.
* `wrap` In some versions of Netscape (later Firefox) and Microsoft browsers, this attribute controls word-wrap behavior. A value of off for the attribute forces the &lt;textarea&gt; tag not to wrap text, so the viewer must manually enter line breaks. A value of hard causes word wrap and includes line breaks in text submitted to the server. A value of soft causes word wrap but removes line breaks from text submitted to the server. Internet Explorer supports a value of physical, which is equivalent to Netscape’s hard value, and a value of virtual, which is equivalent to Netscape’s soft value. If the wrap attribute is not included, text will still wrap under Internet Explorer, but older versions of Netscape, notably Netscape 4, will scroll horizontally in the text box. Given this problem, even though it is nonstandard, it may be a good idea to include the wrap attribute. HTML5 reintroduces this attribute with the values of hard and soft. Use of this attribute assumes that the cols attribute has been set properly.
</script>
</section>
#### Examples
<section>
{% codeeditor src='../../../HTML/4Elements/forms/form.html' %}{% endcodeeditor %}
</section>

<section data-markdown>
<script type="text/template">
###Notes
* Any text between the &lt;textarea&gt; and &lt;/textarea&gt; tags is rendered as the default entry for the form control. Content within a textarea element is not interpreted, so white space is preserved and tags themselves are ignored.
* The textarea element traditionally lacks a maxlength attribute, which causes a more obvious security risk. The HTML5 specification does introduce a maxlength value to restrict the number of characters that may be entered. However, it should be noted that all client-side form validations should be assumed as user conveniences only and not security, as they may be easily removed by malicious users.
* A &lt;textarea&gt; tag cannot be a descendent of an a (anchor) or button element.
* The HTML 4.01 specification reserves the datafld and datasrc attributes for future use with the textarea element.
* The HTML 2.0 and 3.2 specifications define only the cols, name, and rows attributes for this element.
</script>
</section>