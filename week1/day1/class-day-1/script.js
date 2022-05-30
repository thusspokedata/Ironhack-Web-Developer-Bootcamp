// Javascript intro

console.log("Hello World");

// there are other methods available
console.table(["a", "b", "c"]);

console.error("this is an error");

console.warn("this is a warn");

/* this is a multiline comment  */

// variables - named storage
/*
// declare a variable
let user;
console.log(user); // undefined

// assign
user = "marco";
// ###########################################################################
// Data Types ################################################################
// there are two types: primitives and objects ###############################
// primitives are: string, number, boolean, null, undefined, symbol ##########
// ###########################################################################

// js is dynamically typed:
let num = 23;
console.log(typeof num); //number
num = "42";
console.log(typeof num); // string

// number
let distance = 9000;
let price = 19.99;

console.log("hello world" * 2); // NaN

// mathematical operators
// + - / *

const sum = 3 + 6;
console.log(sum);

// modulo - %
const res = 7 % 2;

console.log(res);

// shorthand writing

let x = 0;
// increment x by 1
x = x + 1;
console.log(x);
// shorter
x += 1;
console.log(x);
// even shorter
x++;
console.log(x);

//
++x; // comienza con el numero 1

// string -sequence of characters

const greeting = "hello";
const chars = "!!!";

//using + we concatenate strings (put them together)
const str = greeting + "world" + chars;

console.log(str); // helloworld!!!

// using backticks

const backticks = `${greeting}world${chars}`;
console.log(backticks); // helloworld!!!

// accessing characters in the string

console.log(greeting[4]); // o

console.log(greeting.charAt(0)); // h // it is gonna work in all the browsers

// string properties

console.log(greeting.length); // 5

console.log(greeting[greeting.length - 1]); // o

console.log(greeting.indexOf("l")); // 2

// lastIndexOf

console.log(greeting.lastIndexOf("l")); // 3

// use include to check of sth is contained in a string
const s = "hello";
console.log(s.includes("e")); // true

const sliced = greeting.slice(0, 2);
console.log(sliced); // h3
console.log(greeting.slice(0)); // hello

// string are inmutable -> they can not change
let name = "marco";
console.log(name.toUpperCase()); // MARCO
console.log(name);
name = name.toUpperCase(); // MARCO
console.log(name);

// get the first char of hacker
// uppercase the first char
//get the rest of hacker (after the first char)
// put them together

let hacker = "antonio";

hacker = hacker[0].toUpperCase() + hacker.slice(1);
console.log(hacker);

// undefined and null
// undefined in the unintentional abscence of a value
// null is the intencionañ abscence of a value

// booleans -> either true or false
// boolean operators < > <= >=

4 == 4; // true
4 == "4"; // true
4 === 4; // true
4 === "4"; // false --> estrictly equal, also checks the type

// && logical and || logical or
console.log(4 > 3 && 5 > 4); // true

// truthy and falsy values -> 0, '', false, null, undefined, NaN
// conditionals
if (5 > 3) {
  console.log("this is true");
}

console.log(5 > 3 ? "this is kilos true" : "not true");

// truthy and falsy values
let password = "";
// check if password is set
if (password === "") {
  console.log("password is not set");
} else {
  console.log("it is set");
}

console.log(!password ? "not set" : "it is set");

if (!password) {
  console.log("no password");
} else {
  console.log("si password");
}

const age = Number(prompt("whats your age"));
console.log(typeof age);

if (age >= 18) {
  console.log("you can drive");
} else if (age === 17) {
  console.log("you can drive with an adult");
} else {
  console.log("you can not drive");
}
console.clear();
// switch case

const language = prompt("what is your language");

switch (language) {
  case "french":
    console.log("bonjour");
    break;
  case "english":
    console.log("good morning");
    break;
  case "german":
    console.log("guten tag");
    break;
  default:
    console.log("language not reconized");
}

// loops

for (let i = 1; i < 5; i++) {
  console.log("Hello");
}

// log the number from one to ten

for (let i = 1; i < 11; i++) {
  console.log(i);
}

// while loop
let i = 1;
while (i < 11) {
  console.log(i);
  i++;
}



let userPassword;

// show the prompt asking for the password
// if the password is correct
// -> alert ('granted granted')
// not correct -> show the prompt again

while (userPassword !== "1234") {
  userPassword = prompt("what is your password");
}
// if we reach this line the password is correct
alert("access granted");

*/
