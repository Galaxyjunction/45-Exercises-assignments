/*26. Alien Colors #2:  
Choose a color for an alien as you did in Exercise 25, and write an if-else chain. 
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the 
alien. 
• If the alien’s color isn’t green, print a statement that the player just earned 10 points. 
• Write one version of this program that runs the if block and another that runs the else block.*/

let alien_Color = "green";

if(alien_Color === "green"){
    console.log("the player just earned 5 points for shooting the alien.")
}
else{
    console.log("the player just earned 10 points.");
}

//Another Version:
//(a)

if(alien_Color === "green"){
    console.log("I come from Mercury.");
}
else{
    console.log("I come from Jupiter");
}

//(b)

if(alien_Color === "blue"){
    console.log("I come from Saturn.");
}
else{
    console.log("I come from Jupiter");
}



