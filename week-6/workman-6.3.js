/*
============================================
; Title:  workman-6.3.js
; Author: Jarred Workman 
; Date:   6 July 2019
; Description: Show the use of objects
; in js
;===========================================
*/

//Displaying header
const header = require("../week-2/workman-header");
console.log(header.display("Jarred", "Workman", "Exercise 6.3 - Object Literals"));

//Initialize customer object w/ getters and setters
let customer = {
    id: 1,
    name: 'John',
    requestor: 'admin',

    getId() {
        return this.id;
    },

    setId(val) {
        this.id = val;
    },

    getName() {
        return this.name;
    },

    setName(val) {
        this.name = val;
    },

    getRequestor() {
        return this.requestor;
    },

    setRequestor(val) {
        this.requestor = val;
    }
};

//Print out the customers properties
console.log(customer.getId());
customer.setId(5);
console.log(customer.getId());
console.log(customer.getName());
console.log(customer.getRequestor());