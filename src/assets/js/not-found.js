const ending_number = 3;
let iteration = 0;

window.addEventListener("load", () => {
  setInterval(() => {
    let current = iteration;
    document.body.style.setProperty(
      "--current-cursor",
      'url("/assets/cursors/not_found_' + current + '.png")'
    );

    iteration++;
    if (iteration > ending_number) {
      iteration = 0;
    }
  }, 75);
});
