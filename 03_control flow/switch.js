// ======================= SWITCH CASE =======================

// Definition:
// switch is used to perform different actions based on different conditions.
// It is an alternative to multiple if-else statements.


// Syntax:
/*
switch (key) {
    case value:
        // code to execute
        break;

    default:
        // runs if no case matches
        break;
}
*/


const month = "march"


switch (month) {

    case "jan":
        console.log("January");
        break;  // stops execution after match

    case "feb":
        console.log("February");
        break;

    case "march":
        console.log("March");
        break;

    case "april":
        console.log("April");
        break;

    default:
        // runs if none of the above cases match
        console.log("No matching month found");
        break;
}



// ======================= IMPORTANT NOTES =======================

// 1. "break" is VERY important
//    → without break, execution will continue to next cases (fall-through)

// Example of fall-through:
switch (month) {
    case "march":
        console.log("March");
    case "april":
        console.log("April");
    default:
        console.log("Default");
}

// Output:
// March
// April
// Default
// (because no "break")



// 2. switch uses strict comparison (===)
//    → type and value must match

// Example:
switch (1) {
    case "1":
        console.log("String 1");
        break;
    case 1:
        console.log("Number 1"); // This will run
        break;
}



// 3. default is optional but recommended
//    -> acts like "else" in if-else



// ======================= WHEN TO USE SWITCH =======================

// Use switch when:
//  You have multiple fixed values to compare
//  Cleaner than long if-else chains

// Avoid switch when:
//  Conditions are complex (use if-else instead)
