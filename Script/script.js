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

// Icon Skills Animation
function handleSkillIcons(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const skillsIcon = entry.target;
      skillsIcon.style.opacity = 1;
      skillsIcon.style.transform = 'translateY(0)';
    } else {
      const skillsIcon = entry.target;
      skillsIcon.style.opacity = 0;
      skillsIcon.style.transform = 'translateY(50px)';
    }
  });
}

const skillsIcons = document.querySelectorAll('.skills-icon-animation');
skillsIcons.forEach((icon) => {
  const skillsIconObserver = new IntersectionObserver(handleSkillIcons, {
    root: null,
    rootMargin: '0px',
    threshold: 0, 
  });
  skillsIconObserver.observe(icon);
});

// Change Text Animation
const texts = ["Student", "Front End Developer", "Graphic Designer"];
let count = 0;
const textElement = document.querySelector("#profile .section__text__p2");

function changeText() {
  textElement.textContent = texts[count];
  count = (count + 1) % texts.length;
}

changeText(); 

setInterval(changeText, 1500);
