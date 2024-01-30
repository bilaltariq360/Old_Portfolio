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
sendCheck = false;
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
      text: "Please enter valid message! At least than 10 characters.",
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
        text: "I will repond you in 24 hours!",
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
