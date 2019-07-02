/*
============================================
; Title:  workman-4.4.js
; Author: Jarred Workman 
; Date:   23 June 2019
; Description: Using a map to store key value
; pairs and log the output
;===========================================
*/

//Displaying header
const header = require("../week-2/workman-header");
console.log(header.display("Jarred", "Workman", "Exercise 5.1 - Discussion"));

//Initialize the map
let animals = new Map(key, value);

//Set key values
animals.set('dog', 'woof');
animals.set('cat', 'meow');
animals.set('cow', 'moo');

//Log output
animals.forEach(function() {
    console.log(map.key, map.value);
});

/* Expected Output
'The dog goes woof'
'The cat goes meow'
'The cow goes moo'
*/