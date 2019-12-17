/*
============================================
; Title:  lintel-exercise-4.1.js
; Author: Jeff Lintel
; Date:   16 December 2019
; Description: Array program with 2 errors
;===========================================
*/

//header
const header = require('../lintel-header.js');

console.log(header.display("Jeff", "Lintel", "Exercise 4.1"));

//declare array
array dogs = ["Irish Setter", "Blue Heeler", "German Shepherd", "Golden Retriever", "Rhodesian Ridgeback", "Mutt"];

//iterate over array, displaying each element. Params array. Output string.
function showDogs(array) {
  for (i = 0; i < array.length; i++ ) {
    console.log(array.[i]);
  }
}

//test
showDogs(dogs);
