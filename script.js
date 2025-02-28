
// Explore button navigation
  function exploreTemplates() {
    window.location.href = "templates.html"; // Update with actual page link
  }
  

  document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
  
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  });