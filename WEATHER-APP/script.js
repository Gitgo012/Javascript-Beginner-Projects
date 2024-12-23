const apiKey = "f889f99803499ff5580bfab976ecb2d8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".searchBox");
const searchBtn = document.querySelector(".searchBtn");
const weatherIcon = document.querySelector(".weather-icon")


async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  console.log(response);
  if (response.status == 404){
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display="none";
    document.querySelector(".container").style.display="none";
  }
  else{
    let data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
    document.querySelector(".humidityPercent").innerHTML = data.main.humidity + "%";
    document.querySelector(".windSpeed").innerHTML = data.wind.speed + " km/hr";
    let weather = data.weather[0].main;
  
    if (weather=="Clear"){
      weatherIcon.src="./images/clear.png";
    }
    else if (weather == "Rain"){
      weatherIcon.src= "./images/rain.png";
    }
    else if (weather == "Drizzle"){
      weatherIcon.src= "./images/drizzle.png";
    }
    else if (weather == "Clouds"){
      weatherIcon.src= "./images/clouds.png";
    }
    else if (weather == "Mist"){
      weatherIcon.src= "./images/mist.png";
    }
    else if (weather == "Snow"){
      weatherIcon.src= "./images/snow.png";
    }
    else if (weather == "Haze"){
      weatherIcon.src= "./images/haze.png";
    }
  
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".container").style.display = "flex";
    document.querySelector(".error").style.display="none";
  }

}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});