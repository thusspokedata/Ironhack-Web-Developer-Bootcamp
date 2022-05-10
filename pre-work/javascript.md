<h3>What is JavaScript?</h3>
<p>JavaScript is an object oriented and dynamic programming language created in 1995.</p>
<p><strong>In the frontend</strong>, JavaScript is what adds the interactivity and allows you to create a variety of features for your apps;
<p><strong>In the backend</strong>, JavaScript is what makes it possible to define logic and develop each app’s functionality.
  
<h3>ES2015: Further evolutions of JavaScript</h3>
<p>ECMAScript controls which changes in JavaScript can and which can’t be implemented. Making changes to the language that aren’t backward compatible could have massive negative effects on the thousands of webpages that depend on it. This means Ecma International only approves changes that don’t break backward compatibility.</p>
<p>JavaScript has gone through many stages of evolution, and the versions of ECMAScript (shorter ES) that are still in use are ES5 (from 2009.), ES6 (from 2015.), ES7 (2016.).</p>

<h3>Basic JavaScript Syntax</h3>
<p>The syntax of a programming language is the set of rules that needs to be respected by programmers (who write the code) to be successfully interpreted by machines (that execute that code).</p>
<p>JavaScript’s syntax is loosely based on C or Java. This means quite a few curly braces {} and parentheses ().</p>

<h3>What is a variable?<7h3>
<p>The main purpose of variables is to store some information in them. These variables are labeled so whenever we need the information inside we can easily access them. A very common way of saying - access to a variable - is reference a variable by its name.</p>
  
<h3>Variable declaration and initialization</h3>
<p>Variable declaration is the act of just creating and labeling an empty box that will later be filled with some information (the value).</p>
<p>To declare or define a variable, we can use the keyword let or const and in older versions of JavaScript, you would find the keyword var. var is still very much present, and it’s super important to understand similarities and differences between let and var and we will go over this a bit later during the course. For now, just keep in mind that you could in most cases use either let or var to declare the same variable.</p>
  
<h3>Important naming rules :star: :rocket:</h3>
<p>Naming variables is hard, and it is, in fact, one of the hardest things in programming. You should try your best to name variables in a meaningful way.</p>
<p>The rules to keep in mind when naming a variable:</p>
  
+ machines process these variables, but humans have to read them and understand them so always use human-understandable expressions, like firstName, hasColor, pricePreTax, etc.
+ never, ever, ever use x, j, a to name your variables unless it super clear to you and everyone else what is going on in the code.
+ name variables as descriptive as possible (examples of proper naming: userName, creditCardNo, and examples of bad names: info, value, etc. which say nothing and mean nothing from someone who was not included in the coding process from the very beginning).
+ if you’re working in a team, and in most cases, you will be, this needs to be discussed amongst everybody - terms for naming variables need to be the same for everyone.

![The art of naming variables](https://hackernoon.com/the-art-of-naming-variables-52f44de00aad)
  
<h3>Basic Operators</h3>
<table>  
  <thead>
    <tr>
      <th>Name</th>
      <th>Operator</th>
      <th>Equivalent</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <th>Assignment</th>
        <th>x = y</th>
        <th>N / A</th>
      </tr> 
      <tr>
        <th>Addition assignment</th>
        <th>x += y</th>
        <th>x = x + y</th>
      </tr> 
      <tr>
        <th>Subtraction assignment</th>
        <th>x -= y</th>
        <th>x = x - y</th>
      </tr> 
      <tr>
        <th>Multiplication assignment</th>
        <th>x *= y</th>
        <th>x = x * y</th>
      </tr> 
      <tr>
        <th>Division assignment</th>
        <th>x /= y</th>
        <th>x = x / y</th>
      </tr> 
      <tr>
        <th>Remainder assignment</th>
        <th>x %= y</th>
        <th>x = x % y</th>
      </tr> 
      <tr>
        <th>Exponentiation assignment</th>
        <th>x **= y</th>
        <th>x = x ** y</th>
      </tr> 
  </tbody>
</table>
  
<h3>Expressions</h3>
<p>An expression is any valid set of literals, variables, operators, and other expressions that evaluates to a single value. The value may be a number, a string, or a logical value. Conceptually, there are two types of expressions: those that assign a value to a variable, and those that have a value.</p>
</p><strong>In Human:</strong> An expression is a combination of any value (number, string, array, object) and a set of operators that result in another value.</p>
