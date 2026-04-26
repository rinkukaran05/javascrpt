const score = 400.9445
console.log(score);

console.log(score.toString());   
// Converts number to string

console.log(score.toFixed(2));  
// Fixes decimal places to 2 digits (rounds the value)

let otherNumber = 169.2884
console.log(otherNumber.toPrecision(4));  
// Formats number to 4 significant digits (rounding included)

const value = 100000000
console.log(value.toLocaleString('en-IN'));  
// Formats number in Indian number system (e.g., 1,00,00,000)


// ************************ MATH OBJECT ************************

console.log(Math.abs(-4));   
// Returns the absolute (positive) value of a number

console.log(Math.round(4.5)); 
// Rounds to the nearest integer

console.log(Math.ceil(4.1));   
// Rounds up to the next largest integer

console.log(Math.floor(4.9));  
// Rounds down to the previous integer

console.log(Math.max(2,5,7,8,9));  
// Returns the largest number from the given values

console.log(Math.min(2,5,7,8,9));  
// Returns the smallest number from the given values


console.log(Math.random());    
// Generates a random number between 0 (inclusive) and 1 (exclusive)

console.log((Math.random()*10) + 1);    
// Generates a random number between 1 and 10 (decimal included)

console.log(Math.floor((Math.random()*10) + 1));  
// Generates a random integer between 1 and 10


const min = 10
const max = 20

console.log(
  Math.floor(Math.random() * (max - min + 1) + min)
);  
// Generates a random integer between min (10) and max (20), inclusive
