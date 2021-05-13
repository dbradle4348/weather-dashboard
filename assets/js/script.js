// query selectors for
var cityFormEl = document.querySelector("#city-form")
var cityContainerEl = document.querySelector("#")
//search button
// past cities buttons
// five day container
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
  