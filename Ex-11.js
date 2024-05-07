"use strict";
/*11. Names:
Store the names of a few of your friends in an array called names. Print each person’s name by
accessing each element in the list, one at a time.*/
let friendNames = ['Sajida', 'Tayyaba', 'Nida', 'Ishrat'];
console.log(friendNames[0]);
console.log(friendNames[1]);
console.log(friendNames[2]);
console.log(friendNames[3]);
//Another method.
let friend_Names = ['Sajida', 'Tayyaba', 'Nida', 'Ishrat'];
{
    for (let i = 0; i < friend_Names.length; i++) {
        console.log(friend_Names[i]);
    }
}
