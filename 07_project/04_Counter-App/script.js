// Select the counter display element
const counter = document.querySelector('#counter')

// Select increment button
const increament = document.querySelector('#increamentBTN')

// Select decrement button
const decreament = document.querySelector('#decreamentBTN')

// Select reset button
const reset = document.querySelector('#resetBTN')

// Store initial counter value
let count = 0;

// Function to update counter value on screen
function updateCounter(){
    counter.textContent = count
}

// Increase counter value
increament.addEventListener('click', function(){
    count++
    updateCounter()
})

// Decrease counter value
decreament.addEventListener('click', function(){
    count--
    updateCounter()
})

// Reset counter value to zero
reset.addEventListener('click', function(){
    count = 0
    updateCounter()
})
