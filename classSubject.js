// This script prompts the user to enter various class details and logs a summary

// Prompt the user to enter the subject
let subTitle = prompt("Enter your subject: ");

// Prompt the user to enter the class schedule
let classSched = prompt("Enter your class schedule: ");

// Prompt the user to enter the assigned classroom
let room = prompt("Enter your assigned classroom: ");

// Prompt the user to enter the class instructor
let instructor = prompt("Enter your class instructor: ");

// Prompt the user to enter the student name
let studName = prompt("Enter student name: ");

// Log the enrollment details to the console in a formatted string
console.log(`${studName} is currently enrolled in ${subTitle} with a class schedule of ${classSched} at room ${room}. The instructor for the subject is ${instructor}.`);
