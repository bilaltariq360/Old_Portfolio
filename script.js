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
let mobileMenuIcon = document.querySelector(".mobile-menu-icon");
let nav = document.querySelector("header nav");

mobileMenuIcon.addEventListener("click", () => {
  nav.classList.toggle("show");
});

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};
