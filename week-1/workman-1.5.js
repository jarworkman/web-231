/*
============================================
; Title: Assignment: Discussion 1 - Values and Variables
; Author: Jarred Workman
; Date: 29 May 2019
; Modified By:
; Description: This program demonstrates the
; use of variables and JS powerful formatting
: functions.
;
;===========================================
*/ 

//Declare all variables
var firstNameOne = 'Bob';
var lastNameOne  = 'Smith';
var addressOne = '111 1st St.';
var payRateOne = 40000;
payRateOne = payRateOne.toFixed(1);
var hireDateOne = new Date(2018, 1, 1).toLocaleDateString();

var firstNameTwo = 'John';
var lastNameTwo = 'Henry';
var addressTwo = '222 2nd St.';
var payRateTwo = 30000;
payRateTwo = payRateTwo.toFixed(1);
var hireDateTwo = new Date(2019, 1, 1).toLocaleDateString();

var firstNameThree = 'Rob';
var lastNameThree = 'Hansen';
var addressThree = '333 3rd St.';
var payRateThree = 35000;
payRateThree = payRateThree.toFixed(1);
var hireDateThree = new Date(2017, 3, 10).toLocaleDateString();

//Log all of the employee records
console.log(firstNameOne + ' ' + lastNameOne + ' ' + addressOne + ' ' + payRateOne + ' ' + hireDateOne + '\n' + firstNameTwo
   + ' ' + lastNameTwo + ' ' + addressTwo + ' ' + payRateTwo + ' ' + hireDateTwo + '\n' + firstNameThree + ' ' + lastNameThree + ' ' +
    addressThree + ' ' + payRateThree + ' ' + hireDateThree);