/*
============================================
; Title:  workman-6.2.js
; Author: Jarred Workman 
; Date:   6 July 2019
; Description: Show the use of the try catch
; block to handle exceptions
;===========================================
*/

//Displaying header
const header = require("../week-2/workman-header");
console.log(header.display("Jarred", "Workman", "Exercise 6.2 - Exception Handling"));


try {
    let x = null;
    
    console.log(x.toLocaleString());
} catch (err) {
    console.log('Caught ya, ' + err)
} finally {
    console.log(`Here's the finally block`);
}