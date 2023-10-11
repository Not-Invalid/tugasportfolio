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
function fadeInOnScroll() {
  var titles = document.querySelectorAll(".title");

function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function checkScroll() {
    titles.forEach(function (title) {
      if (isElementInViewport(title)) {
        title.style.opacity = "1";
      }
    });
}

  window.addEventListener("scroll", checkScroll);
  checkScroll(); 
}

window.addEventListener("load", fadeInOnScroll);