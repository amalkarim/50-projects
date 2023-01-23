const openMenu = document.querySelector('#openMenu');
const closeMenu = document.querySelector('#closeMenu');
const hamburger = document.querySelector('#hamburger');
const main = document.querySelector('main');
const nav = document.querySelector('nav');

openMenu.addEventListener('click', function() {
  hamburger.classList.add('rotate-90');
  main.classList.add('rotate-20');
  nav.classList.add('nav-open')
})

closeMenu.addEventListener('click', function() {
  hamburger.classList.remove('rotate-90');
  main.classList.remove('rotate-20');
  nav.classList.remove('nav-open')
})