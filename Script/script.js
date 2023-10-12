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


// Function to handle the intersection observer callback
// Function to handle the intersection observer callback for skills icons
function handleSkillIcons(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const skillsIcon = entry.target;
      skillsIcon.style.opacity = 1;
      skillsIcon.style.transform = 'translateY(0)';
    } else {
      const skillsIcon = entry.target;
      skillsIcon.style.opacity = 0;
      skillsIcon.style.transform = 'translateY(50px)'; // Sesuaikan dengan animasi keluar yang diinginkan
    }
  });
}

// Set up the intersection observer for skills icons
const skillsIcons = document.querySelectorAll('.skills-icon-animation');
skillsIcons.forEach((icon) => {
  const skillsIconObserver = new IntersectionObserver(handleSkillIcons, {
    root: null,
    rootMargin: '0px',
    threshold: 0, // Tidak diperlukan threshold dalam kasus ini
  });
  skillsIconObserver.observe(icon);
});

