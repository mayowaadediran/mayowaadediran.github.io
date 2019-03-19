//Mobile Toggle
const mobileToggle = document.getElementById('mobile-nav-toggle');
const mobileNav = document.getElementById('mobile-nav__control');

//target mobile nav toggle on click
mobileToggle.addEventListener('click', event => {
  mobileToggle.classList.toggle('open');
  mobileNav.classList.toggle('mobile-control')
});

  //Toggle open classes 
    //add open class to mobile nav toggle
      //rotate the hamburger
    //add open to mobile -links 
      //the transform move to 0%;