// ===============================
// Array of quote objects
// Each object contains:
// 1. quote text
// 2. author name
// ===============================

const quotes = [
    {
        quote: "Believe in yourself",
        author: "Unknown"
    },

    {
        quote: "Dream big and dare to fail",
        author: "Norman Vaughan"
    },

    {
        quote: "Success is not final failure is not fatal",
        author: "Winston Churchill"
    },

    {
        quote: "Do something today that your future self will thank you for",
        author: "Sean Patrick"
    },

    {
        quote: "Hard work beats talent",
        author: "Kevin Durant"
    },

    {
        quote: "Stay hungry stay foolish",
        author: "Steve Jobs"
    },

    {
        quote: "Small steps every day",
        author: "Unknown"
    },

    {
        quote: "Never stop learning",
        author: "Unknown"
    }
]

// ===============================
// Selecting HTML elements
// ===============================

// Paragraph for quote text
const quote = document.getElementById("quote")

// Heading for author name
const author = document.getElementById("author")

// Button element
const button = document.getElementById("btn")


// ===============================
// Add click event on button
// ===============================

button.addEventListener("click", function(){

    // Generate random index number
    // based on array length
    const random = Math.floor(Math.random() * quotes.length)

    // Display random quote text
    quote.innerText = quotes[random].quote

    // Display random author name
    author.innerText = `~ ${quotes[random].author}`


    // ===============================
    // Array of background colors
    // ===============================

    const colors = [
        "#141e30",
        "#3a1c71",
        "#000428",
        "#134E5E",
        "#42275a"
    ]

    // Generate random color index
    const randomColor = Math.floor(Math.random() * colors.length)

    // Change body background color
    document.body.style.background = colors[randomColor]

})
