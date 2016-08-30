<section data-markdown>
<script type="text/template">
#form
The element defines a fill-in form that can contain labels and form controls, such as menus and text entry boxes that might be filled in by a user.
</script>
</section>

<section data-markdown>
<script type="text/template">
###HTML5 Standard Syntax
```html
<form
    accept-charset="list of supported character sets"
    action="URL"
    class="class name(s)"
    dir="ltr | rtl"
    enctype="application/x-www-form-urlencoded | multipart/form-data | text/plain | Media Type as per RFC 2045"
    id="unique alphanumeric identifier"
    lang="language code"
    method="get | post"
    name="form's name for scripting"
    style="style information"
    target="_blank | frame name | _parent | _self | _top" (transitional only)
    title="advisory text">
</form>
```
</script>
</section>

<section data-markdown data-render=both>
<script type="text/template" >
###Element-Specific Attributes
* `accept-charset` This attribute specifies the list of character encodings for input data that must be accepted by the server processing the form. The value is a space- or comma- delimited list of character sets as defined in RFC 2045. The default value for this attribute is the reserved value unknown.
* `action` This attribute contains the URL of the server program that will process the contents of the form. Some browsers also might support a mailto URL, which can mail the results to the specified address. Otherwise, the delivery of the data in the form is defined by the method attribute.
* `autocomplete` This Microsoft proprietary attribute, introduced in Internet Explorer 5.0 and redefined under HTML5, will automatically finish filling in information that the user has previously input into an input field. Auto-filled information will likely be stored locally on the end-user’s system by some program, typically the browser itself.
* `enctype` This attribute indicates how form data should be encoded before being sent to the server. The default is `application/x-www-form-urlencoded`. This encoding replaces blank characters in the data with a plus character (+) and all other nonprinting characters with a percent sign (%) followed by the character’s ASCII HEX representation. The multipart/form-data option does not perform character conversion and transfers the information as a compound MIME document. This must be used when using `<input type="file">`. It also might be possible to use another encoding, such as text/plain with a mailed form, but in general you should be cautious about changing the enctype.
* `method` This attribute indicates how form information should be transferred to the server using a particular HTTP method. A get value in the attribute indicates that form data should be appended to the URL specified by the action attribute, thus creating a query string. This approach is quite simple but imposes a size limitation that is difficult to gauge (may be as low as 2 kilobytes in real situations). A value of post for this attribute transfers the data of the form in the message body using the HTTP POST method which imposes no data size limitation. Browsers may allow for other HTTP methods like delete or put as suggested by the HTML5 specification, but so far such usage is rare. The POST method must be used when file attachments are used in a form.
* `name` This attribute specifies a name for the form and was traditionally used by JavaScript or other client-side programming technologies to reference forms and their contained elements. Since HTML 4, the core id attribute can be used instead with DOM methods such as `document.getElementById()`.
* `novalidate` This HTML5 Boolean attribute determines whether or not form validation should be applied on the elements within. By default, validation is enforced unless overridden by this attribute on the form level or a formnovalidate attribute is found on a form element.
* `target` In documents containing frames, this attribute specifies the target frame that will display the results of a form submission. In addition to named frames, several special values exist. The `_blank` value indicates a new window. The `_parent` value indicates the parent frame set containing the source link. The `_self` value indicates the frame containing the source link. The `_top` value indicates the full browser window. HTML5 may allow for targeting of nonframed regions of the page.
</script>
</section>
#### Examples
<section>
{% codeeditor src='../../../HTML/4Elements/forms/form.html' %}{% endcodeeditor %}
</section>

<section data-markdown>
<script type="text/template">
###Notes
* Form content is defined using the &lt;button&gt;, &lt;input&gt;, &lt;select&gt;, and &lt;textarea&gt; tags, as well as other HTML formatting and structuring elements. However, they may not contain other form elements.
* Special grouping elements, such as fieldset, label, and legend, are provided to structure form fields, but more often tags like &lt;div&gt; and &lt;table&gt; are used to improve form layout.
* HTML 2 and 3.2 support only the action, enctype, and method attributes for the form element.
</script>
</section>