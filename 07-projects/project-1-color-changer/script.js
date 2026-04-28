// Select all buttons
const buttons = document.querySelectorAll('button')

// Select body element
const body = document.querySelector('body')

// Select heading text
const heading = document.querySelector('.head2')

// Loop through all buttons
buttons.forEach(function(button){

    // Add click event to each button
    button.addEventListener('click', function(e){

        // Grey button
        if(e.target.id === "grey"){
            body.style.backgroundColor = 'grey'
            heading.innerText = "Grey"
            heading.style.color = 'red'
            heading.style.fontWeight = "bold"
            heading.style.fontSize = "50px"
        }

        // White button
        if(e.target.id === "white"){
            body.style.backgroundColor = 'white'
            heading.innerText = "White"
            heading.style.color = 'black'
            heading.style.fontWeight = "bold"
            heading.style.fontSize = "50px"
        }

        // Blue button
        if(e.target.id === "blue"){
            body.style.backgroundColor = 'blue'
            heading.innerText = "Blue"
            heading.style.color = 'white'
            heading.style.fontWeight = "bold"
            heading.style.fontSize = "50px"
        }

        // Yellow button
        if(e.target.id === "yellow"){
            body.style.backgroundColor = 'yellow'
            heading.innerText = "Yellow"
            heading.style.color = 'brown'
            heading.style.fontWeight = 'bold'
            heading.style.fontSize = "50px"
        }

    })

})
