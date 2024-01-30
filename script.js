document.addEventListener("contextmenu", () => {
  event.preventDefault();
});
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
    setTimeout(typewriterEffect, 1000);
  } else if (isDeleting && typewriterText === "") {
    isDeleting = false;
    currentWordIndex++;
    if (currentWordIndex >= words.length) {
      currentWordIndex = 0;
    }
    setTimeout(typewriterEffect, 500);
  } else {
    setTimeout(typewriterEffect, 100);
  }
}

typewriterEffect();

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
let mobileMenuIconBar = document.querySelector(".mobile-menu-icon");
let themeIcon = document.getElementById("theme-mode");
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

function themeMode() {
  var root = document.documentElement;
  if (themeIcon.classList.contains("fa-sun")) {
    themeIcon.classList.remove("fa-regular");
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-solid");
    themeIcon.classList.add("fa-moon");
    root.style.setProperty("--primary-color", "#D9C9FF");
    root.style.setProperty("--supportive-color", "#6B6CAE");
    root.style.setProperty("--secondary-color", "#383838");
    root.style.setProperty("--hover-color", "#D9C9FF");
    let articleBodyH2 = document.querySelectorAll("article h2");
    articleBodyH2.forEach((articleBody) => {
      articleBody.style.color = "#383838";
    });
    let articleBodyI = document.querySelectorAll("article i");
    articleBodyI.forEach((articleBody) => {
      articleBody.style.color = "#383838";
    });
    let articleBodyP = document.querySelectorAll("article p");
    articleBodyP.forEach((articleBody) => {
      articleBody.style.color = "#383838";
    });
  } else {
    themeIcon.classList.remove("fa-solid");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-regular");
    themeIcon.classList.add("fa-sun");
    root.style.setProperty("--primary-color", "#080808");
    root.style.setProperty("--supportive-color", "#426edc");
    root.style.setProperty("--secondary-color", "#ffffff84");
    root.style.setProperty("--hover-color", "#b8ccff");
  }
}

function emailSend() {
  let senderName = document.getElementById("name").value;
  let senderEmail = document.getElementById("email").value;
  let senderMobile = document.getElementById("mobile").value;
  let sendermessage = document.getElementById("message").value;

  let messageBody =
    "Name: " +
    senderName +
    "<br/>Email: " +
    senderEmail +
    "<br/>Mobile: " +
    senderMobile +
    "<br/><br/>" +
    sendermessage +
    "<br/><br/><br/><br/>";
  if (senderMobile.length < 11) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please enter correct mobile number!",
      confirmButtonColor: "#426edc",
    });
    return;
  } else if (sendermessage.length < 10) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please enter a valid message! At least 10 characters.",
      confirmButtonColor: "#426edc",
    });
    return;
  }
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "hafizbilaltariq360@gmail.com",
    Password: "DA7FD3A8D24E8D37896164AA5A758F075C58",
    To: "f219243@cfd.nu.edu.pk",
    From: "hafizbilaltariq360@gmail.com",
    Subject: senderName,
    Body: messageBody,
  }).then((message) => {
    if (message === "OK") {
      Swal.fire({
        title: "Message Sent!",
        text: "I'll reply you within 24 hours!",
        icon: "success",
        confirmButtonColor: "#426edc",
      });
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("mobile").value = "";
      document.getElementById("message").value = "";
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        confirmButtonColor: "#426edc",
      });
    }
  });
}
