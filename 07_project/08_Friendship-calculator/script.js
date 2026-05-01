// ===============================
// Select HTML elements
// ===============================

const yourName = document.getElementById("yourName")
const partnerName = document.getElementById("friendName")
const button = document.getElementById("btn")
const result = document.getElementById("result")


// ===============================
// Button click event
// ===============================

button.addEventListener("click", function(){

    // Get input values
    const name1 = yourName.value
    const name2 = friendName.value


    // Check empty inputs
    if(name1 === "" || name2 === ""){

        result.innerText =
        "Please enter both friend names 🤝"

        return
    }


    // Generate random friendship score
    const friendshipScore =
    Math.floor(Math.random() * 100) + 1


    // ===============================
    // Friendship conditions
    // ===============================

    if(friendshipScore > 90){

        result.innerText =
        `${name1} 🤝 ${name2} = ${friendshipScore}%
        
        Best Friends Forever 😍`
    }

    else if(friendshipScore > 70){

        result.innerText =
        `${name1} 🤝 ${name2} = ${friendshipScore}%
        
        Amazing Friendship ❤️`
    }

    else if(friendshipScore > 50){

        result.innerText =
        `${name1} 🤝 ${name2} = ${friendshipScore}%
        
        Good Friends 😊`
    }

    else if(friendshipScore > 30){

        result.innerText =
        `${name1} 🤝 ${name2} = ${friendshipScore}%
        
        Normal Friendship 😅`
    }

    else{

        result.innerText =
        `${name1} 🤝 ${name2} = ${friendshipScore}%
        
        Needs More Bonding 😄`
    }

})
