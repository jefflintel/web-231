/*
============================================
; Title:  lintel-exercise-5.3.js
; Author: Jeff Lintel
; Date:   6 January 2020
; Description: Demonstrate object collections
;===========================================
*/

//header
const header = require('../lintel-header.js');

console.log(header.display("Jeff", "Lintel", "Exercise 5.3"));

//array for composers

const composerArray = [
  {
    firstName: "Ludwig",
    lastName: "van Beethoven",
    genre: "classical",
    rating: 8
  },

  {
    firstName: "Wolfgang",
    lastName: "Mozart",
    genre: "classical",
    rating: 10
  },

  {
    firstName: "Johann",
    lastName: "Bach",
    genre: "classical",
    rating: 9
  },

  {
    firstName: "Joseph",
    lastName: "Haydn",
    genre: "classical",
    rating: 6
  },

  {
    firstName: "Franz",
    lastName: "Schubert",
    genre: "classical",
    rating: 5
  }
];

//output
console.log("-- DISPLAYING A LIST OF FAMOUS COMPOSERS --");
let index = 1;
composerArray.forEach((composer) => {
  console.log("First Name: "+ composer.firstName + ", Last Name: " + composer.lastName + ", Genre: " + composer.genre + ", Rating: " + composer.rating)
  index++
});
