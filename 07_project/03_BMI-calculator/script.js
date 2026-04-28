// Select the form element
const form = document.querySelector('#form')

// Run function when form is submitted
form.addEventListener('submit', function(e){

  // Prevent page refresh after submit
  e.preventDefault();

  // Get height input value
  const height = parseInt(document.querySelector('#height').value);

  // Get weight input value
  const weight = parseInt(document.querySelector('#weight').value);

  // Select result section
  const result = document.querySelector('#result');

  // Validate height input
  if(height === '' || height < 0 || isNaN(height)){

    // Show error message for invalid height
    result.innerHTML = `Please enter a valid height ${height}`;
  }

  // Validate weight input
  else if(weight === '' || weight < 0 || isNaN(weight)){

    // Show error message for invalid weight
    result.innerHTML = `Please enter a valid weight ${weight}`;
  }

  else{

    // BMI Formula
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // Store BMI category message
    let message = "";

    // Check BMI range
    if(bmi < 18.6){
      message = "Under Weight";
    }

    else if(bmi <= 24.9){
      message = "Normal Weight";
    }

    else{
      message = "Over Weight";
    }

    // Display final BMI result
    result.innerHTML = `<span>${bmi}</span> (${message})`;
  }

});
