/*20. Think of something you could store in an array. For example, you could make a list of mountains, 
rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list 
containing these items. */

//Making an array for beautiful cities of the world.

let beautifulCities: string[] = ["Paris", "Cape Town", "Venice", "Baracelona", "Rome", "Istanbul"];

//Print the message for list
console.log("List of beautiful cities of the world:");

//Print the value of array in the form of list
beautifulCities.forEach(city => console.log(city));
