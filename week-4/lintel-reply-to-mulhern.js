/*
============================================
; Title: Discussion Board 4.1
; Author: Brendan Mulhern
; Date: 17 December 2019
; Modified By: Jeff Lintel
; Description: This is a program that had two
; errors in it. It's been corrected.
;===========================================
*/

//header
const header = require('../lintel-header.js');

console.log(header.display("Jeff", "Lintel", "Exercise 4.1"));

// Defines Array
var numberArray = [1, 2, 5, 7, 9]; //renamed array to numberArray. changed "1" to 1
// For Loop printing out the array
for (i = 0; i < numberArray.length; i++) {
// Prints out the array
  console.log(numberArray[i]); //changed x to i
};
