/*
============================================
; Title:  workman-3.1.js
; Author: Jarred Workman 
; Date:   10 June 2019
; Description: Shows the process of looping
; with 2 errors to be corrected
;===========================================
*/

//Displaying header
const header = require("../week-2/librandi-header.js");
console.log(
  header.display("Jarred", "Workman", "Discussion 3.1 - Control Statements")
);

/* Expected output
; You're on loop number 1
; You're on loop number 2
; You're on loop number 3
*/

// declaring condition
let condition = 5;

//initiate for loop
for (i = 0; i < condition; i++) {
  console.log("You're on loop number " + i);
}
