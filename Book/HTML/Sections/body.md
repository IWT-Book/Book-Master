#Body

A &lt;body> tag encloses the actual document's visible content.  Like the &lt;head&gt; there should be only a single
 &lt;body&gt; in a document.  However, per the HTML 5 specification the element is in fact optional.
 
Traditionally the tag was used to set a variety of document wide style characteristics via presentational attributes 
like `bgcolor`,`background`,`link`,`vlink`,and so on. Today however, such duties are left to CSS which may target the 
body with similiar rules.  The example below shows the same effects both in the deprecated HTML presentational manner 
as well as the more correctly using CSS. 

<section>
  <h3>Example</h3>
  {% codeeditor src='../../../HTML/4Elements/sections/body.html' %}{% endcodeeditor %}
</section>

#Resources

* [HTML5 Specification on Body Element](https://www.w3.org/TR/html51/sections.html#the-body-element)
* [Mozilla Developer Network Body Syntax](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body)
