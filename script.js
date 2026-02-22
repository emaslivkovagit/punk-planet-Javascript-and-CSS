/* script.js
   Simple, beginner-friendly JavaScript for Assignment 2

   What it does:
   1) Makes the "PAPA M" title fade in when the page loads
   2) Slowly rotates the spiral (no button needed)
*/

document.addEventListener("DOMContentLoaded", function () {
  // Get the spiral and title elements by their IDs
  var spiral = document.getElementById("spiral");
  var papaMTitle = document.getElementById("papaMTitle");

  // Fade in the PAPA M title
  if (papaMTitle) {
    papaMTitle.classList.add("fade-in");

    // Small delay so the transition is visible
    setTimeout(function () {
      papaMTitle.classList.add("visible");
    }, 80);
  }

  // Rotate the spiral slowly
  if (spiral) {
    var angle = 0;

    setInterval(function () {
      angle = angle + 1; // increase rotation a little bit
      spiral.style.transform = "rotate(" + angle + "deg)";
    }, 80);
  }
});