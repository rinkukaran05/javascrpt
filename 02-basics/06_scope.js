// ===================== BLOCK SCOPE =====================

// var c = 300
let a = 300;

if (true) {
    let a = 10;   // block scope (only inside this block)
    const b = 20; // block scope

    console.log("INNER:", a); // 10
}

// বাইরে:
console.log(a); // 300 (outer a)
// console.log(b); ERROR (b is not defined outside block)
// console.log(c); ERROR (c commented, not defined)


// ===================== FUNCTION SCOPE =====================

function one() {
    const username = "Pritam";

    function two() {
        const website = "youtube";
        console.log(username); // child function can access parent variable
    }

    // console.log(website); ERROR (not accessible outside 'two')

    two();
}

one();


// ===================== NESTED IF BLOCK =====================

if (true) {
    const username = "hitesh";

    if (username === "hitesh") {
        const website = " youtube";
        console.log(username + website); // works
    }

    // console.log(website);  ERROR (block scope)
}

// console.log(username);  ERROR (not defined outside)


// ===================== HOISTING =====================

// Function declaration → hoisted
console.log(addone(5)); 

function addone(num) {
    return num + 1;
}


// Function expression → NOT hoisted
// console.log(addTwo(5)); ERROR (cannot access before initialization)

const addTwo = function (num) {
    return num + 2;
};

addTwo(5); //works after definition
