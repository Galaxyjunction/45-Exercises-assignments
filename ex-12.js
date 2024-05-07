"use strict";
/*12. Greetings:
Start with the array you used in Exercise 11, but instead of just printing each person’s name,
print a message to them. The text of each message should be the same, but each message should be
personalized with the person’s name.*/
let frnd = ['Sajida', 'Tayyaba', 'Nida', 'Ishrat'];
const message_f = 'Hello, hope you are doing good: ';
for (let i = 0; i < frnd.length; i++) {
    console.log(message_f + frnd[i]);
}
