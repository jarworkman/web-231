/*
============================================
; Title:  workman-3.3.js
; Author: Jarred Workman 
; Date:   17 June 2019
; Description: Shows the use of case statements
; instead of a traditional if/else
;===========================================
*/

//Displaying header
const header = require("../week-2/workman-header");
console.log(
  header.display("Jarred", "Workman", "Exercise 3.3 - Control Statements")
);

// variable
const choice = "C";

//case statement instead of if
switch (choice) {
  case "A":
    console.log("A");
    break;

  case "B":
    console.log("B");
    break;

  case "C":
    console.log("Winner winner, chicken dinner!");
    break;

  case "D":
    console.log("D");
    break;

  default:
    console.log("Invalid Choice");
    break;
}
