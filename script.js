const words = ["Flutter", "MERN Stack", ".NET FRAMEWORK", "UI Designer"];
let currentWordIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let typewriterText = "";
const typewriterElement = document.getElementById("typewriter");

function typewriterEffect() {
  const word = words[currentWordIndex];
  if (!isDeleting) {
    typewriterText = word.substring(0, currentCharIndex + 1);
    currentCharIndex++;
  } else {
    typewriterText = word.substring(0, currentCharIndex - 1);
    currentCharIndex--;
  }

  typewriterElement.textContent = typewriterText + "|";

  if (!isDeleting && typewriterText === word) {
    isDeleting = true;
    setTimeout(typewriterEffect, 1000); // Wait before deleting
  } else if (isDeleting && typewriterText === "") {
    isDeleting = false;
    currentWordIndex++;
    if (currentWordIndex >= words.length) {
      currentWordIndex = 0;
    }
    setTimeout(typewriterEffect, 500); // Wait before typing next word
  } else {
    setTimeout(typewriterEffect, 100); // Type each character
  }
}

typewriterEffect(); // Start the typewriting animation

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
let mobileMenuIconBar = document.querySelector(".mobile-menu-icon");
let nav = document.querySelector("header nav");
let header = document.querySelector("header");
let menuToogle = false;

mobileMenuIconBar.addEventListener("click", () => {
  nav.classList.toggle("show");
  if (!menuToogle) {
    menuToogle = !menuToogle;
    mobileMenuIconBar.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  } else {
    menuToogle = !menuToogle;
    mobileMenuIconBar.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
});
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.toggle("show");
    if (!menuToogle) {
      menuToogle = !menuToogle;
      mobileMenuIconBar.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
      menuToogle = !menuToogle;
      mobileMenuIconBar.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
  });
});
window.addEventListener("scroll", function () {
  header.classList.toggle("scroll", window.scrollY > 0);
});
