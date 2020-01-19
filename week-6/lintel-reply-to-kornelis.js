/*
============================================
; Title: Discussion 6.1
; Author: Izabella Kornelis
; Date: 14 January 2020
; Modified by: Jeff Lintel
; Description: A broken JavaScript program using object properties with at least (2) errors.
;===========================================
*/

//header
const header = require('../lintel-header.js');

console.log(header.display("Jeff", "Lintel", "Exercise 5.3"));

// start program

// defines the pet object
var pet = {
  animal: "cat",
  breed: "Maine Coon",
  color: "orange",
  age: "2",
  name: {
    firstName: "Billy",
    lastName: "Catlin",
  }
};

var oldPet = {
  animal: "cat",
  breed: "American Shorthair",
  color: "black",
  age: "10",
  name: {
    firstName: "Cheaka",
    lastName: "Choo",
  }
}

// Output
// expected output "Billy is a orange Maine Coon who is 2."
console.log (pet.name.firstName + " is a " + pet.color + " " + pet.breed + " who is " + pet.age + ".") //changed pet.firstName to pet.name.firstName. Added a space between pet color and breed.

// expected output "Cheaka is a black American Shorthair who is 10."
console.log (oldPet.name.firstName + " is a " + oldPet.color + " " + oldPet.breed + " who is " + oldPet.age + ".") //changed all instances of pet to oldPet. Updated object reference. Added a space between pet color and breed.

// end program
