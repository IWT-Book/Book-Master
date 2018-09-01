#Test Page for Slides and Book

The purpose of this page is to show how the various ideas work for book
and slide and explore the idea of linking the two together.

I wonder if Ajax is a cool technology?
What about REST and HTTP?  Are microservices cool?
User Agent means XXXXX.

Here is Ajax again and REST again.

I think it shouldn't do it multiple times on a page.
Ajax Ajax Ajax

<section data-markdown data-render=both>
  ##Data-Render = Both
  * Points found in
  * Book
  * Slide
</section>

<section data-markdown data-render=slide>
  This should only on a slide
</section>

<section data-markdown data-render=book>
  <h2>Only in Book</h2>
 
</section>

##Outside Tag
<section>

   Default section tag by itself is both 
   The data-src attribute is for the slide and the src for book in case sizing or type difference
  <img data-src="/images/webperfpyramid.png" src="/images/webperfpyramid.png" alt="Web Performance Pyramid" >

</section>

			
