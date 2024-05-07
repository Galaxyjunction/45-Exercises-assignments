
/*
Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, 
and titlecase.
*/

const full_Name: string = "kehkashan";

// lowerCase
console.log(full_Name.toLowerCase());

// uppercase
console.log(full_Name.toUpperCase());

// uppercase
let firstLetter: string = full_Name.charAt(0).toUpperCase();
let restLetters: string = full_Name.slice(1).toLowerCase();

let titlecase = firstLetter + restLetters;

console.log(titlecase);


