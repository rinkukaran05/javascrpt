const button = document.querySelector("#btn");
const movieInput = document.querySelector("#movie");
const result = document.querySelector("#result");
button.addEventListener('click',function(){
    const movie = movieInput.value
    const apikey = "484297f8"
    const url = `https://www.omdbapi.com/?t=${movie}&apikey=${apikey}`;
    fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
         if(data.Response == "False"){
            result.innerHTML = "Movie not found";
            return;
        }

        result.innerHTML = `
            <h2>${data.Title}</h2>
            <p>Year: ${data.Year}</p>
            <p>IMDB: ${data.imdbRating}</p>
            <img src="${data.Poster}" width="200">
        `;
    })
    .catch(function(error){
        console.log("Error:", error);
    });
        
    })


