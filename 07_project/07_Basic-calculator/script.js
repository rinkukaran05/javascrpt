// Store calculator input/output
let string = "";

// Select all calculator buttons
let buttons = document.querySelectorAll(".buttons");

// Select display input field
let display = document.querySelector("input");


// ================= BUTTON CLICK SUPPORT =================

Array.from(buttons).forEach((buttons) => {

    // Add click event on every button
    buttons.addEventListener("click", (e) => {

        // Calculator operators
        let operator = ['-', '+', '=', '*', '/'];

        // Store last character of string
        let laststring;

        // If equal button is pressed
        if (e.target.innerHTML == '=') {

            // Evaluate the expression
            string = eval(string);

            // Show result on display
            display.value = string;
        }

        // If clear button is pressed
        else if (e.target.innerHTML == 'C') {

            // Reset string
            string = "";

            // Show default value
            display.value = 0;
        }

        // If delete button is pressed
        else if (e.target.innerHTML == "DEL") {

            // Remove last character
            string = string.slice(0, -1);

            // Update display
            display.value = string;
        }

        // Prevent multiple operators together
        // Example: 5++6
        // else if(operator.includes(value) && operator.includes(laststring)){
        //     string = "ERROR"
        //     display.value = string;
        // }

        // For normal button press
        else {

            // Add button value to string
            string = string + e.target.innerHTML;

            // Update display
            display.value = string;

            // Store last character
            // laststring = string[string.length-1];
        }
    });
});


// ================= KEYBOARD SUPPORT =================

document.addEventListener("keydown", function (e) {

    // Check if pressed key is a number
    if (!isNaN(e.key)) {

        // Add number to string
        string += e.key;
    }

    // Add plus operator
    else if (e.key === "+") {
        string += "+";
    }

    // Add minus operator
    else if (e.key === "-") {
        string += "-";
    }

    // Add multiplication operator
    else if (e.key === "*") {
        string += "*";
    }

    // Add division operator
    else if (e.key === "/") {
        string += "/";
    }

    // Calculate result when Enter key is pressed
    else if (e.key === "Enter") {
        string = eval(string);
    }

    // Remove last character
    else if (e.key === "Backspace") {
        string = string.slice(0, -1);
    }

    // Clear all data
    else if (e.key === "Delete") {
        string = "";
    }

    // Update display after every key press
    document.querySelector("input").value = string;
});
