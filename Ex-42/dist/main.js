"use strict";
// 42. Great Magicians:  
// Start with a copy of your program from Exercise 41. Write a function called make_great() that 
// modifies the array of magicians by adding the phrase the Great to each magician’s name. Call 
// show_magicians() to see that the list has actually been modified.
let magicians = ['Gandalf', 'Merlin', 'Dumbledoer', 'Harry Potter'];
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
let great_magicians = make_great(magicians);
show_magicians(great_magicians);
