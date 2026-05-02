const button = document.querySelector("#btn");
const cityInput = document.querySelector("#city");
const weatherResult = document.querySelector("#weatherResult");

button.addEventListener("click", function () {

    const city = cityInput.value;

    const apiKey = "a93ef51f2811c82aaccab67eda0ae8bc";

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then((response) => response.json())

    .then((data) => {

        console.log(data);

        weatherResult.innerHTML = `
        <h2>${data.name}</h2>
        <h3>${data.main.temp} °C</h3>
        <p>${data.weather[0].main}</p>
        `;
    })

    .catch((error) => {
        console.log("Error:", error);
    });

});
