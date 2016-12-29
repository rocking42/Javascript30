"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var myApp = {
  endpoint: 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json',
  input: document.querySelector("input"),
  list: document.querySelector(".suggestions"),
  cities: [],
  filterCity: function filterCity() {
    var userInput = myApp.input.value.toLowerCase();
    return myApp.cities.filter(function (city) {
      var town = city.city.toLowerCase();
      var state = city.state.toLowerCase();
      // return whether the city or state matches the user input
      return town.startsWith(userInput) || state.startsWith(userInput);
    }).slice(0, 30); // Only return the first 30
  },
  // callback function
  findCity: function findCity() {
    var _this = this;

    var result = myApp.filterCity() // return filtered results
    //  return the html from each element of the array
    .map(function (single) {
      //  mathches and highlights text matching the user input
      var regex = new RegExp(_this.value, 'gi');
      var cityName = single.city.replace(regex, "<span class='hl'>" + _this.value + "</span>");
      var stateName = single.state.replace(regex, "<span class='hl'>" + _this.value + "</span>");
      return "\n           <li>\n            <span class=\"name\">" + cityName + ", " + stateName + "</span>\n            <span class=\"population\">" + single.population + "</span>\n          </li>";
    }).join("");
    //If the user input is blank append an empty string
    myApp.input.value.length >= 1 ? myApp.list.innerHTML = result : myApp.list.innerHTML = "";
  }
};

// fetch returns a promise
fetch(myApp.endpoint)
// the mass of json is turned to json
.then(function (blob) {
  return blob.json();
})
// from there the data is returned which is pushed into the array
.then(function (data) {
  var _myApp$cities;

  return (_myApp$cities = myApp.cities).push.apply(_myApp$cities, _toConsumableArray(data));
});

myApp.input.addEventListener("keyup", myApp.findCity);
