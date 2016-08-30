<section data-markdown>
<script type="text/template">
#Button
This element defines a rich button that may contain arbitrary content to augment what the standard &lt;input type="button"&gt; provides.
</script>
</section>

<section data-markdown>
<script type="text/template">
###HTML5 Standard Syntax
```
<button
     accesskey="key"
     class="class name(s)"
     dir="ltr | rtl"
     disabled="disabled"
     id="unique alphanumeric identifier"
     lang="language code"
     name="button name"
     style="style information"
     tabindex="number"
     title="advisory text"
     type="button | reset | submit"
     value="button value">
</button>
```
</script>
</section>

<section data-markdown data-render=both>
<script type="text/template" >
###Element-Specific Attributes
* `autofocus` This HTML5 Boolean attribute is used to indicate that the user agent should immediately focus this form item once its containing window object (usually the document) is made active. It takes an attribute value of autofocus when using the XML-style syntax for XHTML5.
* `form` This HTML5 attribute should be set to a string that corresponds to the id of the form element that the button is associated with. This allows form elements in one form to trigger actions in others.
* `formaction` This HTML5 attribute specifies a URL to target when the button is clicked, similar to the use of the action attribute on a form element.
* `formenctype` Under HTML5 this attribute is set to the MIME type for how data should be transmitted to the URL specified in the action attribute. Common values include application/x-www-form-urlencoded (the default value when not specified), multipart/formdata, and text/plain.
* `formmethod` This HTML5 attribute indicates how form information should be transferred to the server using a particular HTTP method. A get value in the attribute indicates that form data should be appended to the URL specified by the action attribute creating a query string. This approach is quite simple but imposes a size limitation that is difficult to gauge (may be as low as 2 kilobytes or even ~300 characters in real situations). A value of post for this attribute transfers the data of the form in the message body using the HTTP POST method, which imposes no data size limitation. Browsers may allow for other HTTP methods like delete or put, as suggested by the HTML5 specification, but so far such usage is rare. The post value must be used when file attachments are used in a form.
* `formnovalidate` This HTML5 Boolean attribute is used to indicate a form should not be validated during submission. It is false by default but may be controlled either on the button directly or on a containing or related form. Initially this was simply known as novalidate.
* `formtarget` This HTML5 attribute is set to the name of a window or frame that the button action will target the result of action, similar to the target attribute on <a> and <form> tags. Initially, this attribute was simply target in early drafts of HTML5.
* `name` This attribute is used to define a name for the button so that it can be scripted by older browsers or used to provide a name for submit buttons when a page has more than one. The id attribute is preferred for scripting purposes.
* `type` This attribute defines the action of the button. Possible values include button, reset, and submit, which are used to indicate that the button is a plain button, form reset button, or form submission button, respectively. The XHTML specification indicates submit is the default, but browsers may not enforce this in practice.
* `value` This attribute defines the value that is sent to the server when the button is clicked. This might be useful when using multiple submit buttons that perform different actions, to indicate to the handling server-side program which button was clicked.  the parent frame set containing the source link. The _self value indicates the frame containing the source link. The _top value indicates the full browser window. HTML5 may allow for targeting of nonframed regions of the page.
</script>
</section>
#### Examples
<section>
{% codeeditor src='../../../HTML/4Elements/forms/button.html' %}{% endcodeeditor %}
</section>

<section data-markdown>
<script type="text/template">
###Notes
* It is not appropriate to associate an image map with an &lt;img&gt; tag that appears as the content of a button element.
* HTML5 may eventually add new values to the type attribute. Already many new type values have been proposed in different forums, such as add, remove, move-up, and move-down. These may produce predefined button styles, including icons in some user agents, but so far their inclusion is far from certain.
</script>
</section>
