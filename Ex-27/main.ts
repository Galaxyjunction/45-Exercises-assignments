/*27. Alien Colors #3:  
Turn your if-else chain from Exercise 5-4 into an if-else chain. 
• If the alien is green, print a message that the player earned 5 points. 
• If the alien is yellow, print a message that the player earned 10 points. 
• If the alien is red, print a message that the player earned 15 points. 
• Write three versions of this program, making sure each message is printed for the appropriate color*/

//Using "if" and "else if" statement:

//1st Version:
let alienColor = "green";

if(alienColor === "green"){
    console.log("Player shot down a green alien and earned 5 points.");
}
else if(alienColor === "yellow"){
    console.log("Player shot down a yellow alien and earned 10 points.");
}
else if(alienColor === "red"){
    console.log("Player shot down a red alien and earned 15 points.");
}

//2nd Version:
let alien_Color2 = "yellow";

if(alien_Color2 === "green"){
    console.log("Player shot down a green alien and earned 5 points.");
}
else if(alien_Color2 === "yellow"){
    console.log("layer shot down a yellow alien and earned 10 points.");
}
else if(alien_Color2 === "red"){
    console.log("Player shot down a red alien and earned 15 points.");
}

//3rd Version:
let alienColor3 = "red";

if(alienColor3 === "green"){
    console.log("Player shot down a green alien and earned 5 points.");
}
else if(alienColor3 === "yellow"){
    console.log("layer shot down a yellow alien and earned 10 points.");
}
else if(alienColor3 === "red"){
    console.log("Player shot down a red alien and earned 15 points.");
}

