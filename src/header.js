// header media 357 and 768
const burgerOpen = document.querySelector('.header-burger-open');
const links = document.querySelector('.header-links');
const burgerClose = document.querySelector('.header-burger-close');
const hero = document.querySelector('.hero-container');
const heroSection = document.querySelector('.hero');
const logo = document.querySelector('.header-logo');
const mediaQuery = window.matchMedia('(min-width: 768px)');

function openModal() {
  links.classList.add('is-open');
  burgerOpen.classList.add('is-close');
  burgerClose.classList.remove('is-close');
  hero.classList.add('visually-hidden');

  if (mediaQuery) {
    logo.classList.add('open-menu');
    heroSection.classList.add('header-open-menu');
  }
}

function closeModal() {
  links.classList.remove('is-open');
  burgerOpen.classList.remove('is-close');
  burgerClose.classList.add('is-close');
  hero.classList.remove('visually-hidden');

  if (mediaQuery) {
    heroSection.classList.remove('header-open-menu');
    logo.classList.remove('open-menu');
  }
}

burgerClose.addEventListener('click', closeModal);
burgerOpen.addEventListener('click', openModal);
