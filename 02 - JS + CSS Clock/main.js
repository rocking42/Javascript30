// store all hands in variables
const second = document.querySelector(".second-hand");
const minute = document.querySelector(".min-hand");
const hour = document.querySelector(".hour-hand");
// callback function that is called each second
function setDate(stuff) {
  // save a date var
  const now = new Date();
  // get the seconds minutes and hours off the date var
  const seconds = now.getSeconds();
  // times by six to keep inline with 360deg and add 90 to counter the initial offset
  second.style.transform = `rotate(${seconds * 6 + 90}deg)`;

  const minutes = now.getMinutes();
  minute.style.transform = `rotate(${minutes * 6 + 90}deg)`;

  const hours = now.getHours();
  hour.style.transform = `rotate(${hours * 6 + 90}deg)`
}
// check each second for an update
setInterval(setDate, 1000);
