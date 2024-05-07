"use strict";
/*15. Changing Guest List:
You just heard that one of your guests can’t make the dinner, so you need to send out a new
set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating
the name of the guest who can’t make it.*/
let GuestList = ["Kiran", "Moon", "Ayesha"];
for (let i = 0; i < GuestList.length; i++) {
    console.log("Dear Sister." +
        GuestList[i] +
        ", \n\nIts a pleasure to invite you to invite you on a get together dinner.\n\nThankyou.\n\n");
}
let AbsentGuest = "Kiran";
let NewGuest = "Yusra";
GuestList[0] = NewGuest;
for (let i = 0; i < GuestList.length; i++) {
    console.log("Dear Sister." +
        GuestList[i] +
        ", \n\nIts a pleasure to invite you to invite you on a get together dinner.\n\n Thankyou. \n\n");
}
console.log(`Sister. ${absent_guest} is not coming to the dinner.`);
