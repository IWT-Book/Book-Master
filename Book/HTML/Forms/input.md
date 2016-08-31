<section data-markdown>
<script type="text/template">
#input
This element specifies an input control for a form. The type of input is set by the type attribute and can be a variety of different types, including single-line text field, password field, hidden, check box, radio button, or push button. HTML5 extends the possibilities of this form greatly and adds a number of features for browser-based validation without using JavaScript.
</script>
</section>

<section>
<h3>HTML5 Standard Syntax</h3>

<div class="syntaxbox">
    &lt;<span class='tagname'>input</span><br>
     <span class='attrname'>accept</span>=<span class='attrvalue'>"MIME types"</span></br>
     <span class='attrname'>accesskey</span>=<span class='attrvalue'>"character"</span></br>
     <span class='attrname'>align</span>=<span class='attrvalue'>"bottom | left | middle | right | top"</span> (transitional only)</br>
     <span class='attrname'>alt</span>=<span class='attrvalue'>"text"</span></br>
     <span class='attrname'>checked</span>=<span class='attrvalue'>"checked"</span></br>
     <span class='attrname'>class</span>=<span class='attrvalue'>"class name(s)"</span></br>
     <span class='attrname'>dir</span>=<span class='attrvalue'>"ltr | rtl"</span></br>
     <span class='attrname'>disabled</span>=<span class='attrvalue'>"disabled"</span></br>
     <span class='attrname'>id</span>=<span class='attrvalue'>"unique alphanumeric identifier"</span></br>
     <span class='attrname'>lang</span>=<span class='attrvalue'>"language code"</span></br>
     <span class='attrname'>maxlength</span>=<span class='attrvalue'>"maximum field size"</span></br>
     <span class='attrname'>name</span>=<span class='attrvalue'>"field name"</span></br>
     <span class='attrname'>readonly</span>=<span class='attrvalue'>"readonly"</span></br>
     <span class='attrname'>size</span>=<span class='attrvalue'>"field size"</span></br>
     <span class='attrname'>src</span>=<span class='attrvalue'>"URL of image file"</span></br>
     <span class='attrname'>style</span>=<span class='attrvalue'>"style information"</span></br>
     <span class='attrname'>tabindex</span>=<span class='attrvalue'>"number"</span></br>
     <span class='attrname'>title</span>=<span class='attrvalue'>"advisory text"</span></br>
     <span class='attrname'>type</span>=<span class='attrvalue'>"button | checkbox | file | hidden | image |
           password | radio | reset | submit | text"</span></br>
     <span class='attrname'>usemap</span>=<span class='attrvalue'>"URL of map file"</span></br>
     <span class='attrname'>value</span>=<span class='attrvalue'>"field value"&gt;</span></br>   
</div>
</section>

<section data-markdown data-render=both>
<script type="text/template" >
###Element-Specific Attributes
</script>
</section>
* **accept**  
   This attribute is used to list the MIME types accepted for file uploads when using a file upload control (&lt;input type="file"&gt;).

* **align**  
With image form controls (type="image"), this attribute aligns the image with respect to surrounding text. The HTML 4.01 transitional specification defines bottom, left, middle, right, and top as allowable values. Netscape and Microsoft browsers might also allow the use of attribute values such as absbottom or absmiddle. Like other presentation- specific aspects of HTML, the align attribute is dropped under the strict HTML 4.01 specification.

* **alt**  
This attribute is used to display an alternative description of image buttons for text- only browsers. The meaning of alt for forms of &lt;input&gt; beyond type="input" is not defined.

* **autocomplete**  
This Microsoft-specific attribute is used to indicate whether or not the form field should be automatically filled in. The default value is no. HTML5 also supports this attribute.

