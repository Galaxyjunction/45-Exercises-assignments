//21. They think of something you could store in a TypeScript Object. Write a program that creates 
//Objects containing these items.

interface User {
    name: string;
    email: string;
    age: number;
}

let User = {
    name : "Ayesha",
    email : "xyz@hotmail.com",
    age : 30 
};
console.log(User);