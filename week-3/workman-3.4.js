/*
============================================
; Title:  workman-3.4.js
; Author: Jarred Workman 
; Date:   17 June 2019
; Description: Using a loop to generate
; random numbers and then comparing the values
;===========================================
*/

//Displaying header
const header = require("../week-2/workman-header");
console.log(
  header.display(
    "Jarred",
    "Workman",
    "Exercise 3.4 - Loops"
  )
);

//Declaring all of the functions
function match(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}

function logMismatch(a, b) {
  console.log("A and B do not match, a is " + a + " and b is " + b);
}

function logMatch(a, b) {
  console.log("A and B do match, a is " + a + " and b is " + b);
}

//declaring a number to compare to random
let number = 4;

//comparing the number with a random from 1-10 and logging the results
for (i = 0; i < 9; i++) {
  var random = Math.floor(Math.random() * 10);

  if (match(random, number)) {
    logMatch(random, number);
  } else {
    logMismatch(random, number);
  }
}
