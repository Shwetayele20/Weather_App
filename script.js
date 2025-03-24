const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weartherIcon = document.querySelector(".weather-icon");


async function checkWeather(city) {
  const apiKey = "f93d4ac24b75a2ca314a79c46a71b0d7";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(apiUrl);
  var data = await response.json();
  console.log(data);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
  } 
  else {
    document.querySelector(".error").style.display = "none";

   }
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weartherIcon.src = " images/clouds.png";
    } 
    else if (data.weather[0].main == "Clear") {
      weartherIcon.src = " images/clear.png";
    } 
    else if (data.weather[0].main == "Drizzle") {
      weartherIcon.src = " images/drizzle.png";
    } 
    else if (data.weather[0].main == "Snow") {
      weartherIcon.src = " images/snow.png";
    }
     else if (data.weather[0].main == "Mist") {
      weartherIcon.src = " images/mist.png";
    }

  
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
