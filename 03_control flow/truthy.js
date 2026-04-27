// ======================= TRUTHY & FALSY VALUES =======================

const userEmail = []

// Even though it's empty, [] is a truthy value
if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}


// ----------------------- FALSY VALUES -----------------------
// These values behave like false in conditions:
// false, 0, -0, 0n (BigInt zero), "", null, undefined, NaN


// ----------------------- TRUTHY VALUES -----------------------
// Everything else is truthy, including:
// "0", "false", " " (space), [], {}, function(){}



// ======================= CHECK EMPTY ARRAY =======================

// Correct way to check empty array
if (userEmail.length === 0) {
    console.log("Array is empty");
}



// ======================= CHECK EMPTY OBJECT =======================

const emptyObj = {}

// Object.keys() returns an array of keys → check its length
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}



// ======================= NULLISH COALESCING OPERATOR (??) =======================

// ?? only checks for: null and undefined
// It returns the first non-null/undefined value

let val1

// val1 = 5 ?? 10          → 5
// val1 = null ?? 10       → 10
// val1 = undefined ?? 15  → 15

val1 = null ?? 10 ?? 20   // returns 10 (first valid value)

console.log(val1);



// ======================= TERNARY OPERATOR =======================

// Shortcut for if-else
// Syntax: condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 
    ? console.log("less than or equal to 80") 
    : console.log("more than 80")




// ======================= IMPORTANT NOTES =======================

// 1. [] and {} are always truthy → even if empty
// 2. To check empty array → use .length
// 3. To check empty object → use Object.keys(obj).length
// 4. ?? is safer than || when dealing with null/undefined
// 5. Ternary operator is best for short conditions only
