/*
============================================
; Title:  workman-5.3.js
; Author: Jarred Workman 
; Date:   1 July 2019
; Description: Using built in foreach 
; function to loop through an array of objects
;===========================================
*/

//Displaying header
const header = require("../week-2/workman-header");
console.log(header.display("Jarred", "Workman", "Exercise 5.3 - Object Collections"));

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

//Looping through array to print composer props
composers.forEach(function(composers) {
    console.log(composers.firstName + ' ' + composers.lastName + ' ' + composers.genre + ' ' + composers.rating)
});