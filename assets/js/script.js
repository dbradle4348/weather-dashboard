var cities = [];
// query selectors for
var cityFormEl = document.querySelector("#city-form");
var cityContainerEl = document.querySelector("#");
var citySearchInputEl = document.querySelector('#searched-city')
var pastSearchButtonsEl = document.querySelector('#past-search-buttons');
var fiveDayContainerEl = document.querySelector('#fiveday-container');
var currentForecastContainerEl = document.querySelector('#current-weather-container');
var weatherContainerEl = document.querySelector('#current-weather-container')
//current forcast container

var formSubmitHandler = function(event) {
    // prevent page from refreshing
    event.preventDefault();
  
    // get value from input element
    var city = cityInputEl.value.trim();
  
    if (city) {
      getCity(city);
  
      // clear old content
      cityContainerEl.textContent = "";
      cityInputEl.value = "";
    } else {
      alert("Please enter a city");
    }
  };
  
  //save a city to localStorage
  var saveCity = function() {
      localStorage.setItem("cities", JSON.stringify(cities));
  };

  //api fetch
  var getCity = function(city) {
        var apiKey = 'b1e65636ec452089d669f76069c353ba'
      var apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid='+ apiKey;

      // make a request to URL
      fetch(apiUrl)
      .then(function(response) {
          //response was successful
          if(response.ok) {
              console.log(response);
              response.json().then(function(data) {
                  console.log(data);
                  displayCityWeather(data, city);
              })
          }
      })
  };

  var displayCityWeather = function(weather, searchCity) {
      weatherContainerEl.textContent="";
      citySearchInputEl.textContent=searchCity
  };

  