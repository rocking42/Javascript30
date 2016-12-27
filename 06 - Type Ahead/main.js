myApp = {
  endpoint: 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json',
  input: document.querySelector("input"),
  list: document.querySelector(".suggestions"),
  cities: [],
  filterCity: function() {
    const userInput = myApp.input.value.toLowerCase();
    return myApp.cities.filter(city => {
      const town = city.city.toLowerCase();
      const state = city.state.toLowerCase();
      // return whether the city or state matches the user input
      return town.startsWith(userInput) ||
             state.startsWith(userInput);
     }).slice(0, 30) // Only return the first 30
  },
  // callback function
  findCity: function() {
    const result = myApp
        .filterCity() // return filtered results
        //  return the html from each element of the array
         .map(single => `
           <li>
            <span>${single.city}</span><span>${single.state}</span><span>${single.population}</span>
          </li>`)
         .join("");
         //If the user input is blank append an empty string
         myApp.input.value.length >= 1 ? myApp.list.innerHTML = result : myApp.list.innerHTML = "";
  }
};

// fetch returns a promise
fetch(myApp.endpoint)
  // the mass of json is turned to json
  .then(blob => blob.json())
  // from there the data is returned which is pushed into the array
  .then(data => myApp.cities.push(...data));


myApp.input.addEventListener("keyup", myApp.findCity);
