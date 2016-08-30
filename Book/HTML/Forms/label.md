<section data-markdown>
<script type="text/template">
#label
This element is used to relate descriptions to form controls.
</script>
</section>

<section data-markdown>
<script type="text/template">
###HTML5 Standard Syntax
```
<label
     accesskey="key"
     class="class name(s)"
     dir="ltr | rtl"
     for="id of form field"
     id="unique alphanumeric identifier"
     lang="language code"
     style="style information"
     title="advisory text">
</label>
```
</script>
</section>

<section data-markdown data-render=both>
<script type="text/template" >
###Element-Specific Attributes
* `for` This attribute specifies the id for the form control element the label references. This is optional when the label encloses the form control it is bound to. In many cases, particularly when a table is used to structure the form, a &lt;label&gt; tag will not be able to enclose the associated form control, so the for attribute should be used. This attribute allows more than one label to be associated with the same control by creating multiple references.
</script>
</section>
#### Examples
<section>
{% codeeditor src='../../../HTML/4Elements/forms/label.html' %}{% endcodeeditor %}
</section>

<section data-markdown>
<script type="text/template">
###Notes
* Each &lt;label&gt; must not contain more than one form field.
* The label element should not be nested.
</script>
</section>