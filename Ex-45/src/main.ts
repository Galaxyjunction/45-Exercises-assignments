// 45. Cars:  
// Write a function that stores information about a car in an Object. The function should always 
// receive a manufacturer and a model name. It should then accept an arbitrary number of keyword 
// arguments. Call the function with the required information and two other name-value pairs, such as 
// a color or an optional feature. Print the Object that’s returned to make sure all the information was 
// stored correctly.

function storeCarInfo(manufacturer : string, modelName: string, ...options: { [key : string]: any }[]):
object  {
    const carInfo = {
        manufacturer, 
        modelName,
        ...Object.assign({}, ...options)
    }
    return carInfo;
};

let answer = storeCarInfo('Toyota', 'Corolla', {Color: 'White'} , {Features: ['Navigation' , 'Power window']})
console.log(answer);;