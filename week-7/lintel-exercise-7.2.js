/*
============================================
; Title:  lintel-exercise-6.2.js
; Author: Jeff Lintel
; Date:   20 January 2020
; Description: Demonstrate constructor functions
;===========================================
*/

//header
const header = require('../lintel-header.js');

console.log(header.display("Jeff", "Lintel", "Exercise 7.2"));

//employee object
var employee = {
  id: 126,
  firstName: "Paul",
  lastName: "McCartney",
  title: ".NET Developer"
};

//function to create employee objects. params id, firstName, lastName, title.
function Employee(id, firstName, lastName, title) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
}

//create an array with 5 employee objects

var employees = [
  new Employee(4982, "David", "Bowie", "Scrum Master"),
  new Employee(1456, "Jimi", "Hendrix", "Lead Developer"),
  new Employee(1235, "Roger", "Daltry", "Web Engineer"),
  new Employee(4645, "Frank", "Zappa", "Database Administrator"),
  new Employee(8821, "Ringo", "Starr", ".NET Developer")
];

//output
for(i =0; i < employees.length; i++) {
  console.log(`${i + 1} ${employees[i].firstName} ${employees[i].lastName} ${employees[i].title}`);
}
