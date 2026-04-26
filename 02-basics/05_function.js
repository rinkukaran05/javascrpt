// ===================== BASIC FUNCTION =====================

// Function definition
function sayMyName() {
    console.log("T");
    console.log("o");
    console.log("t");
    console.log("a");
    console.log("i");
    }

// Function call
sayMyName();


// ===================== FUNCTION WITH PARAMETERS =====================

function addTwoNumbers(number1, number2) {
    console.log(number1 + number2); // Direct output
}

addTwoNumbers(3, 7);


// ===================== FUNCTION WITH RETURN =====================

function addTwoNumberss(number1, number2) {
    const result = number1 + number2;
    return result;

    // This line will NEVER execute (after return)
    console.log("totai");
}

const result = addTwoNumberss(3, 4);
console.log(result);


// ===================== DEFAULT PARAMETER =====================

function loginUserMessage(username = "you") {

    // This condition will NOT run if default value is used
    if (username === undefined) {
        console.log("Please enter a username");
        return;
    }

    return `${username} just logged in`;
}

console.log(loginUserMessage("rinku"));
// if not gives the argument → "you just logged in"


// ===================== REST OPERATOR =====================

// Collect multiple values into an array
function calculateCart(...num1) {
    return num1;
}

console.log(calculateCart(100, 200, 400, 2000));
// Output: [100, 200, 400, 2000]


//rest operator, make a array of the passing value.
function calculateCart2(val1, val2, ...num1) {
    return num1;
}

console.log(calculateCart2(100, 200, 400, 2000));

// val1 = 100, val2 = 200, num1 = [400, 2000]


// ===================== OBJECT AS PARAMETER =====================

const user = {
    username: "Pritam Ghosh",
    password: "123abc"
};

function printobj(anyobject) {
    return `username: ${anyobject.username}, password: ${anyobject.password}`;
}

console.log(printobj(user));


// ===================== ARRAY AS PARAMETER =====================

const newArray = [200, 400, 500];

function arrayfunction(anyarray) {
    return anyarray[1]; // return 2nd element
}

console.log(arrayfunction(newArray));
