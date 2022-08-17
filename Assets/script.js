var apiKey = "ade1a4570ddcdc0f151deaf9487554c1";
var date = moment().format("M/D/YYYY");

var searchButton = document.getElementById("search-btn")
var searchHistoryList = document.getElementById("search-history")
var currentWeather = document.getElementById("current-weather")
var futureWeather = document.getElementById("five-day")


var iconUrl = "http://openweathermap.org/img/wn/10d@2x.png"


// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history

//Get parameters from URL
function searchParameters () {
    //get city name out of search parameter of URL
    var searchParametersArr = document.location.search.split("=")

    //get query value
    var queryCity = searchParametersArr[1];

    searchAPI(queryCity)
}

//fetching data from OpenWeather API
function searchAPI (city) {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey + "&units=imperial";

    fetch (queryURL)
    .then(function (response) {
        if (!response.ok) {
          throw response.json();
        }
  
        return response.json();
      })
      .then(function (data) { 
        var lon = data.coord.lon;
        console.log(lon)
        var lat = data.coord.lat;
        console.log(lat)
        displayWeather(data, lon, lat);
        displayForecast(lon, lat);
        saveHistory(data);
        renderHistory(data);
      })
};

// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
function displayWeather(results, lon, lat) {
    var currentCard = document.createElement("div");
    currentCard.cardList.add("current-weather-card");

    var cityTitle = document.createElement("h2");
    cityTitle.textContent = results.name +" ("+ currentDate + ")";

    var weatherIcon = document.createElement("img");
    var iconUrl = "http://openweathermap.org/img/wn/" + results.weather[0].icon + "@2x.png";
    weatherIcon.sr = iconUrl

    var cityInfo = document.createElement("ul");
    var cityTemp = document.createElement("li");
    var cityWind = document.createElement("li");
    var cityHumidity = document.createElement("li");
}

// The instructor told us we don't have to do the UV index part because it was updated recently and we can't really use it without being charged


// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

function displayForecast() {

}

// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city
function saveHistory() {

}

function renderHistory() {

}

// searchButton.addEventListener("submit")

// requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=Denver&appid=ade1a4570ddcdc0f151deaf9487554c1&units=imperial"

// fetch (requestUrl, {
//   method: "Get",
//   credential: "same-origin",
//   redirect: "follow",
// })
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//     var cityName = data.name
//     console.log(cityName)
//     var icon = data.weather[0].icon
//     console.log(icon)
//     var temperature = data.main.temp
//     console.log(temperature)
//     var humidity = data.main.humidity
//     console.log(humidity)
//     var windspeed = data.wind.speed
//     console.log(windspeed)
//     displayWeather(data)
// });

// function displayIntroWeather(results) {
//     console

// }