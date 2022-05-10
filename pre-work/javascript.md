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

<h3>What is a variable?</h3>
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
<h3>The break statement</h3>
<p>The break statement finishes a block execution, such as conditional blocks or loop blocks, and continues with the execution of the program.</p>

![MDN - Conditionals](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)
![MDN - Switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)

<h2>JS | Loops and iterations</h2>

<h3>The while loop</h3>
<p>The while loop in JavaScript has 2 key parts:</p>

+ the condition - once the condition is false, the loop will end;
+ the code to execute - the purpose of the loop is to run some code a certain number of times.


```js
let counter = 1;

while (counter <= 10){
  console.log(counter);
  counter += 1;
} 
``` 

<h3>The for loop</h3>
A <b>for</b> loop is much like the <b>while</b> loop, except that some of the functionalities you had to do on your own are included in it.


```js
for (let i = 1; i <= 10; i++){
    console.log(i);
}
```

<h3>Nested loops</h3>
<p>In any code block, you can create any JavaScript statement. This means that, inside an if block you can have nested if blocks, or loop blocks, or any other kind of blocks. The same logic applies to looping:</p>

```js
     

    Result
    Skip Results Iframe

EDIT ON

const statement = "We are in Ironhack";

for(let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    let x = 0;
    
    while (x < statement.length) {
      let letter = statement[x];
      if (letter === "a") {
        console.log(i + " Cheers!")
      }
      x++;
    }
  }
}
````

<p>:exclamation::warning: Although it is possible to nest loops, try to avoid it as much as possible. Nested loops slow down the code execution (bad code efficiency), but more than anything, make your code less readable so stay away from them.</p>

<h3>Manipulating loops and their flow</h3>
<em><strong>break</em></strong>
<p>If you want to end a loop execution early, you can use the break keyword.</p>


```js
for (let i = 1; i <= 30; i++){
  if (i === 21){
    console.log("TWENTY ONE! Black Jack, dale!");
    break;
  } else {
    console.log(i);
  }
}
``` 

<em><strong>continue</em></strong>
<p>Sometimes you want to skip an iteration in a loop and continue to the next. If so, use the continue keyword in your loop combined with some sort of condition.</p>


```js
for (let i = 1; i <= 30; i++){
  if (i % 3 === 0) { 
    continue; 
  }
  console.log(i);
}
``` 

![MDN For loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
![MDN While loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
![JavaScript Loop Control](https://www.tutorialspoint.com/javascript/javascript_loop_control.htm)

<h2>JS | Functions</h2>

<h3>What is a function?</h3>
<p>Functions are one of the fundamental building blocks in JavaScript. A function is a set of statements that performs a particular task of the program. This task could be just a little part of a program or even the whole program.</p>

<h3>Why use functions?</h3>
<p>It is very often that we have to rewrite the same piece of code all over again in the same application - for example, we want to address our users when they log in, when they log out, when they spend too much time on one spot, and the session is about to expire and log them out. So we see the pattern here, right? All the time is some kind of alert carrying a different message. So we will have to have pretty much the same code typed multiple times. Well… not really! Now we will learn how to write and use functions, and we’ll be able to have a small piece of code to handle different situations per our need.</p>

<h3>Declaring a function in JavaScript</h3>
<p>The function declaration is the process of creating a function, but not executing it.</p>
```js
function sayHello() {

  console.log('Hello!');

}
```
<h3>Invoking a function in JavaScript</h3>
<p>The process of executing (calling) the function is known as function invocation.</p>

```js
sayHello(); // => Hello!

sayHello(); // => Hello!

sayHello(); // => Hello!
``` 

<h3>Function Syntax</h3>

```js 
function <name> ( [<parameter_list>] ) {

  <instructions>

 

  [return <expression>;]

}
```


+ The word function is a reserved keyword in JS- whenever you want to create a function, it has to have this word (it is not optional neither can be replaced with some other word);
+ Anything that is placed between [] symbolizes optional content - it can be there but doesn’t have to.
+ In syntax examples, like the one above, angle brackets <> indicate a place for the identifier/parameter/code that should be provided.

<h3>Arguments and Parameters</h3>
<p><b>Parameter</b> is the variable between the parentheses which is part of the function declaration. In the case above: The language variable. Note that this word is a placeholder and can be any word possible. <b>Argument</b> is the value passed to the function at the moment of its invocation. In the case above: The different strings ger, fr, or esp that are passed and stored in the parameter.</p>

<h3>Returning Values</h3>
<p>Functions won’t always be going to print something in the console. Sometimes you want to do some action and return a value back.</p>
<p>

:exclamation: Be aware, return ends the function immediately. Only use it when you want to return a value and end the function.

A function can only return one value, but the type of that value can be any: string, number, boolean, object, array, …
</p>
<p>Why return a value? Because we can later use that returned value inside an expression, assign it to a variable, etc.</p>

![MDN Functions Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
![MDN Return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)
![Functions Cheatsheet - Codecademy](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-functions/cheatsheet)
![Functions chapter - Eloquent JavaScript](https://eloquentjavascript.net/1st_edition/chapter3.html)
![return in JavaScript](https://gomakethings.com/wtf-is-return-in-javascript/)


