/*
============================================
; Title:  lintel-exercise-2.4.js
; Author: Professor Krasso
; Date:   4 December  2019
; Modified By: Jeff Lintel
; Description: Demonstrates creating functions with
; and without parameters
;===========================================
*/


//1. fullName function returning firstName + lastName. Params firstName, lastName
function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}

//2. dateWriter function returning a new date. Returns date in local date format. Params year, month, day
function dateWriter (year, month, day) {
  date = new Date(year, month, day);
  return date.toLocaleDateString();
}

//3. formatNumber to fixed position. Params number, numOfFixedPositions
function formatNumber (number, numOfFixedPositions) {
  return number.toFixed(numOfFixedPositions);
}

//4. convertToInt convert a number to an integer. I used the built in parseInt function. Params string
function convertToInt (string) {
  return parseInt(string);
}

//5. convertToFloat convert a string to a float number. I used the built in parseFloat function. Params string
function convertToFloat(string) {
  return parseFloat(string);
}

//call fullName and display full name
var firstName = "Jeff";
var lastName = "Lintel"
console.log("Full name: " + fullName("Jeff", "Lintel"));

//call dateWriter and display date
var year = 2019;
var month = 11;
var day = 4;
console.log(dateWriter(year, month, day));
console.log(date);

//call formatNumber and display formatted number
var number = 3.456;
var numOfFixedPositions = 2;
console.log(number + " formatted to " + numOfFixedPositions + " positions: " + formatNumber(number, numOfFixedPositions));

var string = "12.345"

//call convertToInt and display integer value
console.log(string + " converted to an integer: " + convertToInt(string));

//call convertToFloat and display float value
console.log(string + " converted to a float: " + convertToFloat(string));
