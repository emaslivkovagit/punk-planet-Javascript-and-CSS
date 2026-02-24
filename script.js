/* script.js — Assignment 2, Punk Planet Page 40

   Hover highlight on interview questions.
   Targets both h3 elements and the .question-lead paragraph.
   When you hover, a yellow highlight appears like a marker pen.
   When the mouse leaves, the highlight disappears.
*/

/* wait for the whole html page to load first */
document.addEventListener("DOMContentLoaded", function () {

  /* Select/find all h3 elements and the cut-off question paragraph 
    store the result/findings in a variable called questions
  */
  var questions = document.querySelectorAll("h3, .question-lead");

  /* Loop through each interview question and add hover effects */
  for (var i = 0; i < questions.length; i++) {

    /* When the mouse moves over a question, add yellow highlight */
    questions[i].addEventListener("mouseover", function () {
      this.style.backgroundColor = "#f0e68c";
    });

    /* When the mouse leaves, remove the highlight, go back to css */
    questions[i].addEventListener("mouseout", function () {
      this.style.backgroundColor = "";
    });

  }

});