'use strict';

var canvas = document.querySelector("#draw");
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// color
var hue = 0;
setInterval(function () {
  hue++;
  // HSL stands for hue saturation lightness
  ctx.strokeStyle = 'hsl(' + hue + ', 70%, 50%)';
}, 10);
// Size of the line
var size = 10;
var big = false;
// work out whether to increase or decrease the line based of the big vars
setInterval(function () {
  if (big === false) {
    size += 2;
    if (size === 100) {
      big = true;
    }
  } else if (big === true) {
    size -= 2;
    if (size === 4) {
      big = false;
    }
  }
  ctx.lineWidth = size;
}, 100);

// The shape when a line meets another line
ctx.lineJoin = 'square';
// The shape of the end of the line
ctx.lineCap = 'square';

var isDrawing = false;
// Designate the start and end co-ordinates for the line
var lastX = 0;
var lastY = 0;

function draw(e) {
  if (!isDrawing) return; //stops the function from running
  console.log(e);
  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // end path
  ctx.lineTo(e.offsetX, e.offsetY);
  // Nothing is drawn onto the page until stroke is called
  ctx.stroke();
  // update The new starting co-ordinates on each move
  var _ref = [e.offsetX, e.offsetY];
  lastX = _ref[0];
  lastY = _ref[1];
}

canvas.addEventListener('mousemove', draw);
// Change is drawing only when the mouse is pressed
canvas.addEventListener("mousedown", function (e) {
  isDrawing = true;
  // Update the initial starting co-ords
  var _ref2 = [e.offsetX, e.offsetY];
  lastX = _ref2[0];
  lastY = _ref2[1];
});
canvas.addEventListener("mouseup", function () {
  return isDrawing = false;
});
// isDrawing is set to false when the users mouse leaves the page
canvas.addEventListener("mouseout", function () {
  return isDrawing = false;
});
