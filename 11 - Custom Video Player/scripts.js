// Global storage
const myApp = {
  video:document.querySelector("video"),
  progress:document.querySelector(".progress"),
  progFill:document.querySelector(".progress__filled"),
  playButton:document.querySelector(".player__button"),
  volumeSlider:document.querySelector("input[name='volume']"),
  speedSlide:document.querySelector("input[name='playbackRate']"),
  speedButtons:document.querySelectorAll('button[data-skip]'),
  showTime: document.querySelector("div.showTime"),
  fullScreen: document.querySelector(".fullScreen"),
  playVideo() { // Plays or pauses the vidoe bases on it's current status
    if (myApp.video.paused) {
      myApp.video.play();
      myApp.playButton.innerHTML = "❙❙";
    } else {
      myApp.video.pause();
      myApp.playButton.innerHTML = "►";
    }
  }
};

myApp.video.addEventListener("click", myApp.playVideo);
myApp.playButton.addEventListener("click", myApp.playVideo);

myApp.video.addEventListener("timeupdate", () => {
  // Update the width of the progress bar as the time updates
  myApp.progFill.style.flexBasis = `${myApp.video.currentTime / myApp.video.duration * 100}%`;
});
// Set the time to where the user clicks on the progress bar
myApp.progress.addEventListener("click", (e) => {
  // This is done simply by perctage calculation
  myApp.video.currentTime = `${myApp.video.duration * (e.offsetX / myApp.progress.clientWidth)}`;
  myApp.progFill.style.flexBasis = `${e.offsetX / e.target.clientWidth * 100}%`;
});

myApp.progress.addEventListener("mouseover", () => {
  myApp.showTime.style.display = "block";
});
myApp.progress.addEventListener("mouseout", () => {
  myApp.showTime.style.display = "none";
});
// Set the floating time display to follow the mouse and display the time of it's hovered position
myApp.progress.addEventListener("mousemove", (e) => {
  const minutes = Math.floor(myApp.video.duration * (e.offsetX / myApp.progress.clientWidth) / 60);
  const seconds = Math.floor(myApp.video.duration * (e.offsetX / myApp.progress.clientWidth) % 60);
  myApp.showTime.style.top = `${myApp.progress.getBoundingClientRect().top - 30}px`;
  myApp.showTime.style.left = `${myApp.progress.getBoundingClientRect().left + e.offsetX - 20}px`;
  myApp.showTime.innerHTML = `${minutes}:${seconds}`;
  console.log(`${minutes}:${seconds}`);
});
// Add functionality to the skip forwards and back buttons
for (const button of myApp.speedButtons) {
  button.addEventListener("click" , (e) => {
    myApp.video.currentTime += parseInt(e.target.dataset.skip);
  });
}
// change the volume and speed
myApp.volumeSlider.addEventListener("change", (e) => {
  myApp.video.volume = parseFloat(e.target.value);
});
myApp.speedSlide.addEventListener("change", (e) => {
  myApp.video.playbackRate = parseFloat(e.target.value);
});
// Add fullscreen capability
myApp.fullScreen.addEventListener("click", () => myApp.video.webkitRequestFullscreen());
