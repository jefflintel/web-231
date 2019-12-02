/*
============================================
; Title: Assignment 1.5
; Author: Jeff Lintel
; Date: 30 November 2019
; Description: This program demonstrates 
; variable types and values.
;===========================================
*/ 

//first employee variable declaration and assignment
var firstName1 = "Richard";
var lastName1 = "Sanchez";
var address1 ="123 4th Street, New Orleans, LA 24601";
var payRate1 = 60000;
var hireDate1 = new Date(1992, 3, 26);

//display first employee's information
console.log("Employee 1:");
console.log("====================");
console.log("Name: " + firstName1 +" " + lastName1);
console.log("Address: " + address1);
console.log("Salary: $" + payRate1.toFixed(1));
console.log("Date of Hire: " + hireDate1.toLocaleDateString());

//second employee variable declaration and assignment
var firstName2 = "Lando";
var lastName2 = "Calrissian";
var address2 ="34156 Cloud City, BP 12664";
var payRate2 = 80000;
var hireDate2 = new Date(1980, 4, 21);

//display second employee's information
console.log("Employee 2:");
console.log("====================");
console.log("Name: " + firstName2 +" " + lastName2);
console.log("Address: " + address2);
console.log("Salary: $" + payRate2.toFixed(1));
console.log("Date of Hire: " + hireDate2.toLocaleDateString());

//second employee variable declaration and assignment
var firstName3 = "Boba";
var lastName3 = "Fett";
var address3 ="213 Sarlacc Pit, TA 18753";
var payRate3 = 30000;
var hireDate3 = new Date(1983, 4, 25);

//display second employee's information
console.log("Employee 3:");
console.log("====================");
console.log("Name: " + firstName3 +" " + lastName3);
console.log("Address: " + address3);
console.log("Salary: $" + payRate3.toFixed(1));
console.log("Date of Hire: " + hireDate3.toLocaleDateString());