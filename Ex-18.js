"use strict";
//Think of at least five places in the world you’d like to visit.
//• Store the locations in an array. Make sure the array is not in alphabetical order.
let visitPlaces = [
    "Saudia Arabia",
    "U.A.E",
    "Turkey",
    "Jordan",
    "Austrailia",
];
console.log("Original order:", visitPlaces);
//• Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical Order:", [...visitPlaces].sort());
//• Show that your array is still in its original order by printing it.
console.log("Still in it's original order:", visitPlaces);
//• Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse alaphabetical order:", [...visitPlaces].reverse());
//• Show that your array is still in its original order by printing it again.
console.log("Still in it's original order:", visitPlaces);
//• Reverse the order of your list. Print the array to show that its order has changed.
console.log("Original Order Reversed:", visitPlaces.reverse());
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Back to it's original order:", visitPlaces.reverse());
/*• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been
changed.*/
console.log("Sorted in alphabetical order:", visitPlaces.sort());
/*• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its
order has changed.*/
console.log("Original Order reversed again:", visitPlaces.reverse());
