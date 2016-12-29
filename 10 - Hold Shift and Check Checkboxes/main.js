const input = Array.from(document.querySelectorAll("input[type='checkbox']"));
let lastClicked;
// Loop over all check boxes and add a click event
for(const single of input) {
  single.addEventListener("click", (e) => {
    if (e.shiftKey === true) {
      // Gather the two number varibles by finding the index of last clicked and current target
      let [first, second] = [input.indexOf(lastClicked), input.indexOf(e.target) + 1];
      // Swap the vars if the first is bigger
      if(first > second) {
        [second, first] = [first, second];
      }
      const selected = input.slice(first, second);
      // loop over the selected array and check each
      selected.forEach((item) => item.checked = true);
    }
    // set last click at the end
    lastClicked = e.target;
  });
}
