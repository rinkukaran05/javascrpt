// Primitive Data Types in JavaScript
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;                 // Number
const scoreValue = 100.3;         // Number (decimal)
const isLoggedIn = false;         // Boolean
const outsideTemp = null;         // null (intentional empty value)
let userEmail;                    // undefined (not assigned yet)
const id = Symbol('123');        // Symbol (unique value)
const anotherId = Symbol('123');  // Symbol (still unique)

console.log(id === anotherId);   // false → every Symbol is always unique
console.log(typeof anotherId); // "symbol"


// Reference (Non-Primitive) Data Types
// mains 3types: Array, Objects, Functions
const heros = ["shaktiman", "naagraj", "doga"]; // Array

let myObj = {
    name: "hitesh",
    age: 22,
}; // Object

const myFunction = function () {
    console.log("Hello world");
}; // Function


// NOTE:
// Primitive types are stored by VALUE
// Non-primitive types are stored by REFERENCE
