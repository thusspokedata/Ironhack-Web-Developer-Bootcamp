<h1>CSS</h1>

<a id='section0'></a>
<h2>Table of contents</h2>

+ [CSS: Cascading Style Sheets](#section1)
+ [CSS | Rules and Selectors](#section2)
+ [CSS | Font and Text Properties](#section3)
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
<h2>CSS: Cascading Style Sheets</h2>

<p><b>Cascading Style Sheets (CSS) </b>, are a stylesheet language used to describe the <b>presentation of a document written in HTML.</b></p>
<p>Without CSS, our websites would be something ugly, without any color nor animation, and all of them would be very similar.</p>

<h3>Adding styles</h3>
<p>We can add styles to our HTML pages in two different ways:</p>

<ul>
  <li><p><b>inline</b> directly in HTML files <b><em>(but remember that this is not aligned to best practices)</b></em></p></li>
  <li><p><b>in a separate file</b> linked to our HTML file.</p></li>
</ul>

<h3>The link tag</h3>

<p>You are going to add a <strong><code>&lt;link&gt;</code></strong> tag <strong>inside</strong> the <em><code>&lt;head&gt;</code></em> tag of your <code>index.html</code> document:</p>


```html

<!-- index.html -->
<head>
  ...
  <link rel="stylesheet" href="./style.css" />
</head>


```

**Attributes:**

<ul>
  <li><b>rel:</b> Defines the relationship between the linked resource and the HTML document. In our case, it is a stylesheet, in others it may be a file of another format.</li>
  <li><b>href:</b> Contains the URL to the .css file.</li>
</ul>

<h3>Extra resources</h3>

<ul>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link" >MDN HTML link</a></li>
  <li><a href="https://www.w3.org/TR/CSS2/sample.html">Default stylesheet for HTML4</a></li>
</ul>

<a id='section2'></a>
<h2>CSS | Rules and Selectors</h2>

[back to Index](#section0)

<h3>CSS rules</h3>

<p>A CSS rule-set is composed of a selector and a declaration block:</p>

```css

selector(s) {
  property1: value1;
  property2: value2;
}

```  

<img src="https://github.com/antonio-datahack/Ironhack-Web-Developer-Bootcamp/blob/main/img/css-rules-posta.png" />

<ul>
  <li><b>selector:</b> points to the element(s) that you will apply the style rule to,</li>
  <li><b>declaration block:</b> contains <b>one or more declarations separated by semicolons.</b> These declarations specify the element’s properties and the values you want to set.</li>
</ul>

<h3>CSS selectors</h3>

**Type selectors**
<p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Type_selectors" target="_blank" rel="noopener noreferrer">Type Selectors</a> match elements by their (node) name. In HTML, elements are the tags we add, for example <code>&lt;p&gt;</code>, <code>&lt;header&gt;</code> or <code>&lt;div&gt;</code>. The structure for type selectors is:</p>

```css

tag-name {
  rule: value;
}
```

**Class Selectors**
<p>In HTML and CSS, you can identify a group of HTML elements with the same characteristics or styles using a <strong><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-class" target="_blank" rel="noopener noreferrer">class attribute</a></strong>.</p>

<p>The class is an attribute of the element(s) that you’re trying to change, and <b>requires a name.</b> The structure for the class selector is:</p>


```css
/* in the CSS file */

.class-name {
  rule: value;
}
```

<p>Class naming conventions:</p>
<ul>
<li class="raw">You should name classes using only <strong>lower case letters</strong>.</li>
<li class="raw">If you want to have a class name composed of <strong>several words</strong>, please <strong>separate them using dashes -</strong>, e.g.: <code>multi-name-class</code>.</li>
<li class="raw"><strong>You can not use spaces for a class name</strong>.</li>
</ul>
  

```css
  
/* this is WRONG: */
.cool class {
  color: purple;
}

/* this is RIGHT */
.cool-class {
  color: purple;
}
```
  
<h3>ID selectors</h3>
  
<p>An <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/ID_selectors" target="_blank" rel="noopener noreferrer">ID selector</a> identifies a <strong>unique, unrepeatable element</strong> in the HTML.</p>

<p>ID selectors are identified by the <strong>hash (#)</strong> symbol.</p>
<p>The naming convention is the same as classes: if you have <strong>multiple words, combine them with a dash (-)</strong>.</p>
<p><img class="emoji" alt=":exclamation:" src="https://cdn.jsdelivr.net/npm/@hackmd/emojify.js@2.1.0/dist/images/basic/exclamation.png"> Elements <strong>can</strong> and <strong>only</strong> should have <strong>one ID</strong>.</p>
</div>


```css

/* style.css */

#cover-box {
  background-color: black;
  color: pink;
  width: 100px;
  height: 50px;
}

```  

<h3>Universal selectors</h3>

<p>The <a href="https://developer.mozilla.org/en/docs/Web/CSS/Universal_selectors" target="_blank" rel="noopener noreferrer">Universal selector</a> matches a single element of any type. It is identified by an asterisk (<code>*</code>).</p>
<p>Omitting the asterisk with simple selectors has the same effect. For instance:</p>
<ul>
  <li class="raw"><code>*.warning</code></li>
  <li class="raw"><code>.warning</code></li>
</ul>

<p>These two selectors are considered equal, since both will target all the elements that have the class <code>warning</code>, regardless of the element type (<code>div</code> or <code>p</code> or <code>whatever</code>)</p>

```css

* {
  font-family: monospace;
}
```  

<3>Extra resources</h3>

<ul>
<li class="raw"><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes" target="_blank" rel="noopener noreferrer">Pseudo selectors</a> - How to select elements when an event is fired.</li>
<li class="raw"><a href="http://css.maxdesign.com.au/selectutorial/" target="_blank" rel="noopener noreferrer">Selectutorial</a> - A complete tutorial to understand CSS Selectors.</li>
<li class="raw"><a href="https://websitesetup.org/css3-cheat-sheet/" target="_blank" rel="noopener noreferrer">Beginner’s essential CSS Cheat Sheet</a></li>
</ul>

<a id='section3'></a>
<h2>CSS | Font and Text Properties</h2>

[back to Index](#section0)

<h3>Font and its properties</h3>

<p>Overall, it is essential to know that there are <strong>three groups of fonts</strong>:</p>

<ol>
<li class="raw"><em>serif</em>,</li>
<li class="raw"><em>sans-serif</em> and</li>
<li class="raw"><em>monospace</em>.</li>
</ol>

<p>Each of these groups has multiple <strong>font families</strong> in it, ex.:</p>

<ul>
<li class="raw"><em>serif group</em>: Times New Roman, Georgia</li>
<li class="raw"><em>sans-serif group</em>: Arial, Verdana</li>
<li class="raw"><em>monospace group</em>: Courier, Lucida</li>
</ul>

<em>Sans-serif fonts are considered easier to read than serif fonts.</em>

<h3>The font-family property</h3>

<p>The default font will depend on the user’s browser and operating system. You can find a list of the default fonts <a href="https://www.granneman.com/webdev/coding/css/fonts-and-formatting/web-browser-font-defaults/" target="_blank" rel="noopener noreferrer">here</a>.</p>

<p>We can change the default values with the <code>font-family</code> property.</p>

<p>If we would like to change the font on the whole page, we could target it through the <em>body</em> tag and do something like this:</p>


```css
body {
  font-family: Arial, Verdana, sans-serif;
}
``` 

<em>If one font is missing, the browser will choose the next one.</em>

<h3>The font-size property</h3>

<p>The <code>font-size</code> is a way to set the size of the font in HTML document. The <code>font-size</code> is inherited from the element’s (node) parent.</p>

<p>The standard <code>font-size</code> for the <code>&lt;body&gt;</code> tag is <code>16px</code> in all browsers.</p>


<p>There are three the most used ways to manipulate with the font size through CSS:</p>
<ol>
  <li><strong>px</strong></li>
  <li><strong>em</strong></li>
  <li><strong>rem</strong></li>
</ol>
</div>


<p><strong><code>px</code></strong> stands for <em>pixel</em> which is the standard and the easiest measurement to use but might not be the best option always. Imagine the following: you set the font size of each element in HTML document and now you have to make some changes to satisfy users’ needs, and you have to do it manually, one by one since each value is fixed (value of 14px will always stay 14px). If you want to have more flexibility and be able to adjust the font of children elements based on the changes in font size of the parent element, you will have to go for other two options - <em>em</em> and <em>rem</em>.</p>

<p>An <strong><code>em</code></strong> is equal to the computed <em>font-size</em> of that element’s parent. For example, if there is a <em>div</em> element with <code>font-size: 16px;</code> then for that div and for its children <code>1em = 16px</code>.
If font-size is not defined explicitly, that element will inherit it from the parent element. The inheritance continues through ancestors up until the root element. Default font-size of the root element is provided by a browser.</p>

<a href="https://medium.com/code-better/css-units-for-font-size-px-em-rem-79f7e592bb97" target="_blank" rel="noopener noreferrer">CSS units for font-size: px | em | rem</a>

<p><strong><code>rem</code></strong> values are relative to the root HTML element, not to the parent element. That is, if font-size of the root element is 20px then 1 rem = 20px for all elements. If font-size is not explicitly defined in the root element, then 1rem will be equal to the default font-size provided by the browser (usually 16px). Later, during the course, you will have a chance to explore more about these. If you want to conduct your own small research and learn more beforehand, we suggest using official docs (<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-size" target="_blank" rel="noopener noreferrer">MDN Font size</a>) or the previously mentioned article <a href="https://medium.com/code-better/css-units-for-font-size-px-em-rem-79f7e592bb97" target="_blank" rel="noopener noreferrer">CSS units for font-size: px | em | rem</a>.</p>


<h3>The font-style property</h3>

<p><code>font-style</code> is used to turn text <code>italic</code> or <code>oblique</code></p>

<a href="http://stackoverflow.com/questions/1680624/font-style-italic-vs-oblique-in-css" target="_blank" rel="noopener noreferrer">difference between italic and oblique</a>

<h3>The font-weight property</h3>

<p>The <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight" target="_blank" rel="noopener noreferrer"><code>font-weight</code></a> property is used to turn text <code>bold</code>, <code>bolder</code> or <code>lighter</code>. It can be expressed as a numeric value:</p>


```css
p {
  font-weight: bold;
}

div p {
 font-weight: 600;
}

span {
  font-weight: lighter;
}


Resources

``` 

<h3>CSS Text properties</h3>

**text-transform**

<p>The <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform" target="_blank" rel="noopener noreferrer"><code>text-transform</code></a> is used to transform text into <code>lowercase</code>, <code>uppercase</code> or to <code>capitalize</code> the letters:</p>


```css 

#lowercase {
  text-transform: lowercase;
}

#uppercase {
  text-transform: uppercase;
}

#capitalize {
  text-transform: capitalize;
}
``` 

**The text-decoration property**

<p>The <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration" target="_blank" rel="noopener noreferrer"><code>text-decoration</code></a> sets the appearance of decorative lines on text. See the following example:</p>


```css


#underline {
  text-decoration: underline;
}
#underline-dotted {
  text-decoration: underline dotted;
}

#underline-dotted-colored {
  text-decoration: underline dotted blue;
}

#overline {
  text-decoration: overline;
}

#line-through {
  text-decoration: line-through;
}

#wavy {
text-decoration: red wavy underline;
}


```  

<p>The most used values for this property are:</p> 

<ul>
<li class="raw"><code>none</code>: unsets any text decorations already present. It is the default value for most of the HTML tags.</li>
<li class="raw"><code>underline</code>: underlines the text.</li>
<li class="raw"><code>overline</code>: gives the text an overline.</li>
<li class="raw"><code>line-through</code>: puts a strikethrough over the text.</li>
</ul>

<h3>The text-align property</h3>

<p>According to W3Schools, the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/text-align" target="_blank" rel="noopener noreferrer">text-align property</a> is used to set the horizontal alignment of a text.</p>

<p><code>text-align</code> is used to control text alignment within its containing content box.</p>


```css

div {
  display: inline-block;
  margin-right: 40px;
  width: 200px;
}

#center {
  text-align: center;
}

#right {
  text-align: right;
}

#left {
  text-align: left;
}

#justify {
  text-align: justify;
}

``` 

<p>The different possible values are:</p>

<ul>
<li class="raw"><code>left</code>: left justifies the text.</li>
<li class="raw"><code>right</code>: right justifies the text.</li>
<li class="raw"><code>center</code>: centers the text.</li>
<li class="raw"><code>justify</code>: makes the text spread out, varying the gaps in between the words so that all lines of text are the same width.</li>
</ul>

<h3>The text-indent property</h3>

<p>The <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/text-indent" target="_blank" rel="noopener noreferrer">text-indent property</a> is used to specify the indentation of the first line of a text.</p>

```css  
#indent-example {
  text-indent: 60px;
}
``` 

<h3>The line-height property</h3>

<p>The <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/line-height" target="_blank" rel="noopener noreferrer"><code>line-height</code> property</a> is used to set the height of each line of text, both above and below the line.</p>

```css  
p {
  width: 200px;
  font-size: 13px;
  line-height: 1.5;
}

```

<p>If you don’t specify any unit type to the line-height value, it will multiply by X the height of the font you would use. In our example, the line height will be 15px, 1.5 times the 13px of the font.</p>

<h3>The letter-spacing and word-spacing property</h3>

<p>The <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing" target="_blank" rel="noopener noreferrer">letter-spacing property</a> is used to specify the space between the characters in a text.</p>

<p>The <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/word-spacing" target="_blank" rel="noopener noreferrer">word-spacing property</a> sets the length of space between words and between tags.</p>

```css
.letter-spacing-example {
  letter-spacing: 3px;
}

.word-spacing-example {
  word-spacing: 7px;
}

```

<h3>Extra resources</h3>

<ul>
<li class="raw"><a href="https://developer.mozilla.org/en/docs/Web/CSS/font-family" target="_blank" rel="noopener noreferrer">MDN Font-Family</a></li>
<li class="raw"><a href="https://developer.mozilla.org/en/docs/Web/CSS/font-size" target="_blank" rel="noopener noreferrer">MDN Font-Size</a></li>
<li class="raw"><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Values_and_units" target="_blank" rel="noopener noreferrer">MDN - CSS Values and unites</a></li>
<li class="raw"><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals" target="_blank" rel="noopener noreferrer">MDN Fundamental text and styles</a></li>
</ul>
