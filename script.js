// script.js
// Get the button
document.addEventListener("DOMContentLoaded", function() {
let scrollToTopButton = document.getElementById("scrollToTop");

// When the user scrolls down 20px from the top, show the button
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
}
});

// When the button is clicked, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