* **autofocus**  
This HTML5 Boolean attribute is used to indicate that the user agent should immediately focus this form item once its containing window object (usually the document) is made active. It only takes an attribute value of autofocus when using the XML-style syntax for HTML5. It is not defined for &lt;input type="hidden"&gt;.
<section data-markdown data-render=both>
<script type="text/template" >
* **checked**  
The checked attribute should be used only for check box (type="checkbox") and radio (type="radio") form controls. The presence of this attribute indicates that the control should be displayed in its checked state.
</script>
</section>
* **disabled**  
This attribute is used to turn off a form control. Elements will not be submitted, nor will they receive any focus from the keyboard or mouse. Disabled form controls will not be part of the tabbing order. The browser also might gray out the form that is disabled, to indicate to the user that the form control is inactive. This attribute requires no value.
<section data-markdown data-render=both>
<script type="text/template" >
* **form**  
This HTML5 attribute should be set to a string that corresponds to the id of the form element that an interactive control such as a button is associated with. This allows form elements in one form to trigger actions in others.
</script>
</section>

* **formaction**  
This HTML5 attribute specifies a URL to target when the button is clicked, similar to the use of the action attribute on a form element.

* **formenctype**  
This attribute indicates how form data should be encoded before being sent to the server. The default is application/x-www-form-urlencoded. This encoding replaces blank characters in the data with a plus character (+) and all other nonprinting characters with a percent sign (%) followed by the character’s ASCII HEX representation. The multipart/form-data option does not perform character conversion and transfers the information as a compound MIME document. This must be used when using &lt;input- type="file"&gt;. It also might be possible to use another encoding, such as text/plain with a mailed form, but in general you should be cautious about changing the enctype.

* **formmethod**  
This HTML5 attribute indicates how form information should be transferred to the server using a particular HTTP method. A get value in the attribute indicates that form data should be appended to the URL specified by the action attribute thus creating a query string. This approach is quite simple but imposes a size limitation that is difficult to gauge (may be as low as 2 kilobytes in real situations). A value of post for this attribute transfers the data of the form in the message body using the HTTP POST method, which imposes no data size limitation. Browsers may allow for other HTTP methods like delete or put, as suggested by the HTML5 specification, but so far such usage is rare. The POST method must be used when file attachments are used in a form.

* **formnovalidate**  
This HTML5 Boolean attribute is used to indicate a form should not be validated during submission. It is false by default but may be controlled either on the button directly or on a containing or related form. Initially this was simply known as novalidate.

* **formtarget**  
This HTML5 attribute is set to the name of a window or frame that the button will target the result of action; in other words, where the result should appear. This action is similar to the target attribute on &lt;a&gt; and &lt;form&gt; tags. Initially, this attribute was simply target in early drafts of HTML5.

* **height**  
Defined under HTML5, though commonly supported in older browsers, this attribute is used to size an input element particularly when images are used as in &lt;input type="image"&gt;. CSS properties are preferred.

* **hspace**  
This Internet Explorer–specific attribute indicates the horizontal space, in pixels, between the image and surrounding text when using &lt;input type="image"&gt;.

* **list**  
The HTML5 list attribute is used to set the id of a datalist element used to provide a predefined list of options suggested to the user for entry.

* **loop**  
In the Microsoft implementation, this attribute is used with &lt;input type="image"&gt; and the dynsrc attribute to cause a movie to loop. Its value is either a numeric loop count or the keyword infinite. Later versions of Internet Explorer suggest using –1 to indicate infinite.

* **lowsrc**  
This Microsoft-supported attribute contains the URL of an image to be initially loaded when using &lt;input type="image"&gt;. Typically, the lowsrc image is a low- resolution or black-and-white image that provides a quick preview of the image to follow. Once the primary image is loaded, it replaces the lowsrc image.

* **max**  
This HTML5 attribute should be set to a numeric value that is the high range allowed in the form control. The min attribute sets the low range.

* **maxlength**  
This attribute indicates the maximum content length that can be entered in a text form control (type="text"). The maximum number of characters allowed differs from the visible dimension of the form control, which is set with the size attribute.

* **min**  
This HTML5 attribute should be set to a numeric value that is the low range allowed in the form control. The max attribute sets the high range.

* **multiple**  
This HTML5 Boolean attribute, when set to true, indicates that multiple values are allowed for the field.

