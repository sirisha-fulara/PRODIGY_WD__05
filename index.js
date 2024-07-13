const apiKey = "2e6265cce4aa138c8cf5549cb0cdee49";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector("#search");
const searchBtn = document.querySelector("#searchSubmit");
const weatherImage = document.querySelector(".weather-image");



async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

    document.querySelector(".heading").innerHTML = data.name;
    document.querySelector(".weather-info").innerHTML = Math.floor(data.main.temp) + "°";
    document.querySelector(".humidPercent").innerHTML = data.main.humidity + " %";
    document.querySelector(".wspeedValue").innerHTML = data.wind.speed + " km/hr";
    document.querySelector(".pressureValue").innerHTML = data.main.pressure + " hPa";
    document.querySelector(".feelsLike").innerHTML = "Feels Like: " + Math.floor(data.main.feels_like) + " °";
    document.querySelector(".max-minTemp").innerHTML= Math.floor(data.main.temp_max)+"°" + "/"+ Math.floor(data.main.temp_min)+"°";
    
    if (data.weather[0].main == "Haze") {
        weatherImage.src = "haze.png";
    }
    else if (data.weather[0].main == "Clouds") {
        weatherImage.src = "cloudy.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherImage.src = "drizzle.png";
    }
    else if (data.weather[0].main == "Rain") {
        weatherImage.src = "rain.png";
    }
    else if (data.weather[0].main == "Thunder") {
        weatherImage.src = "thunder.png";
    }
    else if (data.weather[0].main == "Clear") {
        weatherImage.src = "sun.png";
    }
    else if (data.weather[0].main == "Snow") {
        weatherImage.src = "snowman.png";
    }
    document.querySelector("#weather").style.display="flex";
    document.querySelector(".more-info").style.display="flex";
}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);

})
