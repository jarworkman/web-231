/*
============================================
; Title:  workman-7.2.js
; Author: Jarred Workman 
; Date:   15 July 2019
; Description: Show how to create an object
; through the use of a constructor
;===========================================
*/

//Displaying header
const header = require("../week-2/workman-header");
console.log(
  header.display("Jarred", "Workman", "Exercise 7.2 - Constructor Functions")
);

//Define employee constructor
function Employee(id, firstName, lastName, title) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
}

//Instantiate employees
let employees = [
  new Employee(1, "Bob", "Hansen", "Account Manager"),
  new Employee(2, "Sarah", "Langley", "Accounts Payable"),
  new Employee(3, "Lenny", "Jackson", "Software Developer"),
  new Employee(4, "Jack", "Johnson", "Customer Service Representative"),
  new Employee(5, "Don", "Jensen", "Human Resource Generalist")
];

//Log employee properties
employees.forEach(function(employee) {
  console.log(
    "First Name: " +
      employee.firstName +
      "\nLast Name: " +
      employee.lastName +
      "\nRole: " +
      employee.title +
      "\nId: " +
      employee.id
  );
});
