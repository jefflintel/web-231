/*
============================================
; Title:  lintel-exercise-3.2.js
; Author: Jeff Lintel
; Date:   9 December 2019
; Description: Use control statements to
; demonstrate understanding of conditionals
;===========================================
*/

//header
const header = require('../lintel-header.js');

console.log(header.display("Jeff", "Lintel", "Exercise 3.2"));

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

//local test variables and tests
var firstNumber = 3;
var secondNumber = 6;
var firstString = "three";
var secondString = "purple";
var firstBoolean = true;
var secondBoolean = false;

if(match(firstNumber, firstNumber) == true) {
  console.log(logMatch(firstNumber, firstNumber));
} else {
  console.log(logMismatch(firstNumber, firstNumber));
};

if(match(firstNumber, secondNumber) == true) {
  console.log(logMatch(firstNumber, secondNumber));
} else {
  console.log(logMismatch(firstNumber, secondNumber));
};

if(match(firstString, secondString) == true) {
  console.log(logMatch(firstString, secondString));
} else {
  console.log(logMismatch(firstString, secondString));
};

if(match(firstBoolean, secondBoolean) == true) {
  console.log(logMatch(firstBoolean, secondBoolean));
} else {
  console.log(logMismatch(firstBoolean, secondBoolean));
};
