"use strict";

function findKey(e) {
  // loop over the dom nodes
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;

      // Find out if the data-key is equal to the key pressed
      if (key.getAttribute("data-key") === e.keyCode.toString()) {
        // Add the class to highlight the node
        key.classList.add("playing");
        // find the sound based on the class
        var sound = document.querySelector("audio[data-key='" + e.keyCode + "']");
        // always plays the sound from the start on each keypress
        sound.currentTime = 0;
        // play the sound
        sound.play();
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}
// Save the key nodes in a variable
var keys = document.querySelectorAll(".key");
// add a event listener to the document
document.addEventListener("keydown", findKey);
// this simply removes the above class
document.addEventListener("keyup", function (e) {
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = keys[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var key = _step2.value;

      if (key.getAttribute("data-key") === e.keyCode.toString()) {
        key.classList.remove("playing");
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
});
