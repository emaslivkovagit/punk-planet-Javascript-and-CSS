/* script.js — Assignment 2, Punk Planet Page 40

   Hover highlight on interview questions.
   Targets both h3 elements and the .question-lead paragraph
   (the cut-off question that continues in the bottom section).
   When you hover, a yellow highlight appears like a marker pen.
   When the mouse leaves, the highlight disappears.
*/

document.addEventListener("DOMContentLoaded", function () {

  /* Select all h3 elements and the cut-off question paragraph */
  var questions = document.querySelectorAll("h3, .question-lead");

  /* Loop through each and add hover effects */
  for (var i = 0; i < questions.length; i++) {

    /* When the mouse moves over a question, add yellow highlight */
    questions[i].addEventListener("mouseover", function () {
      this.style.backgroundColor = "#f0e68c";
    });

    /* When the mouse leaves, remove the highlight */
    questions[i].addEventListener("mouseout", function () {
      this.style.backgroundColor = "";
    });

  }

});