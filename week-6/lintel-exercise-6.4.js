/*
============================================
; Title:  lintel-exercise-6.4.js
; Author: Jeff Lintel
; Date:   13 January 2020
; Description: Demonstrate nested objects
;===========================================
*/

//header
const header = require('../lintel-header.js');

console.log(header.display("Jeff", "Lintel", "Exercise 6.4"));

//object with nested object
var ticket = {
  id: 4563,
  name: "Financial Services",
  dateCreated: new Date().toLocaleDateString("en-US"),
  priority: "High",
  //nested object
  person: {
    id: 12478,
    firstName: "Randy",
    lastName: "Randallman",
    jobTitle: "Lead Developer"
  }
};

//output
console.log(`Ticket ${ticket.id} was created on ${ticket.dateCreated} and assigned to employee ${ticket.person.firstName} ${ticket.person.lastName} (${ticket.person.jobTitle}).`);
