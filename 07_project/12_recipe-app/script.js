const input = document.querySelector('#foodInput');

const button = document.querySelector('#searchBtn');

const result = document.querySelector('#result');



async function getRecipe(){

  const food = input.value.trim();

  if(food === ''){

    alert('Please enter food name');

    return;
  }


  result.innerHTML = `
    <h2 class="loading">Loading...</h2>
  `;


  const url =
  `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`;



  try{

    const response = await fetch(url);

    const data = await response.json();



    if(data.meals){

      result.innerHTML = '';



      data.meals.forEach(function(meal){

        result.innerHTML += `

          <div class="card">

            <img src="${meal.strMealThumb}">

            <div class="card-content">

              <h2>${meal.strMeal}</h2>

              <div class="info">

                <span>${meal.strCategory}</span>

                <span>${meal.strArea}</span>

              </div>

              <p class="instructions">

                ${meal.strInstructions}

              </p>

              <a
                href="${meal.strYoutube}"
                target="_blank"
                class="youtube-btn"
              >
                Watch Recipe
              </a>

            </div>

          </div>

        `;

      });

    }

    else{

      result.innerHTML = `
        <h2 class="error">Food not found </h2>
      `;
    }

  }


  catch(error){

    result.innerHTML = `
      <h2 class="error">
        Something went wrong 
      </h2>
    `;

    console.log(error);

  }

}



button.addEventListener('click', getRecipe);




input.addEventListener('keydown', function(e){

  if(e.key === 'Enter'){

    getRecipe();

  }

});
