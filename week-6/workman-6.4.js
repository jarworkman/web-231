/*
============================================
; Title:  workman-6.4.js
; Author: Jarred Workman 
; Date:   6 July 2019
; Description: Show how nested objects work
; in JS and their use-case
;===========================================
*/

//Displaying header
const header = require("../week-2/workman-header");
console.log(header.display("Jarred", "Workman", "Exercise 6.4 - Nested Object Literals"));

//Initialize ticket object w/ person nested
let ticket = {
    id: 1,
    name: 'The Avengers',
    dateCreated: new Date(),
    priority: 1,
    personId: 10,

    person: {
        id: 10,
        firstName: 'Bob',
        lastName: 'Hansen',
        jobTitle: 'Software Developer'
    }
};

//Log all properties of the ticket
console.log('Ticket Id: ' + ticket.id + '\nName: ' + ticket.name + '\nCreation Date: ' 
+ ticket.dateCreated + '\nPriority: ' + ticket.priority + '\nPerson Id: ' + ticket.personId);

console.log('Person Id: ' + ticket.person.id + '\nFirst Name: ' + ticket.person.firstName + 
'\nLast Name: ' + ticket.person.lastName + '\nJob Title: ' + ticket.person.jobTitle);