// This code block creates a nav list dynamically
const navList = document.querySelector('.nav-menu');
const navMenu = ['Home',
    'About',
    'Plans',
    'Register'];
const navMenuContainer = document.querySelector('.nav-menu') ;  

// code fragment to help with performance of website
const fragment = new DocumentFragment();

navMenu.forEach(function (navItem) {
   const navLink = document.createElement('li');
   navLink.innerHTML = navItem;
   navLink.setAttribute('id', `${navItem}-link`);
   navLink.setAttribute('class', 'current');
   fragment.appendChild(navLink);

})

navList.appendChild(fragment);

// scroll into view slowly
navMenuContainer.addEventListener('click', function(e) {
  const sectionId = e.target.innerHTML;
  const section = document.querySelector(`#${sectionId}`);
  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
  

// get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");
//console.log(sections);

// add an event listener listening for scroll
window.addEventListener("scroll", navHighlighted);

function navHighlighted() {
  
  // get current scroll position
  let scrollY = window.pageYOffset;
  
  // loop through sections to get height, top and ID values for each
  sections.forEach(function(s){
    const sectionHeight = s.offsetHeight;
    const sectionTop = s.offsetTop-30;
    sectionID = s.getAttribute("id");
    
    /*
    - if the current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - to know which link needs an active class, use sectionId variable we are getting while looping through sections as an selector
    */
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(`#${sectionID}-link`).classList.add("active");
    } else {
      document.querySelector(`#${sectionID}-link`).classList.remove("active");
    }
  });
}

/*Apply a css rule that makes the nav sticky when scrolling */
document.addEventListener('scroll', function () {
 
  function changeNav() {
      if (window.scrollY >= 1) {
          document.body.classList.add('sticky');
      } else {
          document.body.classList.remove('sticky');
      }
  }

  document.addEventListener('scroll', changeNav)
});