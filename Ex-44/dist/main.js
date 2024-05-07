"use strict";
// 44. Sandwiches:  
// Write a function that accepts an array of items a person wants on a sandwich. The function 
// should have one parameter that collects as many items as the function call provides, and it should 
// print a summary of the sandwich that is being ordered. Call the function three times, using a different 
// number of arguments each time. 
function makeSandwich(...sandwichItems) {
    console.log("\nMaking a sandwich with these Items:\n");
    sandwichItems.forEach(singleItem => console.log(singleItem));
    console.log("\nEnjoy your sandwich.");
}
makeSandwich('Bread', 'Egg', 'Mayonnaise');
makeSandwich('Bread', 'Chicken', 'Salad leaf', 'Lettuce');
makeSandwich('Bread', 'Butter', 'Egg', 'Cheese');
