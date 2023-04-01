//type Conversion:
//Maually we do it
//strings, Numbers, Booleans

// let a = 100;
// console.log(typeof a);

// let x = prompt(alert(alert("Enter Numbert")));
// console.log(x, typeof x);
// let y = Number(x);
// console.log(++y);

//Truthy And Falsy Values
//0
//underfined
// //null
// //""
// //NaN
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(1));

// //type Coercion

// //To String Coercion: Happens with addition operator

// let a = "12";
// let b = 2 * a;
// console.log(b);

// console.log(12 + "5" + true);
// console.log("125true");

// console.log("25" + NaN);
// //

// // Number Conversion: Happens with other operators
// console.group("32" / 10);

// //Implicit Conversion of Boolean
// console.log(true + "1");
// console.group(true - 8);
// console.log(10 % false);

//=====================

// Control Flow Statementss

//if else statements

//Syntax

// if(this constions is true){perform the operation in the code block}

// let x = 10;
// if (x) {
//   console.log("x is truthy value");
// }

// let y = null;

// if (y) {
//   console.log("y is null");
// }
// console.log("y is falsy value");
// console.log("This is last statement");

//let result = condition ? value1 : value2;

// let marks = 72;

// let result = marks >= 50 ? "pass" : "fail";

// console.log(result);

// let result2 = marks >= 80 ? "pass" : "fail";
// console.log(result2);

// if result;
// if (marks >= 50) {
//   result = "pass";
//   result = "fail";
// }

// console.log("result");

//Short Circuiting
// AND &&
//OR ||

// let a = true && true && false;
// console.log(a);

//==================

//OR operator
//will return the first true value
//If all operand are false then the result would be false

// let a2 = true || false;
// console.log(a2);

//===========================

//Loops In JavaScript

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log("**************");
// //===============

// // for loops

// // for(starting Point; condition; increment;/decrement;){
// //code that you want to execute
// //}

// for (let i = 1; i < 8; i++) {
//   console.log(i);
// }

// console.log("i reached 8");

// for (let i = 5; i > 0; i--) {
//   console.log(i);
// }

//while Loop

// let i = 1;
// while (i < 8) {
//   console.log(i);
//   console.log("still in while loop");
//   i++;
// }

//Break and Continue

//Break;

// for (let i = 1; i < 10; i++) {
//   if (i === 5) {
//     console.log("i reached 5");
//     break;
//   }
// }
// console.log("Outside the for loop");

// //Continue

// for (let i = 1; i < 10; i++) {
//   if (i === 5) {
//     console.log("i reached 5");
//     continue;
//   }
//   console.log(i);
// }

//====================================================

//Arrays

// it is object Data Type

// Collection of data, zero items, multiple, different data types together
// Indexing of Arrays starts witth zero
// Constructing Arrays;

//1. Array Literals: [.........]

// const myFirstArr = ["h", "e", "l", "l", "o"];

//2. new keyword

// const hoppiesArr = new Array("cycling", "reading", "swimming");
// console.log(myFirstArr);
// console.log(hoppiesArr);

// //Types of elements arr can hold:

// //Empty Arr

// const EmptyArr = [];
// console.log(EmptyArr);

// // Arr of Numbers

// const countrArr = [1, 2, 3, 4, 5, 6];
// console.log(countrArr);

// //Arr with mixed data types

// const mixedArr = [
//   "exercies",
//   23,
//   true,
//   function greet() {
//     console.log("hello World");
//   },
// ];
// console.log(mixedArr);

// // Nested Arrays

// const nestedArrExample = [
//   "walk",
//   58,
//   [
//     "eat",
//     true,
//     (24)[
//       ("read",
//       function great() {
//         console.log("hello world");
//       })
//     ],
//   ],
// ];
// console.log(nestedArrExample);

// Arrow Functions

// const itemsListed =() => {};

//Array Methods

// 1. arrName.map()
// const arrNum = [1, 2, 3, 4, 5, 6];
// const resultArr = arrNum.map((eachElement) => eachElement + 10);
// // resultArr=[2,4,6]

// console.group(arrNum);
// console.log(resultArr);

//Filter Method
//will create a new Arr
//with only those elements that passes the condition

// const arrNum = [1, 2, 3, 4, 5, 6];
//arrName.filter()
//?????

//Sort

// const arrNum = [10, 2, 34, 46, 5, 60];
// console.log(arrNum);

// const asscendingArr = arrNum.sort((a, b) => b - a);
// console.log(asscendingArr);

// const descendingArr = arrNum.sort((a, b) => (a < b ? -1 : 1));
// console.log(descendingArr);

// const arrNum = [1, 2, 3, 4, 5, 6];
// console.log(arrNum);

// arrNum.forEach((Element) => console.log(Element * 2));
// const newArr = arrNum.map((Element) => Element * 2);
// console.log(newArr);

//====================================================

// Five ocean values

// In preimitive

// const ocean1 = "Pacific";
// const ocean2 = "Atlantic";
// const ocean3 = "Inidan";
// const ocean4 = "Antractic";
// const ocean5 = "Antartic";

// //in arrays
// let oceans = ["Pacific", "Altantic", "Indian", "Arctic", "Ntrartic"];

// console.log(oceans);

// console.log(oceans[3]);

//=============================

// let oceans = ["Pacific", "Altantic", "Indian", "Arctic", "Ntrartic"];
// let aquaticlife = ["Fish", "Turtles", "Sharks", "Octopus", "Snakes"];

// //Conactination of Arrays

// //arr1.concat(arr2);

// console.log(oceans.concat(aquaticlife));

// let oceanandaquaticlife = oceans.concat(aquaticlife);

// console.log(oceans);
// console.log(aquaticlife);
// console.log(oceanandaquaticlife);

//arr.every() Method;
//????????

//reduce Method

// const arrNumeric = [10, 20, 30, 40, 50];
// const result = arrNumeric.reduce((total, current) => total + current);

// console.log(result);

// total = 0;
// current = 10;

//  total = 10
//  current = 20

//  total =  30
//  current = 30

//  total = 60
// current = 40

// total = 100
// current = 50

// total = 150

// arrNumeric = [10, 20, 30, , 45, 23, 876, 34, 23];
// console.log(arrNumeric.find((num) => num > 20));

//Push & pop
//??

//unshift & shift
//??

// Rest Parmeter with Objects

// let loginObj = {
//   id: 1,
//   Name: "John",
//   isLoggedIn: false,
// };

// const { isLoggedIn, ...restValues } = loginObj;
// console.log(isLoggedIn);
// console.log(restValues);

//=========================================March 20, 2022

// DOM (Document Object Model)
// DOM Manipulation
// When we suse JS to add, remove, or modify element on a website is called DOM Manipulation.

// Node and Element

// Veriouse Types of Nodes:
// Element Node: p, div, ul
// Text Node: the text inside the p tag

// Comment Node: ! -- --

// Node: anything on the DOM Tree Structure
// Element: Specifically Eleement Node.

// How to access Element in JS

// Selecting Elements
// document.getElementByID ("idValue");
// let paraInfo = doucment.getElementID("paraOne");
// console.log(paraInfo);

// JavaScript program to find the area of a triangle

//getElementByName

let ratingList = document.getElementsByName("serviceRating");
console.log(ratingList);

//getElementsByClassName

let element = document.getElementsByClassName("listItem");
console.log(element);

//getElementsByTagName()

let para = document.getElementsByTagName("p");
console.log(para);

//querySelector in DOM?
//EventHadlers?
