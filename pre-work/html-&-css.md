<h1>HTML & CSS</h1>

<a id='section0'></a>
<h2>Table of contents</h2>

+ [Introduction to the frontend](#section1)
+ [HTML | Introduction](#section2)
+ [HTML | Block level elements](#section3)
+ [](#section4)
+ [](#section5)
+ [](#section6)
+ [](#section7)
+ [](#section8)
+ [](#section9)
* [](#section9-1)
* [](#section9-2)
* [](#section9-3)
* [](#section9-4)
* [](#section9-5)
* [](#section9-6)
* [](#section9-7)
* [](#section9-8)

<a id='section1'></a>
<h2>Introduction to the frontend</h3>

<p><b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b> is a group of technologies and languages that compose the frontend of your web applications.</p>
<p>The term <b>frontend</b> is reserved for all the parts of your app that users can see and interact with.</p>
<p>The main <em>difference between frontend and the backend</em> is that the <b>frontend</b> is mainly visual parts, and users can interact with them, while <b>backend</b> is where all the logic (functionality) of the app is and is not visible to users.</p>

<h3>The Bones: HTML</h3>
<p><b>HTML</b> is the bones that give your web page structure. It consists of tags or elements on your page that describe what the content is.</p>

<h3>The Skin/Hair/Clothing: CSS</h3>
<p>Your skin and hair, along with your clothing and other external belongings define how you look. Most people have a similar-looking skeleton, but we all look unique because of these specific and individual factors.</p>
<p><b>CSS (Cascading Style Sheets)</b> is used to style your page, and give it that unique touch. In simple English: CSS is what <b>gives a nice presentation of the page.</b></p>

<h3>The Muscles: JavaScript</h3>

<p>Your body has structure, it has a unique appearance, but of equal importance is your ability to perform tasks and do things such as run, jump, dance, etc. Your muscles give you this ability.</p>
<p>You can build and style a very nice webpage just using HTML and CSS, but if you want to add some user interaction, you have to start thinking in the direction of using JavaScript on your page. The simplest form of user interaction are <b>events</b> - a user clicks on some button or link, and part of the page changes as a consequence of that click (the most simplified way to explain this).</p>



<a id='section2'></a>
<h2>HTML | Introduction</h3>

[back to Index](#section0)

<h3>What is a Markup Language?</h3>
<p>Markup languages are languages designed for the processing, definition, and presentation of text. In simple English, we could say, <b>markup languages are used to present some information to the users in a specific format - using different layouts and styles.</b>The elements used to specify the format are called <b>tags.</b></p>

<h3>What is HTML?</h3>
<p>HTML - HyperText Markup Language is the most fundamental building block of the Web. It defines the meaning and structure of web content. It uses tags as its main building blocks to create web pages.</p>


<h3>Tags and Attributes</h3>

**Tag:** 

<p>A <b>web page</b> is a collection of different types of content. Some of the basic <b>types of content</b> that almost any web page has are: <b>text, images, video,</b>  and <b>audio.</b> All different types of content are </b>represented by corresponding HTML tags and rendered in browsers.</b> </p>

<p>We can make the following conclusion: <b>an HTML document is a collection of tags.</b> Tags are used to describe specific types of content such as images, paragraphs, headings, footers, and many more.</p>
<p><b>Tags usually come in pairs: an opening tag defines the start of a block of content, and an ending tag defines the end of that block of content.</b></p>

<h3>Tags and Attributes</h3>

**Attributes:** 

<p>HTML Attributes <b>modify or define a particular characteristic of a tag.</b></p>

<p>HTML attributes are <b>special words used inside the opening tag to control the element’s behavior.</b> An attribute either <b>modifies the default functionality</b> of an element type <b>or provides functionality</b> to certain element types which are unable to function correctly without them.</p>

<p>Tags can have <b>multiple attributes.</b> Images also have an alt attribute in case the image can’t be displayed. Attributes are also used for <b>screen readers</b> in understanding what the content is.
  
<h3>The basic structure of HTML document</h3>


```html
<!DOCTYPE html>
<html>
  <head>
    <title>My first document</title>
    <meta charset="UTF-8" />
  </head>
  <body>
    <p>Hey!</p>
    ...
  </body>
</html>


``` 
* \<!DOCTYPE html> This tag indicates that the markup language for your document content is HTML5. As you can see, this tag is a bit different, doesn’t follow the standard tag structure since. Don’t worry about it; you’ll get used to it.
* \<html> tag The spine of HTML document is \<html> tag. Every HTML document has to have this tag, and there has to be ONLY ONE \<html> tag per document.
* \<head> tag The <head> tag contains general information about the document. In this tag, later on, you will place the link to your stylesheets (which will enable you to style your document). Usually, it contains a title and metadata tags. - \<title> tag - defines the title of the document. There’s only one title element in the head element of an HTML. This title only contains text, and it’s shown in the browser’s title bar or on the page’s tab. - <meta> tag - used to define metadata. It is meant to help browsers to render the page. In our example, this tag contains information of allowed charsets to be used in the document (charset defines which special characters are allowed, such as á or ñ).
* \<body> tag The \<body> tag contains all the visible elements which will be presented to the users. There can be only one \<body> element in an HTML document.


<h3>HTML structure through DOM tree</h3>
  
<p>The Document Object Model (DOM) is a cross-platform and language-independent application programming interface that treats an HTML, XHTML, or XML document as a tree structure wherein each node is an object representing a part of the document. The objects can be manipulated programmatically, and any visible changes are occurring as a result may then be reflected in the display of the document.</p>
  
<p>The <b>DOM (Document Object Model)</b> represents how the browser reads the HTML document. After the browser reads the HTML document, it creates a representational tree called the Document Object Model and defines how that tree can be accessed.</p>
  
  
  <h3>Extra resources</h3>

* ![HTML - MDN Tutorial](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML)
* ![Ancestor, Descendant, Sibling, Parent, Child – Lynda intro course (video)](https://www.linkedin.com/learning/css-selectors-2/the-html-family-tree-parents-children-ancestor-descendant-siblings?autoplay=true)
* ![Document tree](http://web.simmons.edu/~grabiner/comm244/weekfour/document-tree.html)
  

  
<a id='section3'></a>
<h2>HTML | Block level elements</h2>

[back to Index](#section0)
  
<h3>Block vs. Inline elements</h3>
  
<p>So far, we learned that <b>within the \<body> element, we write all the elements we want to display on our website.</b></p>

<p>Before we move forward, let’s first mention that there are overall two different groups of tags/HTML elements:</p>

<ol>
  <li>block level elements and</li>
  <li>inline level elements.</li>
</ol>
  
<img src="https://github.com/antonio-datahack/Ironhack-Web-Developer-Bootcamp/blob/main/img/block-vs-inline-elements.png" />
          
<p>A <b>block level element begins a new line on the webpage</b> and, if no width is set, <b>extends the full width of the available horizontal space of its parent element.</b></p>
  
<img src="https://github.com/antonio-datahack/Ironhack-Web-Developer-Bootcamp/blob/main/img/block-elements.png" />
  
<p><b>Inline elements</b> flow like text. They <b>don’t start a new line</b> and only <b>take up as much width as necessary.</b></p>

<img src="https://github.com/antonio-datahack/Ironhack-Web-Developer-Bootcamp/blob/main/img/inline-elements.png" />
  
The most used block level elements are:

+ header block: \<header> \</header>
+ division block: \<div> \</div>
+ section block: \<section> \</section>
+ article block: \<article> \</article>
+ aside block: \<aside> \</aside>
+ footer block: \<footer> \</footer>
+ navigation block: \<nav> \</nav>
+ headings: \<h1> \</h1>, \<h2> \</h2>, ... \<h6> \</h6>
+ paragraph: \<p> \</p>
+ lists:
+ ordered: \<ol> \</ol>
+ unordered: \<ul> \</ul>
+ table: \<table> \</table>
  
  
<p>In addition, semantic HTML is vital to a website’s <a href="https://searchengineland.com/guide/what-is-seo">SEO</a> (Search Engine Optimization). When an SEO crawler such as Google’s looks at your website, it sees something like <a href="https://www.browseo.net/?url=http%3A%2F%2Fwww.cnn.com">this</a>. It doesn’t infer meaning based on what it sees; it infers meaning based on tags and attributes.</p>  
  
<img src="https://github.com/antonio-datahack/Ironhack-Web-Developer-Bootcamp/blob/main/img/semantic-layout-tag.png" />  
  
  
<h3>The <code>&lt;table&gt;</code> tag</h3>
  
<p>The <code>&lt;table&gt;</code> tag is used to organize tabular data in different rows and columns.</p>
  
<img src="https://github.com/antonio-datahack/Ironhack-Web-Developer-Bootcamp/blob/main/img/table.png" />

* \<table>:
  * is a block level element
  * formats a content as a table
  * has rows and columns

* \<thead>:

    * is a block level element,
    * defines a set of rows as the head of the columns in the table.

* \<tbody>:

    * is a block level element,
    * defines a set of rows as the body of the columns in the table.
* \<tr>:

    * is a block level element,
    * represents a row in the table.
* \<th>:

    * is an inline level element (more about inline elements in the next lesson, but the point is - they fit next to each other, flow like a text, instead each occupying a new row),
    * represents a column inside a row in a table that is a heading of that column.
* \<td>:

    * is an inline level element,
    * represents a column inside a row in a table. This way, you can have rows with a different number of columns inside.
  
  
**Difference between td and th:**

  <p>The main difference between <em>td</em> and <em>th</em> is that <b>th</b> is used just for titles and headers of the table, while <b>td</b> is used for the content.</p>
  
 <br/>
  
* ![Ironhack reference](https://my.ironhack.com/cohorts/61a7b19bfa82e1002c5383dd/lms/courses/course-v1:IRONHACK+WDPREWORK55+MASTER/modules/ironhack-course-chapter_3/units/ironhack-course-chapter_3-sequential_1-vertical_1)
* ![Block Elements Cheatsheet](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements#Elements/)
* ![Let’s talk about semantics](http://html5doctor.com/lets-talk-about-semantics/)
  
  
<h2>HTML | Inline level elements</h2>

<h3>Inline Elements</h3>

<p><b>Inline elements</b> flow like text. They don’t start a new line and they are shown right next to the previous element.</p>
<p>Also, an <b>inline element will occupy only the size of its content.</b></p>

**The most used inline level elements are:**

* image tag: \<img>
+ anchor tag to display links: \<a>*
+ inline text wrapper: \<span>
+ input tag: \<input> (will be covered together with forms in a separate lesson)
+ textarea tag: \<textarea> (will be covered together with forms in a separate lesson)
+ button tag: \<button> (will be covered together with forms in a separate lesson)
+ line break tag: \<br>*
+ italic text: \<i>*
+ italic text with emphasis: \<em>*
+ bold text: \<b>*
+ bold text with emphasis: \<strong>*
+ small text: \<small>*

\* These are inline text semantics used to define the meaning or style of a specific word or line or some part of the text. More about these in the later part of this lesson.
  
<h3>Extra resources</h3>

* ![Ironhack Inline](https://my.ironhack.com/cohorts/61a7b19bfa82e1002c5383dd/lms/courses/course-v1:IRONHACK+WDPREWORK55+MASTER/modules/ironhack-course-chapter_3/units/ironhack-course-chapter_3-sequential_1-vertical_2)
* ![Inline Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements)
* ![How Google Scans your website](https://neilpatel.com/blog/the-way-google-scans/)
* ![HTML5Doctor](http://html5doctor.com/) - Great for picking tags
