// Function to generate a random HEX color
const randomColor = function () {

  // All possible HEX color values
  const hex = '0123456789ABCDEF';

  // Default color starts with #
  let color = '#';

  // Generate 6 random HEX characters
  for (let i = 0; i < 6; i++) {

    // Pick a random character from HEX values
    color += hex[Math.floor(Math.random() * 16)];
  }

  // Return final random color
  return color;
};

// Store interval ID
let intervalId;

// Function to start changing background color
const startChangingColor = function () {

  // Prevent multiple intervals from running
  if (!intervalId) {

    // Change color every 1 second
    intervalId = setInterval(changeBgColor, 1000);
  }

  // Function to change body background color
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

// Function to stop changing background color
const stopChangingColor = function () {

  // Stop the interval
  clearInterval(intervalId);

  // Reset interval value
  intervalId = null;
};

// Start button event
document.querySelector('#start')
  .addEventListener('click', startChangingColor);

// Stop button event
document.querySelector('#stop')
  .addEventListener('click', stopChangingColor);
