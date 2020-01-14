/*
============================================
; Title:  lintel-exercise-6.2.js
; Author: Jeff Lintel
; Date:   13 January 2020
; Description: Demonstrate exception handling
;===========================================
*/

//header
const header = require('../lintel-header.js');

console.log(header.display("Jeff", "Lintel", "Exercise 6.2"));

try {
  //variables
  var numberArray = [-1, 0, 1, 3, -15, 4];
  var sixthElement = numberArray[6];

  //if statement
  if (sixthElement == undefined) throw RangeError('Index greater than length of array!');

  //output
  console.log(sixthElement);
} catch (e) {
  console.log(`Catch clause: ${e}`);
} finally {
  console.log('Finally clause reached...');
}
