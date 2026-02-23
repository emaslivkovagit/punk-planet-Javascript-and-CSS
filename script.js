/* script.js — Assignment 2, Punk Planet Page 40

   Hover highlight on interview questions (h3 elements).
   When you hover over a question, it gets a yellow highlight,
   like marking text in a magazine. When the mouse leaves,
   the highlight disappears.
*/

document.addEventListener("DOMContentLoaded", function () {

  /* Select all h3 elements (the interview questions) */
  var questions = document.querySelectorAll("h3");

  /* Loop through each question and add hover effects */
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