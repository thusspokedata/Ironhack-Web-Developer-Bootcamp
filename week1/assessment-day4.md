Calculate a product of any given 2 numbers
Context
This challenge tests your basic understanding of functions.

Requirements
Create a function product that receives any two numbers and calculates their product.

Sample Input/Output:
input: 2, 3
output: 6

input: 5, -5
output: -25

input: 4, 0
output: 0



```js
function product(x, y) {
  return x * y
}

// solution Ironhack:

function product(x, y) {
  if (typeof x !== "number" || typeof y !== "number" ) {
    return false;
  }
  else {
    return x * y;
  }
}

```
Find max of two numbers

Context
This challenge tests your basic understanding of comparison operators, conditionals and functions.

Requirements
Create a function named maxOfTwoNumbers that receives any two number as arguments. The function should compare two numbers and return the greater number.

Sample Input/Output:
input: 11, 19
output: 19

input: -7, -55
output: -7


```js

function maxOfTwoNumbers(a, b) {
  return a > b ? a : b
}

// solution Ironhack:

function maxOfTwoNumbers(a, b) {
  if (a > b) return a;
  else return b;
}
```
Find max of three numbers
Context
This challenge tests your basic understanding of data types, conditionals and functions.

Requirements
Create a function named maxOfThreeNumbers that receives any three numbers as arguments. The function should return the greatest number out of three numbers provided.

Sample Input/Output:
input: 19, 88, 12
output: 88

input: 12, -3, 0
output: 12

input: -7, -55, -3
output: -3

```js    
function maxOfThreeNumbers(a, b, c) {
  if (a > b && a > c) {
      return a
  } else if (b > a && b > c) {
    return b
  } else {
    return c
  }
}

// solution Ironhack:
function maxOfThreeNumbers(a, b, c) {
   return Math.max(a, b, c);
}
```

Check if number is even
Context
This challenge tests your basic understanding of data types, conditionals and functions.

Requirements
Create a function named isEven that receives a number as an argument. The function should check the number and return true if number is even or false if it's not.

Sample Input/Output:
input: 4
output: true

input: 3
output: false


```js 
function isEven(num) {
  return num % 2 === 0 ? true : false
}

// solution Ironhack:

function isEven(num) {
  if (num % 2 === 0) {
   return true;
  }
  else return false;
}

``` 

Calculate sum of an array of numbers
Context
This challenge tests your basic understanding of data types, conditionals, loops and functions.

Requirements
Create a function named sumArray that receives an array of numbers as an argument. The function should return the sum of all the numbers in the array.

Sample Input/Output:
input: [1, 2, 3, 4]
output: 10

input: [1, 2, 3, -4]
output: 2

input: [10, 5, 15]
output: 30

```js
function sumArray(numbers) {
  let total = 0;
  for (num of numbers)
    total += num
  return total
}

function sumArray(numbers) {
  return numbers.reduce((total, currentValue) => total + currentValue, 0)
}

```

Find max in an array of numbers
Context
This challenge tests your basic understanding of data types, conditionals, loops and functions.

Requirements
Create a function named maxOfArray that receives an array of numbers as an argument. The function should return the greatest number out of the numbers provided in the array.

Sample Input/Output:
input: [1, 2, 3, 4]
output: 4

input: [1, 2, 3, -4]
output: 3

```js

function maxOfArray(numbers) {
  let maxNum = 0
  for (num of numbers) {
    if (num > maxNum) {
      maxNum = num
    }
  }
  return maxNum
  // your code
}

// solution Ironhack:

function maxOfArray(numbers) {
  if (numbers.length === 0) return false;
  return Math.max(...numbers);
}

```  

Find the longest string
Context
This challenge tests your basic understanding of data types, conditionals, loops and functions.

Requirements
Create a function named longestString that receives an array of strings as an argument.
The function should return the longest string out of the array of provided strings.
If the array contains more than one string of the same length, the first found longest string should be returned.

Sample Input/Output:
input: ['ana', 'ivan', 'jan', 'nick']
output: 'ivan'

input: ['apple', 'pear', 'strawberries', 'mango']
output: 'strawberries'

input: ['foo', 'bar', 'baz']
output: 'foo'

