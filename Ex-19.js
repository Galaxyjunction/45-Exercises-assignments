"use strict";
/*19. Dinner Guests:
Working with one of the programs from Exercises 14 through 18, print a message indicating
the number of people you are inviting to dinner. */
let guestList = [
    "Kiran",
    "Iqra",
    "Ayesha"
];
// Loop for each to print invitations
/*guestsList.forEach((guestName) =>
{
console.log(`Dear ${guestName}, you are invited for dinner, please join us.`)
});*/
let lengthGuest = guestList.length;
console.log(`We are inviting total ${lengthGuest} guests.`);
