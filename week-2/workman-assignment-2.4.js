/*
============================================
; Title:  workman-assignment-2.4.js
; Author: Jarred Workman 
; Date:   10 June 2019
; Description: Uses functions to create
; a full name description that is logged to the
; console in Vanilla JS
;===========================================
*/


//Declaring all functions
function full_name(firstName, lastName) {
  return firstName + ' ' + lastName;
}

function date_writer(year, month, day) {
  return new Date(year, month, day);
}

function format_number(number, fixedPosition) {
    return number.toPrecision(fixedPosition);
}

function convert_to_int(string) {
  return parseInt(string);
}

function convert_to_float(string) {
  return parseFloat(string);
}

//Declare the header
const header = require('./workman-header');

//Logging all output
console.log(header.display('Jarred', 'Workman', 'Assignment 2.4'));

console.log('Hello my name is ' + full_name('Jarred', 'Workman') + '\n');

console.log(`Today's date is ` + date_writer(2019, 6, 10) + ` and the current temperature is ` + format_number(81, 3) + ` degrees.` + '\n');

console.log('I am ' + convert_to_int('23') + ' years old and my savings account goal is ' + convert_to_float('1000') + ' dollars.')