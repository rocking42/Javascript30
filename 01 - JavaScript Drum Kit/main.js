function findKey(e) {
  // loop over the dom nodes
  for(const key of keys) {
    // Find out if the data-key is equal to the key pressed
    if (key.getAttribute("data-key") === e.keyCode.toString()) {
      // Add the class to highlight the node
      key.classList.add("playing");
      // find the sound based on the class
      var sound = document.querySelector(`.a${e.keyCode}`);
      // always plays the sound from the start on each keypress
      sound.currentTime = 0;
      // play the sound
      sound.play();
    }
  }
}
// Save the key nodes in a variable
const keys = document.querySelectorAll(".key");
// add a event listener to the document
document.addEventListener("keydown", findKey);
// this simply removes the above class
document.addEventListener("keyup", function(e) {
  for(const key of keys) {
    if (key.getAttribute("data-key") === e.keyCode.toString()) {
      key.classList.remove("playing");
    }
  }
});
