// VARIABLES

const skillsGrid = document.getElementById('skills-grid');
const profileImg = document.getElementById('profile-img');
const aboutSection = document.getElementById('about');
const headings = document.querySelectorAll('.heading--secondary');

// FUNCTIONS

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
    if (el.getBoundingClientRect().top <= ((window.innerHeight || document.documentElement.clientHeight) - offset)) {
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
}

// EVENT LISTENERS

window.addEventListener('scroll', () => {
    waitFunction(runAllAnimations, 300);
})

