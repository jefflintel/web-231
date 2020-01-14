/*
============================================
; Title:  lintel-exercise-6.3.js
; Author: Jeff Lintel
; Date:   13 January 2020
; Description: Demonstrate object get and set
;===========================================
*/

//header
const header = require('../lintel-header.js');

console.log(header.display("Jeff", "Lintel", "Exercise 6.3"));

var ticket = {
  id: 4631,
  name: "Network Team",
  requestor: "Amy Wong"
};

console.log(`id: ${ticket.id}, name: ${ticket.name}, requestor: ${ticket.requestor}`);
