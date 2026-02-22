/* script.js
   Simple JavaScript for Assignment 2
   Effect: fade in the "PAPA M" title on page load
*/

document.addEventListener("DOMContentLoaded", function () {
  // Get the PAPA M title by its ID
  var papaMTitle = document.getElementById("papaMTitle");

  // If the title exists, apply a fade-in effect
  if (papaMTitle) {
    papaMTitle.classList.add("fade-in");

    // Small delay so the animation is visible
    setTimeout(function () {
      papaMTitle.classList.add("visible");
    }, 80);
  }
});