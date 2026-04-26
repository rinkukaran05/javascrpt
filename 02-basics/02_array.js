// ===================== MERGING ARRAYS =====================

const marvel_heros = ["Thor", "IronMan", "SpiderMan"];
const dc_heros = ["SuperMan", "Flash", "Batman"];

// push() → adds dc_heros as a single element (nested array)
marvel_heros.push(dc_heros);

console.log(marvel_heros);
// Output: ["Thor", "IronMan", "SpiderMan", ["SuperMan", "Flash", "Batman"]]

// Accessing nested array value
console.log(marvel_heros[3][1]); // "Flash"


// ===================== CONCAT METHOD =====================

// concat() → merges arrays and returns a new array
const allHeros = marvel_heros.concat(dc_heros);

console.log(allHeros);


// ===================== SPREAD OPERATOR =====================

// Spread (...) → best and modern way to merge arrays
// Can merge multiple arrays easily
const new_all_heros = [...marvel_heros, ...dc_heros];

console.log(new_all_heros);


// ===================== NESTED ARRAYS =====================

const another_array = [1, 2, 3, [4, 5], 6, [7, [4, 5]]];

// Access deeply nested value
console.log(another_array[5][1][0]); // 4


// ===================== FLAT METHOD =====================

// flat() → flattens nested arrays into a single array
// Infinity → flattens all levels
const real_another_array = another_array.flat(Infinity);

console.log(real_another_array);


// ===================== ARRAY UTILITIES =====================

// Check if value is an array
console.log(Array.isArray("Rinku")); // false

// Convert iterable (like string) into array
console.log(Array.from("Rinku")); // ["R", "i", "n", "k", "u"]

// Convert object → returns empty array (needs mapping logic)
console.log(Array.from({ name: "Rinku" })); // []


// ===================== ARRAY.OF =====================

// Creates array from given values
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // [100, 200, 300]
