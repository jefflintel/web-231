/*
============================================
; Title:  lintel-exercise-4.4.js
; Author: Jeff Lintel
; Date:   16 December 2019
; Description: Demonstrate the filter, sort,
; and forEach built in methods
;===========================================
*/

//header
const header = require('../lintel-header.js');

console.log(header.display("Jeff", "Lintel", "Exercise 4.4"));

//array of string values for states
const states = ["Alabama", "Nebraska", "Iowa", "California", "Nevada"];

//output
console.log("-- ORIGINAL ARRAY --");
for (i = 0; i < states.length; i++) {
  console.log(states[i]);
}

//new line
console.log("\n");

//sorted array
console.log("-- SORTED ARRAY --")
states.sort().forEach(state => console.log(state));

//new line
console.log("\n");

//output
console.log("-- SELECTED STATE --");
var selectedState = states.filter(getStates);
console.log(selectedState[0]);


//filter function to compare a value and array elements. Params state, filterValue. Return array boolean

function getStates(state, filterValue) {
  filterValue = "Nebraska";
   if (state === filterValue) {
   return true;
 }
}

