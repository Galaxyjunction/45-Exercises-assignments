/*24. More Conditional Tests:  
You don’t have to limit the number of tests you create to 10. If you want to try more 
comparisons, write more tests. Have at least one True and one False result for each of the following: 
• Tests for equality and inequality with strings 
• Tests using the lower case function 
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal 
to, and less than or equal to 
• Tests using "and" and "or" operators 
• Test whether an item is in an array 
• Test whether an item is not in an array*/

let flower = "Rose";
let ten = 10;
let twenty =20;
let flowers = ["Rose", "Tulip" , "Lotus", "Levender"];

//Test 01:

console.log("Is flower == 'Rose'? I predict True.")
console.log(flower == 'Rose')

//Test 02:

console.log("\nIs flower !== 'Rose'? I predicted False.")
console.log(flower !== 'Rose')

//Test 03:

console.log("\nIs flower == 'rose' in lower case.? I pedicted True")
console.log(flower.toLowerCase() =='rose')

//Test 04:
console.log("\nIs flower !== 'rose' in lower case.? I pedicted False.")
console.log(flower.toLowerCase() !=='rose')

//Numerical Tests:

console.log("\nIs ten == to twenty? I predict False." )
console.log(ten == twenty)

console.log("\nIs ten !== to twenty? I predict True.")
console.log(ten !== twenty)

console.log("\nIs  ten > than zero? I predict True.")
console.log(ten > 0)

console.log("\nIs twenty < ten? I predict False")
console.log(twenty < 10)

//Greater than or equal to:
console.log("\nIs ten > or = than five? I predict True." )
console.log( ten >= 5)

//Less than or equal to:
console.log("\nIs twenty < or == to ten? I predict False.");
console.log(twenty <= 10);

//Tests using 'and' & 'or' operators:

//Using Operator &&(and):
console.log("\nIs Twenty != to 10 and twenty > 10? I predict True.")
console.log(twenty !== 10 && twenty > 10 )

console.log("\nIs Twenty != to 10 and > 30 > 10? I predict False.")
console.log(twenty !== 10 && twenty > 30 )

//Using Operator || (or):
console.log("\nIs twenty > 50 or twenty == 20? I predict True.")
console.log(20 > 50 || twenty == 20)

//Tests whether Item is in array:
console.log("\nIs Lotus include is in array? I predict True.")
console.log(flowers.includes("Lotus"));

console.log("\nIs Lotus not include in array? I predict False.")
console.log(!flowers.includes("Lotus"));




