JS DOM List


Context
You have learned the basics of DOM manipulation. One of the concepts that were presented during the lectures was appending elements to the DOM.
In this exercise, you will have a chance to check your understanding of it.



Getting Started
All your work should be done in the index.js file. More specifically, your task is to implement the function displayUsers.
The function declaration is already provided in the index.js file.

Due to the testing environment setup, you should not change the name of the provided function declaration displayUsers(users){ }.



To begin working you just need to start writing your code inside the function.



Your code and submission
To check on your progress and if you are passing the tests, you can click on the RUN TESTS button.

In addition to this, you can reference the tests by opening the index.test.js file.

Hint: You may want to reference the test output (in the Run Output panel) since there might be some edge cases stated in the tests, that might not be too obvious from instructions.

To submit the current challenge when done, you have to click on the SUBMIT button, in the upper right corner.



Final Submission
The final submission of the assessment is done in the REVIEW panel. There you will be prompted to check your code once again and do a final submission. You can't do any re-submission after this step is done.



Tasks & Objectives
Function displayUsers receives one argument named users which is an array of strings. The function should do the following:

Create a new ul unordered list element in the DOM
Create a new li element for each item in the users array
Add a class attribute to each li element


1. Create a new ul unordered list element in the DOM
If you take a look at the index.html file, you will notice a <div id="app"></div> element. In the function displayUsers you should:

Write a query to get this DOM element ( <div id="app"></div> ).
Create a new unordered list element.
Append the unordered list element to the previously mentioned <div> element.


2. Create a new li element for each item in the users array
Next, after creating and appending the unordered list to the div, the function displayUsers should also create a <li> element for each item in the users array. To achieve this you should:

Create a new li element for each item in the users array.
Append each created li element to the existing unordered list.
Set the string value of each array item as the content of each li element.
To see the contents of the users array, you can use console.log inside the function:

console.log(users);
Hint: You should loop through the array and create a new <li> for each element.



3. Add a class attribute to each li element
Depending whether elements in the users array have an even or odd index number, add a class attribute class="even" orclass="odd" to the li element.

Example:

<li class="even">Angel</li>
<li class="odd">Victor</li>
If you need one more hint, check this StackOverflow article.

**my solution:**
  
```js 
  
function displayUsers(users) {
  let ul = document.createElement("ul");
  document.querySelector('#app').appendChild(ul)
  for (let i = 0; i < users.length; i++) {
     let li = document.createElement('li')
     document.querySelector('ul').appendChild(li)
     if (i % 2 === 0){
     li.classList.add('even')
     li.innerText = users[i]
    } else {
     li.classList.add('odd')
     li.innerText = users[i]
    }
  }
};
                                   
```
                                   
```js
                            
function displayUsers(users) {
  // 1
  const div = document.getElementById("app");
  const ul = document.createElement("ul");
  div.appendChild(ul);

  // 2
  users.forEach((item, i) => {
    // 3
    const isEven = i % 2 === 0;
    const className = isEven ? "even" : "odd";
    ul.innerHTML += `<li class="${className}"> ${item}</li>`;
  });
};

```                                   


JS DOM Counter


Context
You have learned the basics of DOM manipulation. One of the concepts that were presented during the lectures was how to add event listeners to DOM elements and how to access and change the content of DOM elements.
In this exercise, you will have a chance to check your understanding of it.



Getting Started
All your work should be done in the index.js file.

Take a look at the index.html file. You will see some markup already present: the 2 buttons and a paragraph with the counter value.



Your code and submission
To check on your progress and if you are passing the tests, you can click on the RUN TESTS button.

In addition to this, you can reference the tests by opening the index.test.js file.

Hint: You may want to reference the test output (in the Run Output panel) since there might be some edge cases stated in the tests, that might not be too obvious from instructions.

To submit the current challenge when done, you have to click on the SUBMIT button, in the upper right corner.



Final Submission
The final submission of the assessment is done in the REVIEW panel. There you will be prompted to check your code once again and make a final submission. You can't do any re-submission after this step is done.



Tasks & Objectives
1. Add an event listener to enable incrementing the counter
The increment button should increment the counter value by 1 on each click and stop incrementing when the counter value reaches 10.

To implement this you should:

Get the DOM element with the corresponding id.
Add an event listener that increments the counter value on each click, up to 10.


2. Add an event listener to enable decrementing the counter
The decrement button should decrement the counter value by 1 and stop decrementing when the counter value reaches 0.

To implement this you should:

Get the DOM element with the corresponding id.
Add an event listener that decrements the counter value on each click, until 0.



```js

document.querySelector('#counter-decrement').addEventListener('click', function () {
  if (document.querySelector('#counter-value').textContent >= 1 )
document.querySelector('#counter-value').textContent -= Number(1);});

document.querySelector('#counter-increment').addEventListener('click', function () {
  if (document.querySelector('#counter-value').textContent <= 9) {
document.querySelector('#counter-value').textContent = 
Number(document.querySelector('#counter-value').textContent) +1 ;}});

```

**solution ironhack:**
                                                               
 ```js 
const decrementButton = document.getElementById("counter-decrement");
const incrementButton = document.getElementById("counter-increment");
const counter = document.getElementById("counter-value");

decrementButton.onclick = () => {
  const counterValue = Number(counter.innerHTML);
  if (counterValue <= 0) return;
  counter.innerHTML = Number(counter.textContent) - 1;
};

incrementButton.onclick = () => {
  const counterValue = Number(counter.innerHTML);
  if (counterValue >= 10) return;
  counter.innerHTML = counterValue + 1;
};

```                                                              
                                                              
