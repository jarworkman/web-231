/*
============================================
; Title:  workman-6.1.js
; Author: Jarred Workman 
; Date: 5 June 2019
; Description: Program with 2 errors, shows
; the use of objects in js
;===========================================
*/

//Displaying header
const header = require("../week-2/workman-header");
console.log(header.display("Jarred", "Workman", "Exercise 5.1 - Discussion"));

let person = {
    firstName: 'John',
    lastName: 'Henry',
    age
};

console.log('My name is ' + person.firstName + ' ' + person.lastName + ` I'm ` + person.age + ' years old.');


/* Expected output
My name is John Jacob and I'm 25 years old
*/