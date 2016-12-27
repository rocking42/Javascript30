const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const input = document.querySelector("input");
const list = document.querySelector(".suggestions");



const cities = [];
// fetch returns a promise
fetch(endpoint)
  // the mass of json is turned to json
  .then(blob => blob.json())
  // from there the data is returned which is pushed into the array
  .then(data => cities.push(...data));
// callback function
function findCity() {
  const userInput = input.value.toLowerCase();
  const result =
    cities.filter(city => {
      const town = city.city.toLowerCase();
      const state = city.state.toLowerCase();
      // return whether the city or state matches the user input
      return town.startsWith(userInput) ||
             state.startsWith(userInput);
     }).slice(0, 30) // Only return the first 30
      //  return the html from each element of the array
       .map(single => `
         <li>
          <span>${single.city}</span><span>${single.state}</span><span>${single.population}</span>
        </li>`)
       .join("");
  //If the user input is blank append an empty string
  input.value.length >= 1 ? list.innerHTML = result : list.innerHTML = "";
}

input.addEventListener("keyup", findCity);
