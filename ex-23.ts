/*23. Conditional Tests:  
Write a series of conditional tests. Print a statement describing each test and your prediction 
for the results of each test. Your code should look something like this: 
let car = 'subaru'; 
console.log("Is car == 'subaru'? I predict True.") 
console.log(car == 'subaru') 
• Look closely at your results, and make sure you understand why each line evaluates to True or False. 
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/


let city = 'Karachi';

//Test 01:

console.log("Is city == 'Karachi'? I predict True.")
console.log( city == 'Karachi')

//Test 02:

console.log("Is city === 'Karachi'? I predict True.")
console.log(city === 'Karachi')

//Test 03:

console.log("Is city !== 'Lahore'? I predict True." )
console.log(city !== 'Lahore')

//Test 04:

console.log("Is city !== 'Islambad'? I perdict True.")
console.log(city !== 'Islamabad')

//Test 05:

console.log("Is city.upper case == 'KARACHI'? I predict True.");
console.log(city.toUpperCase() == 'KARACHI')

//Test 06:
console.log("Is city == 'KARACHI'? I predicted False.")
console.log(city == 'KARACHI')


//Test 07:
console.log("Is city === 'KARACHI'? I predicted False.")
console.log(city === 'KARACHI')

//Test 08:
console.log("Is city == 'Province'? I predicted False.")
console.log(city == 'Province')

//Test 09:
console.log("Is city == 'Country'? I predicted False.")
console.log(city == 'Country')

//Test 10:
console.log("Is city == 'Continent'? I predicted False.")
console.log(city == 'Continent')
