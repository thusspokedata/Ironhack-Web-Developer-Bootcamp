+ [Ironhack web deb repo](https://github.com/ironhack-March-2022)
+ [VS Code - shorcuts](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)
+ [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
+ [Resources for Developers, by Developers](https://developer.mozilla.org/en-US/)


**Ironhack Day 1:**
<ul>
 <li><a href="https://my.ironhack.com/cohorts/61a7b19bfa82e1002c5383dd/lms/courses/course-v1:IRONHACK+WDFT+202205_BER/modules/ironhack-course-chapter_1/units/ironhack-course-chapter_1-sequential-vertical">JS | JavaScript Intro</a></li>
<li><a href="https://my.ironhack.com/cohorts/61a7b19bfa82e1002c5383dd/lms/courses/course-v1:IRONHACK+WDFT+202205_BER/modules/ironhack-course-chapter_1/units/ironhack-course-chapter_1-sequential-vertical_1">JS | Data Types in JavaScript - number & string</a></li>
<li><a href="https://my.ironhack.com/cohorts/61a7b19bfa82e1002c5383dd/lms/courses/course-v1:IRONHACK+WDFT+202205_BER/modules/ironhack-course-chapter_1/units/ironhack-course-chapter_1-sequential-vertical_2">JS | Data Types in JavaScript - boolean, undefined & null and Immutability</a></li>
<li><a href="https://my.ironhack.com/cohorts/61a7b19bfa82e1002c5383dd/lms/courses/course-v1:IRONHACK+WDFT+202205_BER/modules/ironhack-course-chapter_1/units/ironhack-course-chapter_1-sequential-vertical_3">JS | Conditionals and Loops</a></li>
<li><a href="https://my.ironhack.com/cohorts/61a7b19bfa82e1002c5383dd/lms/courses/course-v1:IRONHACK+WDFT+202205_BER/modules/ironhack-course-chapter_1/units/ironhack-course-chapter_1-sequential-vertical_4">Pair Programming Introduction</a></li>
<li><a href="https://my.ironhack.com/cohorts/61a7b19bfa82e1002c5383dd/lms/courses/course-v1:IRONHACK+WDFT+202205_BER/modules/ironhack-course-chapter_1/units/ironhack-course-chapter_1-sequential-vertical_6">VCS | Git Intro</a></li>
<li><a href="https://my.ironhack.com/cohorts/61a7b19bfa82e1002c5383dd/lms/courses/course-v1:IRONHACK+WDFT+202205_BER/modules/ironhack-course-chapter_1/units/ironhack-course-chapter_1-sequential-vertical_7">JS | Numbers as Data Types - Advanced Topics</a></li>
</ul>

<a href=""></a>
<a href=""></a>
<a href=""></a>
<a href=""></a>
<a href=""></a>
<a href=""></a>

**To install:**

<a href="https://runjs.app/">app for codding</a>

**Youtube videos:**
+ ![Pair Programming: 7 Habits of Highly Effective Coders](https://www.youtube.com/watch?v=5ySLQ5_cQ34)
+ ![Does Pair Programming have to suck? by Angela Harms](https://www.youtube.com/watch?v=OQXEzwXtzJ8)
<hr>
<p> <em>Potential Interview questions</em> (each property clickable and will take you to external resources, feel inspired to explore):
JavaScript is a <a href="https://en.wikipedia.org/wiki/Prototype-based_programming" target="_blank" rel="noopener noreferrer">prototype-based</a>, <a href="https://en.wikipedia.org/wiki/Programming_paradigm#Support_for_multiple_paradigms" target="_blank" rel="noopener noreferrer">multi-paradigm</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures" target="_blank" rel="noopener noreferrer">dynamically typed</a> language, supporting <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS" target="_blank" rel="noopener noreferrer">object-oriented</a>, <a href="https://en.wikipedia.org/wiki/JavaScript#Imperative_and_structured" target="_blank" rel="noopener noreferrer">imperative and structured</a>, and declarative (e.g. <a href="https://en.wikipedia.org/wiki/JavaScript#Functional" target="_blank" rel="noopener noreferrer">functional programming</a>) styles.</p>

<hr>

**javascript:**

<p>Functions are one of the pillars of programming. Functions help us to keep our code clean and well organized, and as we write more and more code. The following are some of the main characteristics of good functions:</p>
<ul>
<li class="raw"><strong><a href="https://en.wikipedia.org/wiki/Code_reuse" target="_blank" rel="noopener noreferrer">Reuse code</a></strong> refers to the possibility to call a function as many times as we need it in our code, but we only need to define once how it works.</li>
<li class="raw"><strong><a href="https://en.wikipedia.org/wiki/Abstraction_(software_engineering)" target="_blank" rel="noopener noreferrer">Abstraction</a></strong> is a technique that allows us to think at higher, more <em>abstract</em> levels. We will learn about abstraction later but to visualize what we mean - we really don’t know how <code>.substring()</code> works, but we know when to use it and what results to expect.</li>
<li class="raw"><strong><a href="https://en.wikipedia.org/wiki/Separation_of_concerns" target="_blank" rel="noopener noreferrer">Separation of Concerns</a></strong> refers to the fact that functions allow us to split a big problem into multiple smaller ones.</li>
<li class="raw"><strong><a href="https://en.wikipedia.org/wiki/Single_responsibility_principle" target="_blank" rel="noopener noreferrer">Single Responsibility Principle</a></strong>, as a name says, refers to the fact that a function should do just one thing. The name of the function has to be very clear so you can identify what is doing just reading the name.</li>
</ul>

<hr>

<!--
<h3 class="raw" id="Code-reuse-and-division-of-responsibilities">Code reuse and division of responsibilities</h3>
<p>From generalization, code reuse arises naturally: now, we can perform the same operation in different places without repeating a single line of code. We are reusing the function.</p>
<p>The division of responsibilities refers to the level of isolation. <strong>One function should only do one thing</strong>. It sounds simple, but mastering the division of responsibilities is not that easy. Here are some tips:</p>
<ul>
<li class="raw">Name your functions with verbs, but only <strong>one verb</strong> per function.</li>
<li class="raw">If your function is more than 20 lines of code, you are most likely doing it wrong.</li>
<li class="raw">If you are grouping a bunch of instructions, you are probably doing more than one thing.</li>
</ul>
<div class="alert alert-info">
<p>Use a straightforward rule to check if you really separated the concerns in a function: when you try to describe what a specific function does, if you use <code>AND</code> while doing that, most likely, that function could be split into two or more.
Example: This function <em>calculates the total price</em> AND <em>displays it to the users</em>. This function should be split into two.</p>
</div>
<h3 class="raw" id="Refactoring">Refactoring</h3>
<div class="alert alert-success">
<p><a href="https://en.wikipedia.org/wiki/Code_refactoring" target="_blank" rel="noopener noreferrer">Code Refactoring</a> is a technique in software development by which we change the way the code is structured, keeping the same functionality.</p>
</div>
<p>It is a good practice to refactor our code often, as it will help us to make it better, more modular, and easier to maintain.</p>
<p>Examples of <a href="https://en.wikipedia.org/wiki/Code_refactoring#List_of_refactoring_techniques" target="_blank" rel="noopener noreferrer">refactoring techniques</a> may include techniques such as:</p>
<ul>
<li class="raw">Choosing better names for variables, functions, etc.</li>
<li class="raw">Taking pieces of functionality and abstracting them in separate functions.</li>
</ul>
<p>Let’s look at our <code>avg()</code> function:</p>
<pre><div id="copy-code-snippet-19"><button title="" type="button" class="sc-jlZIZy geZYQe" data-clipboard-text="function avg(array) {
  // !array.length is the same as writing array.length === 0
  if (!array.length) return;

  for (let sum = 0, i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}
">Copy</button></div><code class="javascript hljs raw"><table class="hljs-ln"><tbody><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="1"><div class="hljs-ln-n" data-line-number="1"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="1"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">avg</span>(<span class="hljs-params">array</span>) </span>{</td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="2"><div class="hljs-ln-n" data-line-number="2"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="2">  <span class="hljs-comment">// !array.length is the same as writing array.length === 0</span></td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="3"><div class="hljs-ln-n" data-line-number="3"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="3">  <span class="hljs-keyword">if</span> (!array.length) <span class="hljs-keyword">return</span>;</td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="4"><div class="hljs-ln-n" data-line-number="4"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="4"> </td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="5"><div class="hljs-ln-n" data-line-number="5"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="5">  <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> sum = <span class="hljs-number">0</span>, i = <span class="hljs-number">0</span>; i &lt; array.length; i++) {</td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="6"><div class="hljs-ln-n" data-line-number="6"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="6">    sum += array[i];</td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="7"><div class="hljs-ln-n" data-line-number="7"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="7">  }</td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="8"><div class="hljs-ln-n" data-line-number="8"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="8">  <span class="hljs-keyword">return</span> sum / array.length;</td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="9"><div class="hljs-ln-n" data-line-number="9"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="9">}</td></tr></tbody></table></code></pre>
<p>If we think about it, it actually does two separate things:</p>
<ol>
<li class="raw">it calculates the sum of all the items in the array and</li>
<li class="raw">it divides the total sum by the length of the array.</li>
</ol>
<p>We can further improve this by isolating one of those calculations into a separate function. We need to break down the code so that it does the same thing, but it is easier to understand and maintain it.</p>
<p>Let’s call the first step <code>sum()</code> and make it into a separate function. Then the <code>avg()</code> could be rewritten, now using our <code>sum</code> function:</p>
<pre><div id="copy-code-snippet-20"><button title="" type="button" class="sc-jlZIZy geZYQe" data-clipboard-text="function sum(array) {
  if (!array.length) return;

  for (let sum = 0, i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

function avg(array) {
  if (!array.length) return;

  return sum(array) / array.length;
}
">Copy</button></div><code class="javascript hljs raw"><table class="hljs-ln"><tbody><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="1"><div class="hljs-ln-n" data-line-number="1"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="1"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">sum</span>(<span class="hljs-params">array</span>) </span>{</td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="2"><div class="hljs-ln-n" data-line-number="2"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="2">  <span class="hljs-keyword">if</span> (!array.length) <span class="hljs-keyword">return</span>;</td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="3"><div class="hljs-ln-n" data-line-number="3"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="3"> </td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="4"><div class="hljs-ln-n" data-line-number="4"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="4">  <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> sum = <span class="hljs-number">0</span>, i = <span class="hljs-number">0</span>; i &lt; array.length; i++) {</td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="5"><div class="hljs-ln-n" data-line-number="5"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="5">    sum += array[i];</td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="6"><div class="hljs-ln-n" data-line-number="6"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="6">  }</td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="7"><div class="hljs-ln-n" data-line-number="7"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="7">  <span class="hljs-keyword">return</span> sum;</td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="8"><div class="hljs-ln-n" data-line-number="8"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="8">}</td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="9"><div class="hljs-ln-n" data-line-number="9"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="9"> </td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="10"><div class="hljs-ln-n" data-line-number="10"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="10"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">avg</span>(<span class="hljs-params">array</span>) </span>{</td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="11"><div class="hljs-ln-n" data-line-number="11"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="11">  <span class="hljs-keyword">if</span> (!array.length) <span class="hljs-keyword">return</span>;</td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="12"><div class="hljs-ln-n" data-line-number="12"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="12"> </td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="13"><div class="hljs-ln-n" data-line-number="13"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="13">  <span class="hljs-keyword">return</span> sum(array) / array.length;</td></tr><tr><td class="hljs-ln-line hljs-ln-numbers" data-line-number="14"><div class="hljs-ln-n" data-line-number="14"></div></td><td class="hljs-ln-line hljs-ln-code" data-line-number="14">}</td></tr></tbody></table></code></pre>
<p>As you can see, we are calling the function<code>sum()</code> as part of the expression for the <code>return</code> statement of the <code>avg()</code> function. Cool, right?</p>
</section>
