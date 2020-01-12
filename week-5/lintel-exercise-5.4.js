/*
============================================
; Title:  lintel-exercise-5.4.js
; Author: Jeff Lintel
; Date:   6 January 2020
; Description: Demonstrate object collections
;===========================================
*/

//header
const header = require('../lintel-header.js');

console.log(header.display("Jeff", "Lintel", "Exercise 5.4"));

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

//return a template with composer rating and last name
let composerRating = composerArray.map((composer) => {
  return `Rating: ${composer.rating}
Composer: ${composer.lastName}
`
});

//return a template with genre and last name
let composerGenre = composerArray.map((composer) => {
  return `Genre: ${composer.genre}
Composer: ${composer.lastName}
`
});

//output
console.log("-- COMPOSERS BY RATING --");
composerRating.forEach((composer)=> {
  console.log(composer)
});

console.log("-- COMPOSERS BY GENRE --");
composerGenre.forEach((composer) => {
  console.log(composer)
});
