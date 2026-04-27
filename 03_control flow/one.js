// ======================= IF-ELSE CONDITIONS =======================

const isUserloggedIn = true
const temperature = 41

// Basic if-else condition
if (temperature === 40) {
    console.log("Temperature is exactly 40");
} else {
    console.log("Temperature is not 40 (greater or less)");
}

console.log("Execute"); // This always runs


// Comparison Operators:
// <   -> less than
// >   -> greater than
// <=  -> less than or equal
// >=  -> greater than or equal
// ==  -> checks value only (not recommended)
// === -> checks value + type (recommended)
// !=  -> not equal (loose)
// !== -> not equal (strict)



// ======================= BLOCK SCOPE =======================

const score = 200

if (score > 100) {
    let power = "fly"   // block-scoped variable
    console.log(`User power: ${power}`);
}

//  ERROR: "power" is not defined outside the block
// Because "let" works only inside { }
// console.log(`User power: ${power}`);



// ======================= SHORT-HAND IF =======================

const balance = 1000

// Single-line if (not recommended for multiple statements)
if (balance > 500) console.log("test"), console.log("test2");

// Avoid this style in real projects → reduces readability



// ======================= IF-ELSE IF LADDER =======================

if (balance < 500) {
    console.log("less than 500");

} else if (balance < 750) {
    console.log("less than 750");

} else if (balance < 900) {
    console.log("less than 900");

} else {
    console.log("less than 1200");
}



// ======================= LOGICAL OPERATORS =======================

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true


// AND (&&) → all conditions must be true
if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy course");
}
//  This will NOT run because (2 == 3) is false


// OR (||) → at least one condition must be true
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
//  This will run because loggedInFromEmail = true



// ======================= IMPORTANT NOTES =======================

// 1. Use === instead of == (strict comparison is safer)
// 2. "let" and "const" are block-scoped → only inside {}
// 3. Avoid writing multiple statements in one line (bad practice)
// 4. && → all conditions must be true
// 5. || → at least one condition must be true
// 6. Code outside if-else always executes
