/*
============================================
; Title:  workman-5.2.js
; Author: Jarred Workman 
; Date:   1 July 2019
; Description: Using built in foreach 
; function to loop through an array
;===========================================
*/

//Displaying header
const header = require("../week-2/workman-header");
console.log(header.display("Jarred", "Workman", "Exercise 5.2 - ES5 Built-In Functions"));

//Initializing array
var foods = ['Wings', 'Pizza', 'Alfredo', 'Burger', 'Steak'];

//Looping through array to print elements
foods.forEach(function(foods) {
    console.log(foods);
});