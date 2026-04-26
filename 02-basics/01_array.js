// ===================== ARRAY BASICS =====================

// Number array
const num = [1, 2, 3, 4, 5];

// String array
const myHeros = ["IronMan", "Thor", "CaptainAmerica"];

// Mixed data types array (number, boolean, string)
const num2 = [1, 2, true, "Pritam"];

// Display selected values in table format
console.table([num[1], myHeros[1], num2[2]]);

// Another way to create an array using constructor
const myArr = new Array(1, 2, 3, 4);



// ===================== ARRAY METHODS =====================

// Add elements at the end of the array
myArr.push(6);
myArr.push(7);

console.log(myArr); // Print full array

// Remove last element
myArr.pop();
console.log(myArr);

// Add element at the beginning
myArr.unshift(9);
console.log(myArr);

// Remove first element
myArr.shift();
console.log(myArr);

// Check if element exists (returns true/false)
console.log(myArr.includes(9));

// Get index of element (returns -1 if not found)
console.log(myArr.indexOf(9));

console.log(myArr);

// Arrays are objects in JavaScript
console.log(typeof myArr); // object



// ===================== JOIN METHOD =====================

// Convert array to string (comma separated)
const newArr = myArr.join();

console.log(newArr);
console.log(typeof newArr); // string



// ===================== SLICE vs SPLICE =====================

console.log("A", myArr);

// ----------- SLICE -----------
// Returns a portion of array without modifying original array
// Syntax: slice(start, end) → end is NOT included
const myn1 = myArr.slice(1, 3);

console.log("After slice:", myn1);
console.log("B", myArr); // Original array remains unchanged


// ----------- SPLICE -----------
// Removes elements from original array and returns them
// Syntax: splice(start, count)
const myn2 = myArr.splice(1, 3);

console.log("After splice:", myn2);
console.log("C", myArr); // Original array is modified



// ===================== FINAL NOTES =====================

// slice → does NOT change original array
// splice → changes original array

// slice(start, end) → end not included
// splice(start, count) → removes 'count' elements
