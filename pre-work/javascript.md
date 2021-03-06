<h1>Javascript</h1>

<a id='section0'></a>
<h2>Table of contents</h2>

+ [JS | Introduction and syntax](#section1)
+ [JS | Variables](#section2)
+ [JS | Basic data types: Numbers](#section3)
+ [JS | Basic data types: Strings](#section4)
+ [JS | JS | Basic data types: Booleans](#section5)
+ [JS | Conditional statements](#section6)
+ [JS | Loops and iterations](#section7)
+ [JS | Functions](#section8)
+ [JS | Basic data types: Arrays](#section9)
* [.push()](#section9-1)
* [.unshift()](#section9-2)
* [.pop()](#section9-3)
* [.shift()](#section9-4)
* [.splice()](#section9-5)
* [for loop](#section9-6)
* [while loop](#section9-7)
* [forEach loop](#section9-8)
* [](#section10)
* [JS | Nested data structures - arrays & objects](#section11)




<a id='section1'></a>
<h2>JS | Introduction and syntax</h2>

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


<a id='section2'></a>
<h2>JS | Variables</h2>

[back to index](#section0)

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


<a id='section3'></a>
<h2>JS | Basic data types: Numbers</h2>

[back to index](#section0)


  
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

+ ![MDN Expressions and Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#expressions)
+ ![MDN Operator Precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
+ ![MDN Numbers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#Number_instances)
+ ![Expressions vs Statements](https://2ality.com/2012/09/expressions-vs-statements.html)


<a id='section4'></a>
<h2>JS | Basic data types: Strings</h2>

[back to index](#section0)

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


<a id='section5'></a>
<h2>JS | Basic data types: Booleans</h2>

[back to index](#section0)

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

+ ![MDN - Logical Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)
+ ![Truthy and Falsy: When All is Not Equal in JavaScript](https://www.sitepoint.com/javascript-truthy-falsy/)


<a id='section6'></a>
<h2>JS | Conditional statements</h2>

[back to index](#section0)

  
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

+ ![MDN - Conditionals](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)
+ ![MDN - Switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)

<a id='section7'></a>
<h2>JS | Loops and iterations</h2>

[back to index](#section0)

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

+ ![MDN For loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
+ ![MDN While loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
+ ![JavaScript Loop Control](https://www.tutorialspoint.com/javascript/javascript_loop_control.htm)


<a id='section8'></a>
<h2>JS | Functions</h2>

[back to index](#section0)


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

+ ![MDN Functions Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
+ ![MDN Return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)
+ ![Functions Cheatsheet - Codecademy](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-functions/cheatsheet)
+ ![Functions chapter - Eloquent JavaScript](https://eloquentjavascript.net/1st_edition/chapter3.html)
+ ![return in JavaScript](https://gomakethings.com/wtf-is-return-in-javascript/)



<a id='section9'></a>
<h2>JS | Basic data types: Arrays</h2>

[back to index](#section0)

<h3>Creating an Array</h3>
<em><b>An Empty Array</em></b>
<p>In JavaScript, an array is declared using square brackets []. This is also called creating an array literal.</p>


```js 
const animalsArray = [];
```

<em><b>A pre-populated array</em></b>

```js 
const animalsArray = ['dog', 'cat', 'snake'];
```

<h3>Basic Array Operations</h3>

<p>Things to keep in mind:</p>

+ whatever is in the array, we will refer to it as the element of that array.
+ elements in the array are separated with commas.
+ elements are numbered, starting with zero.
+ we can access each element using the particular position of that element. Like strings, the index starts at 0.

<h3>Adding and Removing Elements</h3>

<p>It would be useless not to be able to change the structure of the array, either by adding elements or removing them. Certain array methods allow us to manipulate with array elements, so let’s talk about:</p>

+ .push()
+ .unshift()
+ .pop()
+ .shift()
+ .splice()

<a id='section9-1'></a>
<p>The <b>.push()</b> method adds a new element to the end of your array.</p>

[back to index](#section0)
```js 
const animalArray = ["dog", "cat", "fish"];
console.log(`Before: ${animalArray}`); // => Before: dog,cat,fish

animalArray.push("lizard");
console.log(`After: ${animalArray}`); // => After: dog,cat,fish,lizard
```
<a id='section9-2'></a>
<p>If you want to add an element at the beginning of the array, what you are looking for is the <b>.unshift()</b> method.</p>

[back to index](#section0)

```js 
const animalArray = ["dog", "cat", "fish"];
console.log(`Before: ${animalArray}`); // => Before: dog,cat,fish

animalArray.unshift("whale");
console.log(`After: ${animalArray}`); // => After: whale,dog,cat,fish
```
<a id='section9-3'></a>
<p>If you want to extract the last element of the array, then you should use the <b>.pop()</b> method.</p>

[back to index](#section0)

```js 
const animalArray = ["dog", "cat", "fish"];
console.log(`Before: ${animalArray}`); // => Before: dog,cat,fish

animalArray.pop();
console.log(`After: ${animalArray}`); // => After: dog,cat
```

<a id='section9-4'></a>
<p>In case you need to remove the first element of the array, you should use the <b>.shift()</b> method, since it extracts and returns the first element.</p>

[back to index](#section0)

```js 
const animalArray = ["dog", "cat", "fish"];
console.log(`Before: ${animalArray}`); // => Before: dog,cat,fish

animalArray.shift();
console.log(`After: ${animalArray}`); // => After: cat, fish
```

<p>While using .pop() and .shift() to remove an element from an array you might be wondering, what if I want to use the removed element later? Luckily, these methods return the removed element, allowing you to store it inside a variable, like this:</p>

```js 
const animalArray = ['dog', 'cat', 'fish'];
 
// removes the first element and stores it inside a variable
let myFirstAnimal = animalArray.shift();
// removes the last element and stores it inside a variable
let myLastAnimal = animalArray.pop();
 
console.log(animalArray); // => ["cat"]
console.log(myFirstAnimal); // => "dog"
console.log(myLastAnimal); // => "fish"


```
<a id='section9-5'></a>
<h3>Removing and/or adding Items in any position: .splice()</h3>

[back to index](#section0)
<p>Sometimes, we may want to add/remove elements in any location besides the start or end of the array. To do this, we use a slightly more complex method called .splice(). This method can receive either two or more arguments:</p>

+ the first defines the index <b>position</b> from which you want to start deleting or adding elements,
+ the second defines <b>how many items will be deleted.</b> If this argument is 0, it will simply not remove anything,
+ the third (OPTIONAL) defines an <b>item that will be added</b> to that position. If the argument is not passed, it will simply add nothing to the array.

```js 
const animalArray = ["dog", "cat", "fish", "lizard", "whale", "cheetah"];
console.log(`Original: ${animalArray}`); // => Original: dog,cat,fish,lizard,whale,cheetah
console.log("------");

// "From the first element, remove one going forward"
animalArray.splice(0, 1);
console.log(`From the first element, remove one going forward: ${animalArray}`);
// => From the first element, remove one going forward: cat,fish,lizard,whale,cheetah
```

+ Any extra arguments passed will behave exactly like the third one, this is used to add multiple elements to the array, all in the same line.
+ Similar to .pop() and .shift() any removed elements can be stored inside another variable. However, note that they will be stored as a new array of elements.

<h3>Arrays and loops</h3>

<p>One of the most common uses of a loop is to iterate over an array. This means going through the array and being able to do something with each element of the array.</p>

<a id='section9-6'></a>
<em><strong>for loop</em></strong>

[back to index](#section0)


```js
const animalArray = ["dog", "cat", "fish"];

for (let i = 0; i < animalArray.length; i++){
  console.log(`Index: ${i} - element: ${animalArray[i]}`);
}

// Index: 0 - element: dog
// Index: 1 - element: cat
// Index: 2 - element: fish

``` 

<a id='section9-7'></a>
<em><strong>while loop</em></strong>

[back to index](#section0)

```js
Result Skip Results Iframe
EDIT ON
let counter = 0;
const animalArray = ["dog", "cat", "fish"];

while (counter < animalArray.length){
  console.log(`Counter (===index): ${counter} - element: ${animalArray[counter]}`);
  counter++;
}

// Counter (===index): 0 - element: dog
// Counter (===index): 1 - element: cat
// Counter (===index): 2 - element: fish

``` 

<a id='section9-8'></a>
<em><strong>forEach loop</em></strong>

[back to index](#section0)
<p>We will cover one of the most used ways to iterate over arrays, and that is the forEach loop. It is preferable to the others due to readability.</p>

<p>The .forEach() is an array method that iterates through the array and has access to each element of the array, but in a bit cleaner and more readable way than the other two approaches.</p>

```js
const animalArray = ["dog", "cat", "fish"];

// option 1 - ES5 (still in use so good to know):
// animal is just a placeholder, can be any word
animalArray.forEach(function(animal){
  console.log(`option 1: ${animal}`);
});

// option 2 - ES6 (new and cool way that uses arrow function ( => ) - we will talk about this in the course)
// arrayElement is just a placeholder, can be any word
animalArray.forEach(arrayElement => {
  console.log(`option 2: ${arrayElement}`);
});
``` 
+ ![Mozilla Developer Network Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
+ ![JavaScript Array Methods: .unshift(), .shift(), .push(), and .pop()](https://www.bennadel.com/blog/1796-javascript-array-methods-unshift-shift-push-and-pop.html)

<h3>Arrays as arguments</h3>

<p>Although we used mostly strings and numbers as function arguments so far, arguments can have any type. Let’s see an example of passing an array as an argument:</p>

```js

// declare the function-array as parameters:
function printElements (someArray){
  for(let i=0; i<someArray.length; i++){
    console.log(`Element: ${someArray[i]}`)
  }
}


// example 1:
// invoke the function - pass an array as the parameter:
printElements(["hello", "kitty", "pizza", 3, 78, false]); 
// Element: hello
// Element: kitty
// Element: pizza
// Element: 3
// Element: 78
// Element: false


// example 2:
const funnyArray = ["dog", 4, "miami", true];
printElements(funnyArray);
// Element: dog
// Element: 4
// Element: miami
// Element: true

``` 

<a id='section10'></a>
<h2>JS | Basic data types: Objects</h2>

[back to index](#section0)


<h3>Introduction</h3>
<p><em>Objects</em> in JavaScript can be described as a collection composed of key-value pairs.</p>

**In programming, a key-value pair is a set of two linked data items:**

<ul>
  <li>the key is a string that identifies a property of an object,</li> 
  <li>the value is the content associated with the indicated key.</li> 
</ul>

<p>The <em>keys are also unique in one object</em>, and one key will always have just one value associated with it. This value can be of any type: string, number, boolean, array, or even another object.</p>

<h3>Object - what is it?</h3>

<p><b>Objects</b> are collections of properties and each property is represented with key-value pair. The representation of an object in JavaScript is curly braces {}.</p>
**Syntax**

```js
let objectName = {
  key1: value1,
  key2: value2,
  key3: value3
};

```  

<p><b>Keys</b> are always strings, but you don’t need to wrap these keys in quotes when defining an object since it will be done for you when your code compiles (compiling - simplified - is the process of translating your code to computer understandable zeros and ones so it can be executed):</p>

```js
{
  name: 'Ironhack';
}
```  
<p>Will be translated into:</p>

```js
{
  "name": "Ironhack"
}
```  

<h3>Why should we use objects?</h3>

<p>Objects are useful to group values that belong together into a single unit.</p>

<p>By using this object notation, your code will be much more clear and easy to understand. The presentation of information in an object way is the more readable one and the maintainability of the code will be much easier.</p>

<h3>Adding properties to the object</h3>
<p>you can add as many properties as you want inside an object, all you need to do is separate them with a comma.</p>

<p>To add a new property to an object that has already been declared you simply reference the new key you want to add either with dot notation or bracket notation and assign the new value, like shown below:</p>

```js

let olympicRecords = {
  athletics100Men: 'Justin Gatlin',
  athleticsLongJumpMen: 'Mike Powell'
};

// objectName.key = value
olympicRecords.swimming200Men = 'Michael Phelps';
``` 

<h3>Update Values</h3>

<p>The process couldn’t be more straightforward than this:</p>

```js
olympicRecords.athletics100Men = 'Usain Bolt';

``` 

<h3>Removing Properties</h3>

<p>Let’s suppose we have made a mistake and added a new key, the Double Ollie world record:</p>

```js
olympicRecords.doubleOllie = 'Chris Chann';

``` 

<p>we can use the delete operator to remove keys from an object. It is as simple as specifying which key you want to remove:</p>

```js
delete olympicRecords.doubleOllie;

``` 


<h3>List Properties</h3>

<p>This is extremely useful when you work with a huge object and you are not sure what properties it has. <b>Object.keys()</b> receives an object as an argument. In our case it would be:</p>

```js
let allKeys = Object.keys(olympicRecords);

console.log(allKeys);

// console output:
// [ "athletics100Men",
//   "athleticsLongJumpMen",
//   "swimming200Men" ]

``` 

<h3>Loops in objects</h3>

<p>Although you can use Object.keys()and for or while loops, In JavaScript, there is a loop designed explicitly for iterating over objects. This loop is called <b>for..in</b>.</p>

```js
//    placeholder - can be any word (key, record, blah, pizza but pick meaningful names)
//        |
for (let key in olympicRecords) {
  console.log(key);
}

// console:
// athletics100Men
// athleticsLongJumpMen
// swimming200Men
``` 

<h3>The in operator</h3>

<p>The <b>in</b> operator is used to verify if a certain property exists in an object. It returns a boolean.</p>

```js
let user = {
  name: 'Ana',
  age: 27
};

console.log('name' in user); // => true
console.log('age' in user); // => true
console.log('course' in user); // => false

``` 

<h3>Cheatsheet</h3>

<img src="https://github.com/antonio-datahack/Ironhack-Web-Developer-Bootcamp/blob/main/img/object-cheatsheet.png" />

<a id='section11'></a>
<h2>JS | Nested data structures - arrays & objects</h2>

[back to index](#section0)

