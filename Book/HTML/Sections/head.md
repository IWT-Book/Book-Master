#Head

The &lt;head> element contains information about the page.  The element itself is optional, but should be included.
The first element should be a &lt;meta> tag that defines the character set used by the document.  In most cases this will be Unicode like so

```html
<meta charset="utf-8">
```

The &lt;title> tag generally follows is interestingly the only required element in an HTML document. The contents of 
the &lt;title> tag is treated as plain text and is used for the document title for history and bookmarking.

```html
<title>UC San Diego CSE Department Homepage</title>
```

Other elements found in the head include:

* Variations of the &lt;meta> tag for setting keywords and configuring various meta data items for the page
* Linked relationships particularly for stylesheets (&lt;link rel="stylesheet" href="global.css">)
* Internal and linked scripts (&lt;script src="global.js"></script>)


<div class="tip">
![Tip](../../../images/info.svg)  The &lt;title> tag is problematic if malformed.  If unclosed likely the entire page will not render. 
</div>

<section>
  <h3>Example</h3>
  {% codeeditor src='../../../HTML/4Elements/document-metadata/head.html' %}{% endcodeeditor %}
</section>

#Allowed Tag Reference

| Tag	  |  Description                                                                  |
|---------| ------------------------------------------------------------------------------|
| &lt;head>  |	Contains information about the document                                       |
| &lt;title> |	Defines the title of the document                                             |
| &lt;base>  |	Defines the default URI and a default window target for all links on the page |
| &lt;link>  |	Defines the relationship between the document and an external resource, generally a stylesheet |
| &lt;meta>  |	Defines metadata for the document                                             | 
| &lt;noscript> | Defines content when JavaScript is disabled
| &lt;script>| Includes or references JavaScript                                             |
| &lt;style> |	Defines document wide CSS style rules                                         |
| &lt;template>| Defines inert content for templating other views or markup | 

#Resources

* [HTML5 Specification on Head Section](https://www.w3.org/TR/html51/document-metadata.html#the-head-element)
* [Mozilla Developer Network Head Syntax](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head)
