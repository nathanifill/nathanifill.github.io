// VARIABLES

const skillsGrid = document.getElementById("skills-grid");
const profileImg = document.getElementById("profile-img");
const aboutSection = document.getElementById("about");
const headings = document.querySelectorAll(".heading--secondary");
const copyrightDate = document.getElementById("copyright-date");
const modalElement = document.querySelector(".modal");
const modalOverlay = document.querySelector(".modal__overlay");
const modalText = document.querySelector(".modal__text");

// FUNCTIONS

// show modal with specified text
function showModal(text = "Something went wrong.") {
  setModalText(text);
  toggleModal();
}

// toggle showing model and turning it off
function toggleModal() {
  modalElement.classList.toggle("modal--hidden");
}

// set modal text
function setModalText(text) {
  modalText.innerText = text;
}

// sends date to copyright section in footer
function setCopyrightDate() {
  const d = new Date();
  copyrightDate.innerText = d.getFullYear();
}

setCopyrightDate();

// animates skills grid, depending on screen position
function animateSkillsGrid() {
  const offset = 500; // number of pixels to show before animating skills grid

  toggleActivatedClass(skillsGrid, offset);
}

// animates profile image, depending on screen position
function animateProfileImg() {
  const offset = 200; // number of pixels to show before animating skills grid

  toggleActivatedClass(profileImg, offset);
}

// animates about section, depending on screen position
function animateAboutSection() {
  const offset = 200; // number of pixels to show before animating skills grid

  toggleActivatedClass(aboutSection, offset);
}

function animateHeaderUnderline() {
  const offset = 100;

  headings.forEach((heading) => {
    toggleActivatedClass(heading, offset);
  });
}

function toggleActivatedClass(el, offset) {
  if (
    el.getBoundingClientRect().top <=
    (window.innerHeight || document.documentElement.clientHeight) - offset
  ) {
    el.classList.add("activated");
  } else {
    el.classList.remove("activated");
  }
}

function runAllAnimations() {
  animateSkillsGrid();
  animateProfileImg();
  animateAboutSection();
  animateHeaderUnderline();
}

let shouldItWait = false; // sets the wait check to false so it runs first time

// runs function after waiting for a set amount of milliseconds
const waitFunction = (callback, time) => {
  if (shouldItWait) {
    return;
  }

  shouldItWait = true;

  // wait until time and then run callback function
  setTimeout(() => {
    callback(); // call callback function
    shouldItWait = false; // sets wait check to false
  }, time);
};

// EVENT LISTENERS

window.addEventListener("scroll", () => {
  waitFunction(runAllAnimations, 300);
});

modalOverlay.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target === modalOverlay) {
    toggleModal();
  }
});
