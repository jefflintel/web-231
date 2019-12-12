/*
============================================
; Title:  lintel-exercise-3.3.js
; Author: Professor Krasso
; Date:   10 December 2019
; Modified by: Jeff Lintel
; Description: Use switch statement to replace
; several if/else statements
;===========================================
*/

//header
const header = require('../lintel-header.js');

console.log(header.display("Jeff", "Lintel", "Exercise 3.3"));

//variable
let eventKeyCode = 13;

//switch statement
switch(eventKeyCode) {
  case eventKeyCode = 13:
    console.log('The enter key was pressed.');
    break;
  case eventKeyCode = 16:
    console.log('The shift key was pressed.');
    break;
  case eventKeyCode = 32:
    console.log('The spacebar key was pressed.');
    break;
  case eventKeyCode = 8:
    console.log('The backspace / delete key was pressed.');
    break;
  default:
    console.log('Unrecognized key.')
};
