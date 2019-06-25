/*
============================================
; Title:  workman-4.2.js
; Author: Jarred Workman 
; Date:   23 June 2019
; Description: Using an array to print out
; different fruit names
;===========================================
*/

//Displaying header
const header = require("../week-2/workman-header");
console.log(header.display("Jarred", "Workman", "Exercise 4.2 - Arrays"));

//declare array
let fruit = ["apple", "orange", "banana", "pear", "pineapple"];

//declare function
const getFruit = fruit => {
  for (x of fruit) {
    console.log(x);
  }
};

//call function to print fruit
getFruit(fruit);