```js

function longestString(strings) {
  let string = "";
  for (str of strings)
    if (str.length > string.length) {
      string = str;
    }
  return string
}

// solution Ironhack:
function longestString(strings) {
  if (strings.length === 0) return false;
  let longest = strings[0];
  
  for (let i = 0; i < strings.length; i++) {
    if (typeof strings[i] !== "string") continue;
    if (strings[i].length > longest.length) longest = strings[i];
  }
  
  return longest;
}

``` 

Get the full name
Context
This challenge tests your basic understanding of primitive data types, objects, conditionals and functions.

Requirements
Create a function named getFullName that receives an object as an argument.
The function should return the concatenated string containing the firstName and lastName property values from the object.
More specifically, the returned string should represent a person's full name based on the provided object that contains the first and last name as its properties. Example object { firstName: 'Tony', lastName: 'Stark'}.

Sample Input/Output:
Example 1:

const webStudent = {
  firstName: 'Ana', 
  lastName: 'Alonso'
}
input: webStudent
output: 'Ana Alonso'

Example 2:

const dataStudent = {
  firstName: 'mike', 
  lastName: 'oliveira'
}
input: dataStudent
output: 'mike oliveira'

```
// why I just did it?????? 
function getFullName(personObj) {
  let fullName = personObj[Object.keys(personObj)[0]] + " " +personObj[Object.keys(personObj)[1]]
  return fullName
}

// Solution Ironhack:

function getFullName(personObj) {
  return `${personObj.firstName} ${personObj.lastName}`;
}

```

Does word exist
Context
This challenge tests your basic understanding of primitive data types, arrays, conditionals, loops and functions.

Requirements
Create a function named doesWordExist that receives two arguments:

an array of strings and
a string with the word we want to check if it exists in that array.
The function should returntrue/false depending on if the word exists in the array or not.

Sample Input/Output:
input: doesWordExist( ['ana', 'jan', 'nick'], 'jan' )
output: true

input: doesWordExist( ['apple', 'pear', 'strawberries', 'pineapple'], 'banana' )
output: false

```js  

function doesWordExist(wordsArr, word) {
  return wordsArr.includes(word)
}

// Solution Ironhack:
function doesWordExist(wordsArr, word) {
  if (wordsArr.includes(word)) return true;
  else return false;
}

```

Find unique word
Context
This challenge tests your basic understanding of primitive data types, arrays, conditionals, loops and functions.

Requirements
Create a function named findUnique that receives an array of words as an argument.
The function should returns the first found unique (non-repeating) word.

Sample Input/Output:
input: ['ana', 'ivan', 'jan', 'ana', 'jan']
output: 'ivan'

input: ['fizz', 'foo', 'bar', 'bazz', 'fizz', 'bazz']
output: 'foo'

input: ['apple', 'pear', 'strawberries', 'pineapple']
output: 'apple'

```js 
function findUnique(wordsArr) {
  wordsToDelete = [...wordsArr]
  if (wordsArr.length === 0) {
    return false
  } else {
  for (word of wordsArr) {
    wordsToDelete.shift()
    if (wordsToDelete.includes(word)) {
      continue
    } else {
      return word
    }
  }
}
}

// solution Ironhack:
function findUnique(wordsArr) {
  if (wordsArr.length === 0) return false;
  
  for (let word of wordsArr) {
    if (wordsArr.indexOf(word) === wordsArr.lastIndexOf(word)) {
      return word;
    }
  }
  
}

```

Find max in a two-dimensional array of numbers
Context
This challenge tests your understanding of primitive data types, arrays, conditionals, loops and functions.

Requirements
Create a function named maxTwoDimArray that receives a two-dimensional array (also called matrix) of numbers as an argument.
The function should return the greatest number from the given nested arrays.

Sample Input/Output:
Example 1:

const twoDimArr1 = [
  [1, 2, 3],
  [4, 3, 8],
  [5, 12, 9]
]
input: twoDimArr1
output: 12

Example 2:

const twoDimArr2 = [
  [11, 23, 3],
  [4, 5, 34],
  [5, 3, 17]
]
input: twoDimArr2
output: 34

```js

function maxTwoDimArray(matrix) {
  let greatestNum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let e = 0; e < matrix[i].length ; e++ )
      if (matrix[i][e] > greatestNum) greatestNum = matrix[i][e]
  } return greatestNum
}

// solution Ironhack:

function maxTwoDimArray(matrix) {
  if (matrix.length === 0) return false;
  
  let highestNum = 0;
  
  matrix.forEach(element => {
    element.forEach(number => {
      if (number > highestNum) {
        highestNum = number;
      }
    });
  });

``` 



