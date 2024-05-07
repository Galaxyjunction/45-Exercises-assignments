"use strict";
/*17. Shrinking Guest List:
You just found out that your new dinner table won’t arrive in time for the dinner, and you have
space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can
invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you
pop a name from your list, print a message to that person letting them know you’re sorry you can’t
invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you
 actually have an empty list at the end of your program.*/
//SOLUTION
let guest_List = ["Kiran", "Moon", "Ayesha"];
//for(let i=0; i<guest_list.length; i++){
//console.log('Dear Sister.' +guest_list[i] + ', \n\nIts a pleasure to invite you to invite you on a get together dinner.\n\nThankyou.\n\n')
//}
let absentGuest = "Kiran";
let new_Guest = "Yusra";
guest_list[0] = new_Guest;
//for(let i=0; i<guestList.length; i++){
// console.log('Dear Sister.' + guestList[i] + ', \n\nIts a pleasure to invite you to invite you on a get together dinner.\n\n Thankyou. \n\n')
//}
console.log(`Sister. ${absentGuest} is not coming to the dinner.`);
console.log("Good News, We have big table so we aew inviting 3 more Guests.");
guest_list.unshift("Jabeen");
guest_list.splice(2, 0, "Huda");
guest_list.push("Hafsa");
for (let i = 0; i < guest_list.length; i++) {
    console.log("Dear Sister." +
        guest_list[i] +
        ", \n\nIts a pleasure to invite you on a dinner party.\n\nThankyou.\n\n");
}
console.log("Sorry, we can not arrange big table, Only two peoples will be invited");
//Using while loop to remove guests from the array until only two names remain
while (guest_list.length > 2) {
    let removeGuest = guest_list.pop();
    console.log(`Sorry Sister.${removeGuest} you are not invited for dinner.`);
}
//Sending an invitation to last two guest of the list.
console.log("Invititation to the last two guest");
guest_list.forEach(lastTwoGuest => console.log(`Luckily ${lastTwoGuest}, you are still invited to Dinner`));
// Removing last two guest from the list
guest_list.pop();
guest_list.pop();
console.log("Empty List", guest_list);
