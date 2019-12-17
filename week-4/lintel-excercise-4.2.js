/*
============================================
; Title:  lintel-exercise-4.2.js
; Author: Jeff Lintel
; Date:   16 December 2019
; Description: Demonstrate iterating over
; an array
;===========================================
*/

//header
const header = require('../lintel-header.js');

console.log(header.display("Jeff", "Lintel", "Exercise 4.2"));

//declare array
const fruits = ["apple", "banana", "cherry", "date", "fig"];

//iterate over array, displaying each element. Params array. Output string.
function getFruit(array) {
  for (i = 0; i < array.length; i++ ) {
    console.log(array[i]);
  }
}

//test
getFruit(fruits);
