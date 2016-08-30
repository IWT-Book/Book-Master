<section data-markdown>
<script type="text/template">
#legend
This element is used to assign a caption to a set of form fields as defined by a fieldset element.
</script>
</section>

<section data-markdown>
<script type="text/template">
###HTML5 Standard Syntax
```
<legend
     accesskey="character"
     align="bottom | left | right | top" (transitional only)
     class="class name(s)"
     dir="ltr | rtl"
     id="unique alphanumeric identifier"
     lang="language code"
     style="style information"
     title="advisory text">
</legend>
```
</script>
</section>

<section data-markdown data-render=both>
<script type="text/template" >
###Element-Specific Attributes
* `accesskey` This attribute specifies a keyboard navigation accelerator for the element. Pressing ALT or a similar key in association with the specified key selects the form section or the legend itself. Page designers are forewarned to avoid key sequences already bound to browsers.
* `align` This attribute indicates where the legend value should be positioned within the border created by a &lt;fieldset&gt; tag. The default position for the legend is the upper-left corner. It also is possible to position the legend to the right by setting the attribute to right.  The specification defines bottom and top, as well. Microsoft also defines the use of the value center.
</script>
</section>
#### Examples
<section>
{% codeeditor src='../../../HTML/4Elements/forms/legend.html' %}{% endcodeeditor %}
</section>

<section data-markdown>
<script type="text/template">
###Notes
* Traditionally, a &lt;legend&gt; tag should occur only within a &lt;fieldset&gt; tag. There should be only one legend per fieldset element.
* Under early drafts of the HTML5 specification, this element is also found in the figure and details elements. This was later replaced by the dt element.
* Some versions of Microsoft documentation show a valign attribute for &lt;legend&gt; positioning. However, the valign attribute does not appear to work consistently and has since been dropped from the official documentation.
</script>
</section>