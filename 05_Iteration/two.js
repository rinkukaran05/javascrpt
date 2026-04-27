// ======================= FOR...OF LOOP =======================

// Definition:
// "for...of" is used to iterate over iterable values
// (like arrays, strings, maps, sets)


// ----------------------- ARRAY -----------------------

const arr = [1, 2, 3, 4, 5]

// Iterates over values directly
for (const value of arr) {
    console.log(value);
}



// ----------------------- STRING -----------------------

const greeting = "hello world"

// Iterates over each character (including spaces)
for (const char of greeting) {
    console.log(char);
}



// ======================= MAP =======================

const map = new Map()

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")

console.log(map);


// Map is iterable → returns [key, value] pairs

// Destructuring key and value
for (const [key, value] of map) {
    console.log(key, ":-", value);
}


// Only keys
for (const [key] of map) {
    console.log(key);
}



// ======================= OBJECT (IMPORTANT) =======================

const obj = {
    game1: "ludo",
    game2: "snake_game",
    game3: "FF"
}


//  ERROR: Objects are NOT iterable with for...of
/*
for (const [key, value] of obj) {
    console.log(key, ":-", value);
}
*/


//  Correct way → use Object methods

// Using Object.entries() → gives [key, value]
for (const [key, value] of Object.entries(obj)) {
    console.log(key, ":-", value);
}


// Using Object.keys()
for (const key of Object.keys(obj)) {
    console.log(key);
}


// Using Object.values()
for (const value of Object.values(obj)) {
    console.log(value);
}



// ======================= IMPORTANT NOTES =======================

// 1. for...of works with ITERABLES:
//     Array
//     String
//     Map
//     Set

// 2. Objects are NOT iterable by default
//    → use Object.keys(), Object.values(), Object.entries()

// 3. Map maintains insertion order (unlike objects)

// 4. Destructuring [key, value] is very useful with Map and entries()
