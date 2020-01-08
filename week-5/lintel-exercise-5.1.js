/*
============================================
; Title:  lintel-exercise-5.4.js
; Author: Jeff Lintel
; Date:   8 January 2020
; Description: Display instrument name and
; skill level. There are 2 errors
;===========================================
*/

//header
const header = require('../lintel-header.js');

console.log(header.display("Jeff", "Lintel", "Exercise 5.1"));

//array holding instruments and skill levels
const instrumentArray = [
  {
    name: "Acoustic Guitar",
    type: "String",
    skillLevel: 4,
  },

  [
    name: "Xylophone",
    type: "Percussion",
    skillLevel: 2,
  ],

  {
    name: "Trumpet",
    type: "Brass",
    skillLevel: 5,
  },

  {
    name: "Clarinet",
    type: "Woodwind",
    skillLevel: 5,
  },

  {
    name: "Tuba",
    type: "Brass",
    skillLevel: 1,
  },
];

//output
console.log("***Instrument List***");
instrumentArray.forEach((name) => {
  console.log(`${instrument.name} - Skill Level: ${instrument.skillLevel}`);
})
