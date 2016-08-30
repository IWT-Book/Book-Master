<section data-markdown>
<script type="text/template">
#fieldset
This element allows form designers to group thematically related controls together. The element usually contains a legend element, which labels the grouped form controls.
</script>
</section>

<section data-markdown>
<script type="text/template">
###HTML5 Standard Syntax
```
<fieldset
     class="class name(s)"
     dir="ltr | rtl"
     id="unique alphanumeric identifier"
          lang="language code"
          style="style information"
          title="advisory text">
     </fieldset>
```
</script>
</section>

#### Examples
<section>
{% codeeditor src='../../../HTML/4Elements/forms/fieldset.html' %}{% endcodeeditor %}
</section>

<section data-markdown>
<script type="text/template">
###Notes
* Grouping controls makes it easier for users to understand the purposes of the controls while simultaneously facilitating tabbing navigation for visual user agents and speech navigation for speech-oriented user agents. The proper use of this element makes documents more accessible to users with disabilities.
* The full set of data-binding attributes likely needs to be bound to this element but is missing from MSDN documentation.
* The caption for a &lt;fieldset&gt; tag can be defined by the legend element. There should only be a single legend element within the element.
</script>
</section>