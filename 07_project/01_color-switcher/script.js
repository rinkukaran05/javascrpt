// Select all color buttons
const buttons = document.querySelectorAll('button')

// Select the body element
const body = document.querySelector('body')

// Select the heading text
const heading = document.querySelector('.head2')

// Loop through each button
buttons.forEach(function(button){

    // Add click event listener to every button
    button.addEventListener('click', function(e){

        // When Grey button is clicked
        if(e.target.id === "grey"){
            body.style.backgroundColor = 'grey'

            heading.innerText = "Grey"
            heading.style.color = 'red'
            heading.style.fontWeight = "bold"
            heading.style.fontSize = "50px"
        }

        // When White button is clicked
        if(e.target.id === "white"){
            body.style.backgroundColor = 'white'

            heading.innerText = "White"
            heading.style.color = 'black'
            heading.style.fontWeight = "bold"
            heading.style.fontSize = "50px"
        }

        // When Blue button is clicked
        if(e.target.id === "blue"){
            body.style.backgroundColor = 'blue'

            heading.innerText = "Blue"
            heading.style.color = 'white'
            heading.style.fontWeight = "bold"
            heading.style.fontSize = "50px"
        }

        // When Yellow button is clicked
        if(e.target.id === "yellow"){
            body.style.backgroundColor = 'yellow'

            heading.innerText = "Yellow"
            heading.style.color = 'brown'
            heading.style.fontWeight = "bold"
            heading.style.fontSize = "50px"
        }

    })

})
