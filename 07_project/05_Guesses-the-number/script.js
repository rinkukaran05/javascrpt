

//Generate random number between 1 and 100
let randomNumber = parseInt(Math.random() * 100 + 1);
// Select elements from HTML
const submit = document.querySelector('#subt');  // submit button
const userInput = document.querySelector('#guessField');  // input field
const guessSlot = document.querySelector('.guesses');  //shows previous guesses
const remaining = document.querySelector('.lastResult'); //remainning attempt
const lowOrHi = document.querySelector('.lowOrHi'); //message display
const startOver = document.querySelector('.resultParas'); //container for new game button
//Create a paragraph for "New Game" button
const p = document.createElement('p');
// Game state variables
let prevGuess = [];//store all guesses
let numGuess = 1; //number of attemts

let playGame = true; //game statuse
// Start game when button is clicked
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();//stop page reload
    const guess = parseInt(userInput.value);// get user input
    console.log(guess);// debug (see in console)
    validateGuess(guess); //call validation function
  });
}
// Validate user input
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');//not a number
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');//too small
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');//to high
  } else {
    prevGuess.push(guess);// store valid guess

    //if 10 attemp finished
    if (numGuess === 11) {
      displayGuess(guess);//show last guesses
      displayMessage(`Game Over. Random number was ${randomNumber}`);   

      endGame();//end game
    } else {
      displayGuess(guess);//update UI
      checkGuess(guess);//check correct or not
    }
  }
}
//compare guess with random number

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);//win
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);//hint
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);//hint
  }
}

function displayGuess(guess) {
  userInput.value = '';//clear input
  guessSlot.innerHTML += `${guess}, `;//show previous guess
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;//update remaining attempt
}
//show message to user
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
//end ther game

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');//disable input
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;//create button
  startOver.appendChild(p);
  playGame = false;//stop game
  newGame();//prepare for restrat
}
//set up new GAME

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {//reset new random number
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];//reset guess
    numGuess = 1;//reset count
    guessSlot.innerHTML = '';//clear UI
    remaining.innerHTML = `${11 - numGuess} `;//reset attemp
    userInput.removeAttribute('disabled');//enable input
    startOver.removeChild(p);//remover button

    playGame = true;//game strat again
  });
}



//Click → validateGuess → displayGuess → checkGuess → endGame → newGame(memory tricks)
