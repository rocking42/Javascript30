const panelArr = Array.from(document.querySelectorAll(".panel"));

function toggleOpen() {
    this.classList.toggle("open");
}

function toggleActive(e) {
  // check that the exact transition has ended
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

panelArr.map((panel) => {
  panel.addEventListener("click", toggleOpen);
  // listen for the transition to end before firing the callback
  panel.addEventListener("transitionend", toggleActive);
});
