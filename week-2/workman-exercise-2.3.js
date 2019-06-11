/*
============================================
; Title:  workman-exercise-2.3.js
; Author: Jarred Workman 
; Date:   10 June 2019
; Description: Shows the usability of functions
; in vanilla JS
;===========================================
*/

//declare function property
myName.jarred = 'Jarred';
myName.workman = 'Workman'

//Function declaration
function myName() {
    return 'Hello ' + myName.jarred + ' ' + myName.workman;
}

//log the output
console.log(myName());

