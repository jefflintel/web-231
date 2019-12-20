/*
============================================
; Title: Discussion 4.1
; Author: Izabella Kornelis
; Date: 20 December 2019
; Modified by: Jeff Lintel
; Description: A broken JavaScript program using an array with at least two (2) errors.
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../lintel-header.js')

// Call the console.log() function and output a well-formatted header
console.log(header.display("Jeff", "Lintel", "Assignment 4.1"));
// new line
console.log('\n')

// start program

// variable declaration
var name = ("Kornelis", "Izabella", "Patricia"); //changed () to []

// function
function add(){
  var a = name[0].length; // length of Kornelis changed 1 to 0
  var b = name[1].length; // length of Izabella changed 2 to 1
  var c = name[2].length; // length of Patricia changed 3 to 2
  var amountOfChara = a + b + c; // total characters in first + middle + last names
  return amountOfChara;
}

// output
console.log("My name is " ,name[1] ,name[2] ,name[0] + " I have " + add() + " letters in my name."); // My name is Izabella Patricia Kornelis, I have 24 letters in my name. changed 1 to 0, 2 to 1, 3 to 2

// end program
