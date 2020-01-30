'use strict';

const header = document.querySelector('.header');
const list = document.querySelector('.pages-list');
const links = Array.from(document.querySelectorAll('.pages-item__link'));
const signUpBtns = Array.from(document.querySelectorAll('.service-link'));
const signUp = document.querySelector('.header-service');

const serviceSection = document.querySelector('.service');
const aboutSection = document.querySelector('.about');
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
    case 'Курсы':
      top = serviceSection.offsetTop - 30;
      break;
    case 'О нас':
      top = aboutSection.offsetTop;
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
