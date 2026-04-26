// ===================== OBJECT LITERALS =====================

// Create a Symbol (unique key)
const mySym = Symbol("key1");

const jsUser = {
    name: "Rinku",

    // Key with space must be written in quotes
    "full name": "Rinku Karan",

    age: 20,
    location: "sabang",
    email: "rinkku2025@gmail.com",
    isLoggedIn: false,

    // Array inside object
    lastLoginDays: ["Monday", "Tuesday", "Sunday"],

    // Correct way to use Symbol as a key
    [mySym]: "myKey1"
};


// ===================== ACCESSING OBJECT VALUES =====================

// Dot notation
console.log(jsUser.email);

// Bracket notation (useful for dynamic keys / special keys)
console.log(jsUser["email"]);
console.log(jsUser["full name"]);


// ===================== SYMBOL =====================

console.log(jsUser[mySym]);        // Access symbol key
console.log(typeof jsUser[mySym]); // value type → string
console.log(typeof mySym);         // symbol


// ===================== UPDATE & FREEZE =====================

// Update value
jsUser.email = "rinkku2025@gmail.com";

// Freeze object (no changes allowed after this)
Object.freeze(jsUser);

// This update will NOT work (object is frozen)
jsUser.email = "ghoshpritam2006@google.com";

console.log(jsUser);


// ===================== FUNCTIONS INSIDE OBJECT =====================

// Add function as a method
jsUser.greeting = function () {
    console.log("Hello JS user");
};

// Calling the function
console.log(jsUser.greeting()); // prints message + undefined


// Using 'this' to access object properties
jsUser.greetingTwo = function () {
    console.log(`Hello JS user, I am ${this["full name"]}`);
};

console.log(jsUser.greetingTwo());


// ===================== NORMAL FUNCTION =====================

// Function definition
function greetUser(username) {
    console.log(`Hello ${username}!`);
}

// Function call
greetUser("Rinku");
