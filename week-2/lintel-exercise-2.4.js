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

const header = require('../lintel-header.js');

console.log(header.display("Jeff", "Lintel", "Exercise 2.4"));

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
console.log("Hello my name is " + fullName("Jeff", "Lintel")+ "!");

//call dateWriter and display date
var year = 2019;
var month = 11;
var day = 4;
var number = 33.567;
var numOfFixedPositions = 1;
console.log("\nToday's date is " + dateWriter(year, month, day) + " and the current temperature is "+ formatNumber(number, numOfFixedPositions) +" degrees.");

//call convertToInt and display integer value
var age = "39";
var savings ="750000";
console.log("I am " + convertToInt(age) + " years old and my savings account goal is " + convertToFloat(savings) + " dollars.");
