/*
============================================
; Title:  workman-4.3.js
; Author: Jarred Workman 
; Date:   23 June 2019
; Description: Using an array to print out
; a vehicle name based on a matching string
;===========================================
*/

//Displaying header
const header = require("../week-2/workman-header");
console.log(header.display("Jarred", "Workman", "Exercise 4.3 - Filtering"));

//declare vehicle array
let vehicles = ['Car', 'Boat', 'Plane', 'Ship', 'Helicopter'];

//declare function to match array to string
const getValue = (vehicles, matcher) => {
    for (x of vehicles) {
        if (matcher === x) {
            console.log(x);
        };
    };
};

//call function with vehicle string
getValue(vehicles, 'Plane');