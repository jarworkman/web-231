/*
============================================
; Title:  workman-4.4.js
; Author: Jarred Workman 
; Date:   23 June 2019
; Description: Using arrays to filter for
; a certain value and display the results
; as well as demonstrating sorting
;===========================================
*/

//Displaying header
const header = require("../week-2/workman-header");
console.log(header.display("Jarred", "Workman", "Exercise 4.4 - Predicates"));

//declare arrays
let cars = ['Lexus', 'Chrysler', 'Jeep', 'Porsche', 'Mercedes'];

//declare function to loop arrays
const loopArray = (array) => {
    for (x of array) {
        console.log(x);
    };
    console.log('\n')
};

//loops and display sorted and unsorted
loopArray(cars);
cars.sort();
loopArray(cars);

//declare filter
const getValue = (x) => {
        return x === 'Lexus';
};

//call filter function
console.log(cars.filter(getValue));