<h3>Arrays & Loops</h3>

```js
console.log("------------my solution-----------------------")
function countSmilies (message) {
  let count = 0;
  let smile = ':)';
  for (let i = 0; i < message.length -1; i++) {
     if ((message[i] + message[i+1]) === smile) 
       count++;
  }
  return count  
};

console.log(countSmilies("Hello :), how are you doing :) :D"))

console.log("------------solution ironhack-----------------------")
function countSmilies(message) {
  let count = 0;
  for (let i = 0; i < message.length; i++) {
    const char1 = message[i];
    const char2 = message[i + 1];
    
    if (char1 === ":" && char2 === ")") {
      count++;
    };
  };

  return count;
};


```

```js

console.log("---------------my soltuion--------------------")

function pickOdd (arr) {
  const oddNumbers = []; // do not remove or change this line
  for (let i = 0; i < arr.length ; i++)
    if (arr[i] % 2 !== 0) {
        oddNumbers.push(arr[i])
        }
  
  // Your code here
  
  
  return oddNumbers; // do not remove or change this line
}

let arr = [1, 2, 3, 4];
console.log(pickOdd(arr))


console.log("------------solution ironhack-----------------------")
function pickOdd (arr) {
  const oddNumbers = [];// do not remove or change this line

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const isOdd = num % 2 === 1;
    
    if (isOdd) {
      oddNumbers.push(num);
    }
  }
  
  return oddNumbers; // do not remove or change this line
}

