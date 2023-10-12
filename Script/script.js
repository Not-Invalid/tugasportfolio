// Hamburger Menu
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

// Scrool Up Button
var scrollToTopButton = document.getElementById("scrollToTopButton");
 
  scrollToTopButton.addEventListener("click", function () {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
          });
      });

// Fade In Animation
function fadeElementOnScroll() {
  var titles = document.querySelectorAll(".title");

  function updateOpacity() {
    titles.forEach(function (title) {
      var rect = title.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        title.style.opacity = "1"; 
      } else {
        title.style.opacity = "0"; 
      }
    });
  }

  function checkScroll() {
    window.requestAnimationFrame(updateOpacity); 
  }

  window.addEventListener("scroll", checkScroll);
  window.addEventListener("load", updateOpacity); 
}

fadeElementOnScroll();
