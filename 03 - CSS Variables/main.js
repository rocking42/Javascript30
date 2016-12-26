const inputs = document.querySelectorAll("input"); //grabs all inputs off the page
const root = document.querySelector(":root"); // grabs the root where the css variables are contained

function handleUpdate() {
  const suffix = this.dataset.sizing || ""; // store the data variable which returns "px" or an empty string
  root.style.setProperty(`--${this.name}`, this.value + suffix); // set the property based off the name value in the HTML
}
// listen for the changes on all inputs
inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
