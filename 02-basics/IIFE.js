// ======================= IIFE (Immediately Invoked Function Expression) =======================

// Definition:
// IIFE is a function that runs immediately after it is defined.
// Syntax → (function definition)(execution)

// Why we use IIFE:
// 1. Avoid global scope pollution
// 2. Create private scope (data protection)
// 3. Execute code instantly


// ----------------------- NAMED IIFE -----------------------

(function chai() {  
    // Named IIFE (function has a name: chai)
    console.log("DB CONNECTED");

})(); // <-- Important: semicolon to end IIFE



// ----------------------- UNNAMED (ARROW) IIFE -----------------------

((name) => {  
    // Arrow function IIFE (no function name)
    console.log(`DB CONNECTED TWO ${name}`);

})("Rinku"); // Passing argument immediately



// ======================= GLOBAL vs LOCAL SCOPE =======================

// Global variable (can be accessed or modified anywhere)
var score = 100;


// IIFE creates its own private scope
(function () {

    // This "score" is completely separate from global "score"
    // It is NOT accessible outside this function
    var score = 200;

    console.log("Inside IIFE, score is: " + score);

})();


// Accessing global variable
console.log("Outside IIFE, score is: " + score);



// ======================= IMPORTANT NOTES =======================

// 1. IIFE runs immediately after definition
// 2. Always wrap function in () to make it an expression
// 3. Use ";" before/after IIFE to avoid errors
// 4. Variables inside IIFE are private (cannot be accessed outside)
// 5. Helps prevent conflicts in large applications (especially in JS before ES6)

// Example use case:
// When multiple scripts are running, IIFE protects variables from being overwritten
