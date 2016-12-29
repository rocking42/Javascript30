"use strict";

var input = Array.from(document.querySelectorAll("input[type='checkbox']"));
var lastClicked = void 0;
// Loop over all check boxes and add a click event
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = input[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var single = _step.value;

    single.addEventListener("click", function (e) {
      if (e.shiftKey === true) {
        // Gather the two number varibles by finding the index of last clicked and current target
        var _ref = [input.indexOf(lastClicked), input.indexOf(e.target) + 1],
            first = _ref[0],
            second = _ref[1];
        // Swap the vars if the first is bigger

        if (first > second) {
          var _ref2 = [first, second];
          second = _ref2[0];
          first = _ref2[1];
        }
        var selected = input.slice(first, second);
        // loop over the selected array and check each
        selected.forEach(function (item) {
          return item.checked = true;
        });
      }
      // set last click at the end
      lastClicked = e.target;
    });
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
