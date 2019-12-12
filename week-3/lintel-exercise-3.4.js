/*
============================================
; Title:  lintel-exercise-3.4.js
; Author: Professor Krasso
; Date:   10 December 2019
; Modified by: Jeff Lintel
; Description: Use a loop to check if a
; random number matches a preset number
;===========================================
*/

//header
const header = require('../lintel-header.js');

console.log(header.display("Jeff", "Lintel", "Exercise 3.4"));

/**
 * Params: n/a
 * Response: integer value
 * Description: Returns a random integer value
 * Disclaimer: Do not remove this function as this is what you will be using to generate a random number
 */
function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)
}

//match function checking to see if 2 parameters are equal. Params firstThing, secondThing
function match(firstThing, secondThing) {
  if(firstThing === secondThing) {
    return true;
  } else {
    return false;
  }
}

//log mismatch function to display a message if parameters do not match. Params firstThing, secondThing
function logMismatch(firstThing, secondThing) {
 return(firstThing + " and " + secondThing + " do not match!");
}

//log match function to display a message if parameters match. Params firstThing, secondThing
function logMatch(firstThing, secondThing) {
  return(firstThing + " and " + secondThing + " match!");
}

var matchNumber = 6;

//display game title
console.log("-- DO THE NUMBERS MATCH GAME --");
//for loop to compare matchNumber and a random number, displaying the output.
for(i = 0; i < 10; i++) {
  var newNumber = randomNumber();
  if (match(matchNumber, newNumber) == true) {
    console.log(logMatch(matchNumber, newNumber));
  } else {
    console.log(logMismatch(matchNumber, newNumber));
  }
}
