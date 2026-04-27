// ======================= OBJECT + "this" KEYWORD =======================

const user = {
    username: "Rinku",
    price: 999,

    // Method inside object
    welcomeMessage: function () {

        // "this" refers to the current object (user)
        console.log(`${this.username}, welcome to the website`);

        // Prints the entire object
        console.log(this);
    }
}

// Calling method → uses initial value
user.welcomeMessage()

// Updating object property
user.username = "Totai"

// Calling again → updated value is used
user.welcomeMessage()


// In Node.js environment → "this" refers to an empty object {}
// In browser → "this" refers to window object
console.log(this);



// ======================= NORMAL FUNCTION + "this" =======================

function chai() {

    // In a normal function, "this" depends on how the function is called
    // In Node.js → {}
    // In browser → window object
    console.log(this);
}
chai()



// ======================= WHY "this.username" IS UNDEFINED =======================

function me() {
    let username = "Rinku"

    // "this" does NOT refer to local variables
    // It only works with object properties
    console.log(this.username); // undefined
}
me()



// ======================= ARROW FUNCTIONS =======================

// Explicit return → must use "return"
const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3, 4));


// Implicit return → no need to write "return"
// Using parentheses ()
const addThree = (num1, num2, num3) => (num1 + num2 + num3)
console.log(addThree(1, 6, 5));



// ======================= RETURNING OBJECT FROM ARROW FUNCTION =======================

// Important: Wrap object inside parentheses ()
// Otherwise {} will be treated as function body
const obj = () => ({ username: "Rinku Karan" })

console.log(obj());



// ======================= IMPORTANT NOTES =======================

// 1. "this" inside object → refers to that object
// 2. "this" inside normal function → depends on execution context
// 3. "this" does NOT work with local variables
// 4. Arrow functions do NOT have their own "this"
//    → they inherit "this" from their surrounding scope
// 5. Avoid using arrow functions as object methods (in most cases)
