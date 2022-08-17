var apiKey = "ade1a4570ddcdc0f151deaf9487554c1";
var date = moment().format("M/D/YYYY");

var searchButton = document.getElementById("search-btn")

var iconUrl = "http://openweathermap.org/img/wn/10d@2x.png"

var cityName =

var cityUrl = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"

// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history


// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index

// The instructor told us we don't have to do the UV index part because it was updated recently and we can't really use it without being charged money


// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity


// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city

searchButton.addEventListener("submit")