/*
============================================
; Title:  workman-3.2.js
; Author: Jarred Workman 
; Date:   17 June 2019
; Description: Pattern matching functions
; to display the use of loops and if/else
;===========================================
*/

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

let testVarOne = 'b';
let testVarTwo = 'a';
let testVarThree = 'a';
let testVarFour = '3';
let testVarFive = '5';
let testVarSix = '3';

if (testVarOne === testVarTwo) {
    logMatch(testVarOne, testVarTwo);
} else {
    logMismatch(testVarOne, testVarTwo);
}

if (testVarThree === testVarFour) {
    logMatch(testVarThree, testVarFour);
} else {
    logMismatch(testVarThree, testVarFour);
}

if (testVarFour === testVarSix) {
    logMatch(testVarFour, testVarSix);
} else {
    logMismatch(testVarFour, testVarSix);
}

if (testVarFive === testVarOne) {
    logMatch(testVarFive, testVarOne);
} else {
    logMismatch(testVarFive, testVarOne);
}