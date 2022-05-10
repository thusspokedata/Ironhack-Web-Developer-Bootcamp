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

![MDN Expressions and Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#expressions)
![MDN Operator Precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
![MDN Numbers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#Number_instances)
![Expressions vs Statements](https://2ality.com/2012/09/expressions-vs-statements.html)

<h3>Strings</h3>
<P>A string in any programming language is simply a sequence of characters between quotes. A character can be a letter, number, punctuation, or even new lines and tabs. It just needs to be between quotes.</p>

<h3>String interpolation</h3>
<p><strong>String interpolation</strong> is a common practice that allows you to add the value of a variable directly inside a string. It is only available when using backticks and is achieved by wrapping a variable inside ${} and adding it to the string, check the code below and it will make more sense!</p>

<h3>The .length property</h3>
<p>Using the .length property, we can define the length (number of characters) in the string.</p>

<h3>The .toUpperCase() method</h3>
<p>.toUpperCase() is a method of string data types in JavaScript that allows you to change all the letters in a string to their uppercase version.</p>

<h3>Accessing a substring</h3>
<em><strong>.indexOf(substring)</strong></em>
<p>JavaScript has a cool indexOf() method that returns the index of a particular character/string occurrence. If the substring was not found, it returns -1. To use it you just need to put the character or characters string you want to know the index of inside the () of indexOf() as shown below.</p>

<em><strong>.slice(start, end)</strong></em>
<p>Found in the official MDN docs, the slice() method extracts a part of a string and returns it as a new string, without modifying the original string.</p>

<h3>A boolean as a data type</h3>
<p>Boolean is a type of data that can have two different values: true or false.</p>

<p>

:star: The difference between == and === is that === checks, besides if the two values are the same, if the type of the value is the same. Thus, is always recommended (and a best practice) to use ===. Same goes for !==</p>

<h3>Logical operators: AND, OR, and NOT</h3>
<p>The logical operators are used to combine simple relational statements into more complex expressions. They are typically used with boolean values. This means they go hand by hand with conditional statements, which we use daily, and soon we will know how to use them in programming as well.</p>

<h3>Truthy and Falsy</h3>
<p>JavaScript, and many other languages, support boolean data types that could be true or false. In addition to that, everything in JavaScript has an implicit boolean value that can be truthy or falsy. When you say that a value is truthy in JavaScript, it doesn’t mean that the value is true. Instead, it means that the value will result as true when evaluated in a boolean context.</p>
<p>Correspondingly, when you say a value is falsy in JavaScript, it means the value translates to false when evaluated in a Boolean context.</p>

```js
        0; // <-- The Number zero

        (''); // <-- An empty String

        false; // <-- The Boolean value: false

        undefined;

        null;

        NaN;

```
  
 <p>

The last three values shown above: <strong>undefined</strong>, <strong>null</strong> and <strong>NaN</strong> represent different data types in JS and are each applied in a particular scenario. This might sound confusing right now and you will learn more about them during the course, but here is a little intro to what each means and when you might encounter them.</p>

+ <strong>undefined</strong> is a value, automatically set by JS, to a variable that was declared, but not initialized with a value.
+ <strong>null</strong> is a type of data in JS that points, generally intentional, to a non-existing value.
+ <strong>NaN</strong> or Not a Number is commonly the result of trying to apply Number methods to data types that are not numbers.

![MDN - Logical Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)
![Truthy and Falsy: When All is Not Equal in JavaScript](https://www.sitepoint.com/javascript-truthy-falsy/)
  
<h3>The if statement</h3>
<p>The if statement (or conditional block) executes a block of instructions if a specified condition is true. The condition is an expression that evaluates to true or false.</p>
  
```js 
  if (condition) {
  // statements
}
```
<h3>The else statement</h3>
<p>The else statement is executed when the if statement condition is false.</p>


```js
let age = 25;

let isUnderEighteen = age < 18;

 

if (isUnderEighteen) {

  console.log("Sorry! You can't enter :( ");

} else {

  console.log('Welcome to the night club!');

}

 

// console output:

// 'Welcome to the night club!'
```

<h3>The else if statements</h3>
<p>To be able to chain multiple conditions, we use <em>else if</em> statements. The <strong>else if</strong> statement is executed when the previous <strong>if</strong> or <strong>else if</strong> statement condition is false.</p>

```js
if (condition1) {
  // statements
} else if (condition2) {
  // statements
} else if (condition3) {
  // statements
} else {
  // if all above turn to be false,
  // this block of code will be executed
}
```

<h3>The switch statement</h3>
<p>The switch statement evaluates an expression, matching the expression’s value to a case clause, and executes statements (instruction blocks) associated with that case.</p>


```js
switch (expression) {
  case value1:
    // statements executed when the result of expression matches value1
    break;
  case value2:
    // statements executed when the result of expression matches value2
    break;
  ...
  case valueN:
    // statements executed when the result of expression matches valueN
    break;
  default:
    // statements executed when none of the values match the value of the expression
    break;
}
``` 
