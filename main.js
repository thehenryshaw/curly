'use strict';

const header = document.querySelector('.header');
const list = document.querySelector('.pages-list');
const links = Array.from(document.querySelectorAll('.pages-item__link'));
const signUpBtns = Array.from(document.querySelectorAll('.service-link'));
const signUp = document.querySelector('.header-service');

const showcaseSection = document.querySelector('.showcase');
const serviceSection = document.querySelector('.service');
const pricesSection = document.querySelector('.prices');
const contactsSection = document.querySelector('.contacts');

links.forEach(el => {
  el.addEventListener('click', (e) => {
    links.forEach(el => {
      el.classList.remove('active');
    })
    e.currentTarget.classList.add('active');
  })
})

list.addEventListener('click', event => {
  if(event.target.classList.contains('pages-list')) {
    return;
  }
  event.preventDefault();
  let top;

  switch (event.target.dataset.id) {
    case 'Услуги':
      top = serviceSection.offsetTop - 30;
      break;
    case 'Обо мне':
      top = pricesSection.offsetTop;
      break;
    case 'Контакты':
      top = contactsSection.offsetTop + 35;
      break;
  }
  window.scrollTo({
    top: top,
    behavior: 'smooth'
  })
})

signUpBtns.forEach(el => {
  el.addEventListener('click', event => {
    event.preventDefault();
    let top;
    if (event.target.dataset.id) {
      top = contactsSection.offsetTop;
    }
  
    window.scrollTo({
      top: top,
      behavior: 'smooth'
    })
  })
})

  signUp.addEventListener('click', event => {
    event.preventDefault();
    let top;
    if (event.target.dataset.id) {
      top = contactsSection.offsetTop;
    }
  
    window.scrollTo({
      top: top,
      behavior: 'smooth'
    })
  })


window.addEventListener('resize', () => {
  if(window.innerWidth < 760) {
    header.classList.remove('sticky');
  }
})
