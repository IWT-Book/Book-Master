<section data-markdown>
<script type="text/template">
#progress
This HTML5 element defines completion progress for a task. It is often thought to represent the percentage from 0 to 100% of some task, such as loading to be completed, though the range and the unit value are arbitrary.
</script>
</section>

<section data-markdown>
<script type="text/template">
###HTML5 Standard Syntax
```
<progress
        accesskey="spaced list of accelerator key(s)"
           class="class name(s)"
           contenteditable="true | false | inherit"
           contextmenu="id of menu"
           data-X="user-defined data"
           dir="ltr | rtl"
           draggable="true | false | auto"
           hidden="hidden"
           id="unique alphanumeric identifier"
           itemid="microdata id in URL format"
           itemprop="microdata value"
           itemref="space-separated list of IDs that may contain microdata"
           itemscope="itemscope"
           itemtype="microdata type in URL format"
         lang="language code"
         max="positive floating point number"
         spellcheck="true | false"
         style="style information"
         tabindex="number"
         title="advisory text"
         value="0 or floating point number">
</progress>
```
</script>
</section>

<section data-markdown data-render=both>
<script type="text/template" >
###Element-Specific Attributes
* `max` The value of this attribute is a positive floating-point number indicating the
* `maximum` value for progress; often it will be 100.
* `value` The value of this attribute is the amount of task complete. This may be a percentage,
but there is no requirement that it be such a measurement.
</script>
</section>
#### Examples
<section>
{% codeeditor src='../../../HTML/4Elements/forms/progress.html' %}{% endcodeeditor %}
</section>

<section data-markdown>
<script type="text/template">
###Notes
* There are no units implied for this element.
</script>
</section>