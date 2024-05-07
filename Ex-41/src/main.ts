// 41. Magicians:  
// Make an array of magician’s names. Pass the array to a function called show_magicians(), which 
// prints the name of each magician in the array. 

 let magicians : string[] = ['Gandalf' , 'Merlin' , 'Dumbledoer' , 'Harry Potter'];

 function show_magicians(magician: string[]){
    magicians.forEach(element => {
        console.log(element)
        
    });
 }
show_magicians(magicians);