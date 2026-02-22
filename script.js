/* =========================================================
   Punk Planet recreation - Assignment 2
   JavaScript file
   Function: toggle reading mode
   ========================================================= */

// Wait until the HTML document is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Select the button by its ID
  const readingModeBtn = document.getElementById("readingModeBtn");

  // Safety check in case the button is missing
  if (!readingModeBtn) return;

  // Add click event listener to the button
  readingModeBtn.addEventListener("click", function () {
    // Toggle a CSS class on the body
    document.body.classList.toggle("reading-mode");
  });
});