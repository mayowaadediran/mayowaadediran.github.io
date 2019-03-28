import pages  from "./pages.js";

const mobileToggle = document.getElementById('mobile-nav-toggle');
const navBar = document.getElementById('nav-links');
const navLinks = document.querySelectorAll(".link")
let main = document.getElementById("main");



function toggleNav() {
  mobileToggle.classList.toggle('open');
  navBar.classList.toggle('mobile-control');
}

function removeMobileNav() {
  if (mobileToggle.classList.contains('open')) {
    mobileToggle.classList.remove('open');
    navBar.classList.remove('mobile-control');
  }
}

function checkActiveLink () {
  for (var i = 0; i < navLinks.length; i++) {
    if (navLinks[i].classList.contains('active-link') ){
      navLinks[i].classList.remove('active-link')
    }
  }
}

function addActiveLink () {
  this.classList.add('active-link');
}

mobileToggle.addEventListener('click', toggleNav);
window.addEventListener('resize', removeMobileNav);
window.addEventListener('hashchange', function() {
  let x = location.hash
  let currentHash = x.substring(1);
  let currentTag = document.getElementById(`${currentHash}`);
  let page = pages[currentHash];
  if (currentTag === null) {
    main.innerHTML = "";
    main.innerHTML = page;
  }
})
window.addEventListener('hashchange', function() {
  for (var i = 0; i < navLinks.length; i++) {
    if (navLinks[i].classList.contains('active-link')) {
      navLinks[i].classList.remove('active-link');
    }
  }
})

window.addEventListener('hashchange', function () {
  for (var i = 0; i < navLinks.length; i++) {
    if (navLinks[i].hash === location.hash) {
      navLinks[i].classList.add('active-link');
    }
  }
})


navLinks.forEach(link => {
  link.addEventListener('click', removeMobileNav);
  link.addEventListener('click', checkActiveLink);
  link.addEventListener('click', addActiveLink);
});




//on hash change
//main.innerhtml will have the pages.splicethefirstcharacter of the hash