/*
============================================
; Title:  lintel-exercise-5.2.js
; Author: Jeff Lintel
; Date:   6 January 2020
; Description: Demonstrate the forEach method
; displaying elements of an array
;===========================================
*/

//header
const header = require('../lintel-header.js');

console.log(header.display("Jeff", "Lintel", "Exercise 5.2"));

//create array holding 5 food types
const foodArray = ["Sushi", "Steak", "Pizza", "Tacos", "Biryani"];

//output
foodArray.forEach((food) => {
  console.log(food)
});
