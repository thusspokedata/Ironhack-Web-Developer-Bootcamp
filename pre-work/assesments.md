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

``` 
<h3>4.1 Pineapple Pizza Filter</h3>

```js

const pizzas = [
    { type: 'pineapple', size: 'M'},
    { type: 'pepperoni', size: 'S'},
    { type: 'mushrooms', size: 'L'},
    { type: 'pineapple', size: 'S'},
  ];

console.log("---------------my soltuion--------------------")

function filterPizzas(pizzas) {
  let newPizzaList = [];
  for (let pizza in pizzas) {
    if (pizzas[pizza].type !== 'pineapple')
      newPizzaList.push(pizzas[pizza])
  }
  return newPizzaList
}

console.log("------------solution ironhack-----------------------")

function filterPizzas(pizzas) {
  const filteredPizzas = [];
  
  for (let i = 0; i < pizzas.length; i++) {
    const pizza = pizzas[i];
    const pizzaType = pizza.type;
    const isNotPineapple = pizzaType !== "pineapple";
    
    if (isNotPineapple) {
      filteredPizzas.push(pizza);
    }
  }
  
  return filteredPizzas;
}

```  


<h3>6.1 - SORT PRODUCTS</h3>

```js 

console.log('-----------------------my solution----------------------')
function sortProducts (matrix) {
  var result = {tech: [], food: []}
  for (const  mat of matrix) {
    for (const m of mat) {
      m.category === 'tech' ? result.tech.push(m) : result.food.push(m); 
    }
  }
  return result
}

console.log('-----------------------solution Ironhack----------------------')


function sortProducts (matrix) {
  const tech = [];
  const food = [];
  
  for (let i = 0; i < matrix.length; i++) {
    const arr = matrix[i];

    for (let j = 0; j < arr.length; j++) {
      const product = arr[j];
      
      if ( product.category === 'tech') {
        tech.push(product);
      }
      else if (product.category === 'food') {
        food.push(product);
      }
    };
  };  
  
  return {
    tech: tech,
    food: food,
  }
}


