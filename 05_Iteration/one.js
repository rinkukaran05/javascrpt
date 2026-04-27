// ======================= FOR LOOP =======================

// Basic for loop structure:
// for (initialization; condition; increment/decrement)

for (let i = 0; i <= 10; i++) {
    const element = i;

    // Condition check inside loop
    if (element == 5) {
        // console.log("5 is best number");
    }

    // console.log(element);
}

// "element" is block-scoped (because of let)
// console.log(element); -> ReferenceError



// ======================= NESTED LOOPS =======================

// Loop inside another loop
for (let i = 1; i <= 10; i++) {

    // console.log(`Outer loop value: ${i}`);

    for (let j = 1; j <= 10; j++) {

        // console.log(`Inner loop value ${j} and outer loop ${i}`);

        // Multiplication table example
        // console.log(i + '*' + j + ' = ' + i * j);
    }
}



// ======================= ARRAY ITERATION =======================

let myArray = ["flash", "batman", "superman"]

// console.log(myArray.length); -> total elements

for (let index = 0; index < myArray.length; index++) {

    const element = myArray[index];

    // console.log(element);
}



// ======================= BREAK STATEMENT =======================

// "break" -> stops the loop completely

/*
for (let index = 1; index <= 20; index++) {

    if (index == 5) {
        console.log(`Detected 5`);
        break; // loop stops here
    }

    console.log(`Value of i is ${index}`);
}
*/



// ======================= CONTINUE STATEMENT =======================

// "continue" -> skips current iteration, continues next loop

for (let index = 1; index <= 20; index++) {

    if (index == 5) {
        console.log(`Detected 5`);
        continue; // skips printing 5
    }

    console.log(`Value of i is ${index}`);
}



// ======================= IMPORTANT NOTES =======================

// 1. for loop is best when number of iterations is known
// 2. Nested loops are useful for patterns, tables, matrices
// 3. Arrays are accessed using index (starting from 0)
// 4. "break" → exits loop completely
// 5. "continue" → skips one iteration only
// 6. Variables declared with "let" are block-scoped
