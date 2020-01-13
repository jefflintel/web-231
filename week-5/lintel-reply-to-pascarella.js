/*
==================================================================
; Title: Exercise 5.4 - Advanced Arrays
; Author: Pascal Pascarella
; Date: 02 January 2020
; Modified by: Jeff Lintel
; Description: This is a program that maps over the array to
; capitalize 3 restaurants.
 	==================================================================
 	*/

 //header
const header = require('../lintel-header.js');

console.log(header.display("Jeff", "Lintel", "Exercise 5.1"));

 	// Start Program

 	// Declare Variables

 	var restaurants = ["mcdonald's", "chick-fil-a", "wendy's"];
 	var restFix = restaurants.map(function(item) { return item.toUpperCase(); });

 	// Output
   console.log("***Displaying items in the restFix array");
   console.log(restFix); // Prints Mcdonald's, Chick-fil-a, Wendys JL - changed restaurants.map to restFix
   console.log("***Displaying exact desired output");
   console.log(`${restFix[0]}, ${restFix[1]}, ${restFix[2]}`);
