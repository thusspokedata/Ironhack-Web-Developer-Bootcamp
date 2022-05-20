<h1>CSS</h1>

<a id='section0'></a>
<h2>Table of contents</h2>

+ [CSS: Cascading Style Sheets](#section1)
+ [CSS | Rules and Selectors](#section2)
+ [CSS | Font and Text Properties](#section3)
+ [CSS | Color Properties](#section4)
+ [](#section5)
+ [CSS | Box Model](#section6)
+ [](#section7)
+ [CSS | Positioning and Flexbox](#section8)
+ [Guided exercise: IronSkydive - positioning and flexbox](#section9)
* [HTML | Form Tag](#section10)
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
<li><em>serif</em>,</li>
<li><em>sans-serif</em> and</li>
<li><em>monospace</em>.</li>
</ol>

<p>Each of these groups has multiple <strong>font families</strong> in it, ex.:</p>

<ul>
<li><em>serif group</em>: Times New Roman, Georgia</li>
<li><em>sans-serif group</em>: Arial, Verdana</li>
<li><em>monospace group</em>: Courier, Lucida</li>
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
<li><code>none</code>: unsets any text decorations already present. It is the default value for most of the HTML tags.</li>
<li><code>underline</code>: underlines the text.</li>
<li><code>overline</code>: gives the text an overline.</li>
<li><code>line-through</code>: puts a strikethrough over the text.</li>
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

<p>The different possible values are:</><code>left</code>: left justifies the te><code>right</code>: right justifies the te><code>center</code>: centers the te><code>justify</code>: makes the text spread out, varying the gaps in between the words so that all lines of text are the same width.</li>
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

<a id='section8'></a>
<h2>CSS | Positioning and Flexbox</h2>

[back to Index](#section0)

<h3>Positioning</h3>

<p>The CSS <code>position</code> property allows you to organize elements on the screen. Position can be:</p>

<ul>
<li><code>static</code></li>
<li><code>relative</code></li>
<li><code>fixed</code></li>
<li><code>absolute</code></li>
</ul>

<p>When setting the <code>position</code>, you can use the following properties:</p>

<ul>
<li><code>top</code></li>
<li><code>right</code></li>
<li><code>bottom</code></li>
<li><code>left</code></li>
</ul>

<h3><code>position:static</code></h3>

<p>A <code>relative</code> positioned element behaves the same as <code>static</code> unless you add some extra properties. You can adjust the position by setting the <code>top</code>, <code>left</code>, <code>right</code>, and <code>bottom</code> properties.</p>

<p>It will move the element relative to where it would normally occur in the document. Other content will not be adjusted to fit into any gap left by the element.</p>

<h3><code>position:fixed</code></h3>

<p>A fixed element is <em>positioned relatively</em> to the screen of your device - aka viewport (computer, mobile, etc.).</p>

<ul>
<li>
<p>The element will always be in the same place, even when you scroll.</p>
</li>
<li>
<p>As with <code>relative</code>, the <code>top</code>, <code>left</code>, <code>right</code>, and <code>bottom</code> properties are used.</p>
</li>
</ul>

<h3><code>position:absolute</code></h3>

<p>The <code>absolute</code> position works similarly to a <code>fixed</code> position. However, instead of being positioned relative to the viewport, <strong>it is positioned to the nearest <em>positioned</em> element in the DOM</strong>. That is - to the nearest element with a <code>position</code> other than <code>static</code>.</p>

<p>If there is no ancestor positioned element in the document, it will use the <code>body</code>.</p>

<h3>The basics of Flexbox</h3>

<p>To start using Flexbox you need to write only one line of code inside of your CSS rule: display: flex.</p>

<p>By using this rule on the parent element, it will convert it into a flex container and every direct child of the element will be transformed into it is flex children (elements that will be changed to fit inside the box).</p>

<p>After that, you will want to give your flex container a few directives. For example, how will the elements be organized? How will we position horizontally and/or vertically? If you don’t decide this by yourself, some of these decisions will be made for you by the default values, but let’s have a quick look into what we can do.</p>

<h3>The <code>flex-direction</code> property</h3>

<p>The <code>flex-direction</code> shows the direction on which the contents will be aligned.</p>

<img src="https://github.com/antonio-datahack/Ironhack-Web-Developer-Bootcamp/blob/main/img/flexbox-directions.png" width="500">
<p><img src="https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_ecf32476fd55b14b23626f070dc18ce0.gif" alt="" class="raw md-image" width="500">
<img src="https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_e9e1a52befe234c06ab093f7e83b85e9.gif" alt="" class="raw md-image" width="500"></p>

<h3>The <code>justify-content</code> property</h3>

<p>With <code>justify-content</code> we can <strong>horizontally</strong> arrange the items inside the flex container.</p>
</div>

<img src="https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_8d83d09f81ac2e495fca787946133020.gif" alt="" class="raw md-image" width="500">

<ul>
<li><code>flex-end</code>: items are positioned on the end of the flex-direction line</li>
<li><code>center</code>: items are centered along the line</li>
<li><code>space-between</code>: items are evenly distributed in the line; the first item is on the start line, last item on the end line</li>
<li><code>space-around</code>: items are evenly distributed in line with equal space around them. Note that visually the spaces aren’t equal since all the items have equal space on both sides. The first item will have one unit of space against the container edge, but two units of space between the next item because that next item has its own spacing that applies.</li>
<li><code>space-evenly</code>: items are distributed so that the spacing between any two items (and the space to the edges) is equal.</li>
</ul>

<h3>The <code>align-items</code> property</h3>

<p>This one is a lifesaver. Remember how hard it was to align the elements <strong>vertically</strong>? With <code>align-items</code> you can easily do this. Be careful with this one. If you don’t assign any value to this property, it is <strong>default value will be <code>stretch</code> which stretches the children to fill the whole container</strong>.</p>

<img src="https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_7166b023c79602acf89600997bf32acb.gif" alt="" class="raw md-image" width="500">

<ul>
<li><code>flex-start</code>: cross-start margin edge of the items is placed on the cross-start line</li>
<li><code>flex-end</code>: cross-end margin edge of the items is placed on the cross-end line</li>
<li><code>center</code>: items are centered in the cross-axis</li>
<li><code>baseline</code>: items are aligned such as their baselines align</li>
</ul>

<p>:exclamation: If you have an image as a flex item(a direct child of the flex container), it will be distorted by the automatic sizing and aligning. To “protect” the dimensions of an image, we need to put it inside a div.</p>

<img src="https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_572b2b1f546ded288cd7592cabf403a1.gif" alt="" class="raw md-image" width="500">

<p>There are <em>many</em> more things you can do with Flexbox. Check out <strong><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank" rel="noopener noreferrer">CSS Trick’s Guide</a></strong> and take a look at all the possibilities you have.</p>

<p>To give you some experience with Flexbox and get acquainted with the newly discovered properties, go to <a href="https://flexboxfroggy.com/" target="_blank" rel="noopener noreferrer">Flexbox Froggy</a> and put your knowledge to practice.</p>

<h3>Extra Resources</h3>

<ul>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/position" target="_blank" rel="noopener noreferrer">MDN <code>position</code> property</a> - See all the detailed information about the property on its documentation.</li>
<li><a href="https://medium.freecodecamp.org/how-to-use-the-position-property-in-css-to-align-elements-d8f49c403a26" target="_blank" rel="noopener noreferrer">How to use the position property in CSS to align elements + video</a></li>
<li><a href="http://alistapart.com/article/css-positioning-101" target="_blank" rel="noopener noreferrer">CSS Positioning 101</a></li>
<li><a href="https://www.youtube.com/watch?v=JJSoEo8JSnc" target="_blank" rel="noopener noreferrer">Flexbox - more than basics - video</a></li>
<li><a href="https://github.com/ohansemmanuel/Understanding-Flexbox" target="_blank" rel="noopener noreferrer">Understanding Flexbox: Everything you need to know</a></li>
<li><a href="https://flexboxfroggy.com/" target="_blank" rel="noopener noreferrer">Flexbox Froggy</a></li>
</ul>
