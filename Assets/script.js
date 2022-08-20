// var apiKey = "ade1a4570ddcdc0f151deaf9487554c1";
var currentDate = moment().format("M/D/YYYY");

// var searchButton = document.getElementById("search-btn")
// var searchHistoryList = document.getElementById("search-history")
var currentWeatherEl = document.getElementById("current-weather")
var futureWeatherEl = document.querySelector(".five-day-area")
console.log(futureWeatherEl)


// var iconUrl = "http://openweathermap.org/img/wn/10d@2x.png"


// // GIVEN a weather dashboard with form inputs
// // WHEN I search for a city
// // THEN I am presented with current and future conditions for that city and that city is added to the search history

// //Get parameters from URL
// function searchParameters () {
//     //get city name out of search parameter of URL
//     var searchParametersArr = document.location.search.split("=")

//     //get query value
//     var queryCity = searchParametersArr[1];

//     searchAPI(queryCity);
// }

// //fetching data from OpenWeather API
// function searchAPI (cityName) {
//     var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=ade1a4570ddcdc0f151deaf9487554c1&units=imperial";

//     fetch (queryURL)
//     .then(function (response) {
//         if (!response.ok) {
//           throw response.json();
//         }
  
//         return response.json();
//       })
//       .then(function (data) { 
//         var lon = data.coord.lon;
//         console.log(lon)
//         var lat = data.coord.lat;
//         console.log(lat)
//         displayWeather(data);
//         displayForecast(lon, lat);
//         // saveHistory(data);
//         // renderHistory(data);
//       })
// };

// // WHEN I view current weather conditions for that city
// // THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
function displayWeather(results) {
    var currentCard = document.createElement("div");
    currentCard.classList.add("current-weather-card");

    var cityTitle = document.createElement("h2");
    cityTitle.textContent = results.name + " (" + currentDate + ")";

    var weatherIcon = document.createElement("img");
    var iconUrl = "http://openweathermap.org/img/wn/" + results.weather[0].icon + "@2x.png";
    weatherIcon.src = iconUrl

    var cityInfo = document.createElement("ul");
    var cityTemp = document.createElement("li");
    var cityWind = document.createElement("li");
    var cityHumidity = document.createElement("li");

    cityTemp.textContent = "Temperature: " + results.main.temp + "°F";
    cityWind.textContent = "Wind Speed: " + results.wind.speed + " MPH";
    cityHumidity.textContent = "Humidity: " + results.main.humidity + "%";

    cityInfo.appendChild(cityTitle);
    cityInfo.appendChild(weatherIcon);
    cityInfo.appendChild(cityTemp);
    cityInfo.appendChild(cityWind);
    cityInfo.appendChild(cityHumidity);

    currentCard.append(cityInfo);
    currentWeatherEl.append(currentCard);

};

// // The instructor told us we don't have to do the UV index part because it was updated recently and we can't really use it without being charged


// // WHEN I view future weather conditions for that city
// // THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

function displayForecast(lon, lat) {
    var queryForecast = "https://api.openweathermap.org/data/2.5/forecast?lat="+ lat + "&lon=" + lon + "&appid=ade1a4570ddcdc0f151deaf9487554c1&units=imperial"

    fetch (queryForecast)
    .then(function (response) {
        if (!response.ok) {
          throw response.json();
        }
  
        return response.json();
      })
      .then(function (forecastData) {
        for (var i = 1; i<6; i++) {
            var futureWeather = forecastData.list[i];
            console.log(futureWeather)

            var futureCard = document.createElement("div");
            futureCard.classList.add("future-weather-card");

            var futureCityTitle = document.createElement("h3");
            futureDate = moment().subtract(0-i, "days").format("MM/DD/YYYY");
            futureCityTitle.textContent = futureDate;

            var futureIcon = document.createElement("img");
            var futureIconUrl = "http://openweathermap.org/img/wn/"+ futureWeather.weather[0].icon+ "@2x.png";
            futureIcon.src = futureIconUrl

            var futureInfo = document.createElement("ul");
            var futureTemp = document.createElement("li");
            var futureWind = document.createElement("li");
            var futureHumidity = document.createElement("li");

            futureTemp.textContent = "Temperature: " + futureWeather.main.temp + "°F";

            futureWind.textContent = "Wind Speed: " + futureWeather.wind.speed + "MPH";
        
            futureHumidity.textContent = "Humidity: " + futureWeather.main.humidity + "%";

            futureInfo.appendChild(futureCityTitle);
            futureInfo.appendChild(futureIcon);
            futureInfo.appendChild(futureTemp);
            futureInfo.appendChild(futureWind);
            futureInfo.appendChild(futureHumidity);
            futureCard.appendChild(futureInfo);

            futureCard.append(futureInfo);
            futureWeatherEl.append(futureCard);
        }
    })

};

// function cityInput(event) {
//     event.preventDefault();
//     if (event.target.textContent === "Search") {
//         var cityName = document.getElementById("search-input").value;
//         console.log(cityName);

//         if (!cityName) {
//             console.log("Please enter a city name");
//             return;
//         }
//     }else {
//         var cityName = event.target.textContent;
//     }
//     searchAPI(cityName);
//     cityName.value = "";
// }

// // WHEN I click on a city in the search history
// // THEN I am again presented with current and future conditions for that city
// function saveHistory() {

// }

// function renderHistory() {

// }

// searchButton.addEventListener("click", cityInput);

// searchParameters();


requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=Denver&appid=ade1a4570ddcdc0f151deaf9487554c1&units=imperial"

fetch (requestUrl, {
  method: "Get",
  credential: "same-origin",
  redirect: "follow",
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    var cityName = data.name
    console.log(cityName)
    var icon = data.weather[0].icon
    console.log(icon)
    var temperature = data.main.temp
    console.log(temperature)
    var humidity = data.main.humidity
    console.log(humidity)
    var windspeed = data.wind.speed
    console.log(windspeed)
    displayWeather(data)

    var lon = data.coord.lon
    console.log(lon)
    var lat = data.coord.lat
    console.log(lat)
    displayForecast(lon, lat)
});

// function displayIntroWeather(results) {
//     console

// }