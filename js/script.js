document.addEventListener("DOMContentLoaded", function() {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Hamburger menu toggle
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");

  if (hamburger && menu) {
    hamburger.addEventListener("click", function() {
      menu.classList.toggle("active");
    });
  }

  console.log("Rentera script loaded");
});
