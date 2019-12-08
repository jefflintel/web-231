/*
============================================
; Title:  lintel-exercise-2.3.js
; Author: Professor Krasso
; Date:   2 December  2019
; Modified By: Jeff Lintel
; Description: Displays data using function
properties
;===========================================
*/


const header = require('./lintel-header.js');

console.log(header.display("Jeff", "Lintel", "Exercise 2.3"));

//function to return only a function property

function myName () {
  return myName.jeff;
}

myName.jeff = "Jeff Lintel";

console.log("\nHello " + myName() + "!");
