/*16. More Guests:  
You just found a bigger dinner table, so now more space is available. Think of three more guests 
to invite to dinner. 
• Start with your program from Exercise 15. Add a print statement to the end of your program informing 
people that you found a bigger dinner table. 
• Add one new guest to the beginning of your array. 
• Add one new guest to the middle of your array. 
• Use append() to add one new guest to the end of your list. 
• Print a new set of invitation messages, one for each person in your list.*/

//SOLUTION
let guest_list: string[] = ["Kiran", "Moon", "Ayesha"];

//for(let i=0; i<guest_list.length; i++){

//console.log('Dear Sister.' +guest_list[i] + ', \n\nIts a pleasure to invite you to invite you on a get together dinner.\n\nThankyou.\n\n')
//}

let absent_guest: string = "Kiran";

let newGuest: string = "Yusra";

guest_list[0] = newGuest;

for (let i = 0; i < guest_list.length; i++) {
  console.log(
    "Dear Sister." +
      guest_list[i] +
      ", \n\nIts a pleasure to invite you to invite you on a get together dinner.\n\n Thankyou. \n\n"
  );
}

console.log(`Sister. ${absent_guest} is not coming to the dinner.`);
console.log("Good News, We have big table so we aew inviting 3 more Guests.");

guest_list.unshift("Jabeen");
guest_list.splice(2, 0, "Huda");
guest_list.push("Hafsa");

for (let i = 0; i < guest_list.length; i++) {
  console.log(
    "Dear Sister." +
      guest_list[i] +
      ", \n\nIts a pleasure to invite you to invite you on a get together dinner.\n\n Thankyou. \n\n"
  );
}
