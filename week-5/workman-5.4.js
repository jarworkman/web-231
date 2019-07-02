/*
============================================
; Title:  workman-5.4.js
; Author: Jarred Workman 
; Date:   1 July 2019
; Description: Using built in map function
; to filter object and print output
;===========================================
*/

//Displaying header
const header = require("../week-2/workman-header");
console.log(header.display("Jarred", "Workman", "Exercise 5.4 - Filtering/Reducing Complex Data Structures"));

//Initializing array of objects
let composers = [
    {
        firstName: 'Bob',
        lastName: 'Sagget',
        genre: 'Rock',
        rating: 8
    },

    {
        firstName: 'Fred',
        lastName: 'Shelly',
        genre: 'Hip Hop',
        rating: 9
    },

    {
        firstName: 'Chad',
        lastName: 'Hansen',
        genre: 'Classical',
        rating: 5
    },

    {
        firstName: 'Randy',
        lastName: 'William',
        genre: 'Pop',
        rating: 3
    },

    {
        firstName: 'Ralph',
        lastName: 'Johnson',
        genre: 'Country',
        rating: 7
    }
];

//declare a logging function
function logIt(input) {
    input.forEach(function(input) {
        console.log(input);
    });
}

//Filter objects
let ratings = composers.map(composers => composers.rating);
let genres = composers.map(composers => composers.genre);

//Log new arrays
logIt(ratings);
console.log('\n');
logIt(genres);