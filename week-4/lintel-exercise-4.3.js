/*
============================================
; Title:  lintel-exercise-4.3.js
; Author: Jeff Lintel
; Date:   16 December 2019
; Description: Demonstrate iterating over
; an array and matching an array element
;===========================================
*/

//header
const header = require('../lintel-header.js');

console.log(header.display("Jeff", "Lintel", "Exercise 4.2"));

//array of 5 vehicles
const vehicles = ["car", "truck", "bike", "boat", "plane"];

//function
function getValue(array, string) {
  for(i = 0; i < array.length; i++){
    if(string == array[i]){
      console.log("-- SELECTED VALUE --");
      console.log(array[i] + "\n");
    }
  }
}

//iterate over array, displaying each element. Params array. Output string.
function getVehicles(array) {
  for (i = 0; i < array.length; i++ ) {
    console.log(array[i]);
  }
  console.log("\n");
}

//tests
console.log("-- DISPLAYING ARRAY ITEMS --");
getVehicles(vehicles);
getValue(vehicles, "bike");
getValue(vehicles, "plane");
//doesn't match any element in the array. Should not display anything.
getValue(vehicles, "trolley");
