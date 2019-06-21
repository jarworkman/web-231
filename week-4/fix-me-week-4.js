/*
============================================
; Title:  fix-me.js
; Author: Jarred Workman 
; Date:   20 June 2019
; Description: Demonstrates the use of arrays
: has 2 errors to be fixed
;===========================================
*/

//Displaying header
const header = require("../week-2/workman-header");
console.log(
  header.display(
    "Jarred",
    "Workman",
    "Discussion 4.1 - Arrays"
  )
);

/* Expected output
; I really love the number 3, check it out! 3
;
; 0
; 1
; 2
; 3
; 5
;
*/


//instantiate array
var number = [0,1,2,3,4,5];

//log a single value of the array
console.log('I really love the number 3, check it out! ' + number[2] + '\n');

//declare function to log
function logIt(item) {
  console.log(item);
}

//log all values of the array
number.forEach(logIt);