* **name**  
This attribute allows a form control to be assigned a name to set as the name/value pair value sent to the server. Traditionally, this value was also used for reference by a scripting language, but using the id value is more appropriate. However, given that browsers sometimes favor the older syntax, both may often be used and set to the same value, with some limitations, particularly with radio buttons.

* **pattern**  
This HTML5 attribute specifies a regular expression against which the field should be validated. The title attribute should be provided when this attribute is used, to give an indication of what is an acceptable pattern and what isn’t.

* **placeholder**  
This HTML5 attribute specifies a short bit of text that is used to help the user figure out what type of information to fill in for a form control. Likely, the text will be placed in the field and cleared upon focus.

* **readonly**  
This attribute prevents the form control’s value from being changed. Form controls with this attribute set might receive focus from the user but not permit the user to modify the value. Because it receives focus, a readonly form control will be part of the form’s tabbing order. The control’s value will be sent on form submission. This attribute can be used only with &lt;input&gt; when type is set to text or password. The attribute also is used with the textarea element.

* **required**  
The presence of this HTML5 Boolean attribute indicates that the form field must be set in order for form submission to proceed. User agents that understand this should set the CSS pseudo-class :invalid when the field goes into error.

* **size**  
This attribute indicates the visible dimension, in characters, of a text form control (type="text"). This differs from the maximum length of content, which can be entered in a form control set by the maxlength attribute.

* **src**  
This attribute is used with image form controls (type="image") to specify the URL of the image file to load.

* **step**  
This HTML5 attribute defines the step in which values can take; for example, by twos (2, 4, 6...) or tens (10, 20, 30...). It is generally used in range controls.

* **tabindex**  
This attribute takes a numeric value that indicates the position of the form control in the tabbing index for the form. Tabbing proceeds from the lowest positive tabindex value to the highest. Negative values for tabindex will leave the form control out of the tabbing order. When tabbing is not explicitly set, the browser tabs through items in the order they are encountered. Disabled form fields will not be part of the tabbing index, although read-only controls will be.
<section data-markdown data-render=both>
<script type="text/template" >
* **type**  
This attribute specifies the type of the form control. A value of button indicates a general-purpose button with no well-defined meaning. However, an action can be associated with the button by using an event handler attribute, such as onclick. A value of checkbox indicates a check box control. Check box form controls have a checked and unchecked setting, but even if these controls are grouped together, they allow a user to select multiple check boxes simultaneously. In contrast, a value of radio indicates a radio button control. When grouped, radio buttons allow only one of the many choices to be selected at a given time.
</script>
</section>
   
* **usemap**  
This HTML 4.0 attribute is used to indicate the map file to be associated with an image when the form control is set with type="image". The value of the attribute should be a URL of a map file but generally will be in the form of a URL fragment referencing a map file within the current file.

* **value**  
This attribute has two different uses, depending on the value for the type attribute. With data-entry controls (type="text" and type="password"), this attribute is used to set the default value for the control. When used with check box or radio button form controls, this attribute specifies the return value for the control. If it is not set for these fields, a default value of on will be submitted when the control is activated.

* **vspace**  
This Internet Explorer–specific attribute indicates the vertical space, in pixels, between the image and surrounding text when using &lt;input type="image"&gt;.

* **width**  
This attribute, initially supported by many browsers such as Internet Explorer for image buttons and now defined under HTML5, is used to set the size of the form control, in pixels. This should be controlled with CSS instead.

#### Examples
<section>
{% codeeditor src='../../../HTML/4Elements/forms/input.html' %}{% endcodeeditor %}
</section>

<section data-markdown>
<script type="text/template">
###Notes
* The HTML 2.0 and 3.2 specifications support only the align, checked, maxlength, name, size, src, type, and value attributes for the input element.
* The HTML 4.01 specification also reserves the use of the datafld, dataformatas, and datasrc data-binding attributes. They were not included in the XHTML specification but are supported by Internet Explorer.
* Use of autocomplete may have security implications. Use with caution.
* Under the strict HTML and XHTML specifications, the align attribute is not
allowed.
* As an empty element under XHTML or when using XML-style syntax for HTML5,
a trailing slash is required for this element: &lt;input /&gt;.
</script>
</section>