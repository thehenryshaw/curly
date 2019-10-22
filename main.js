'use strict';

const header = document.querySelector('.header');
const btn = document.querySelector('.bars-button');
const bars = document.querySelector('.header-bars__info');
const list = document.querySelector('.pages-list');
const links = Array.from(document.querySelectorAll('.pages-item__link'));
const signUpBtns = Array.from(document.querySelectorAll('.service-link'));

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
    case 'Главная':
      top = showcaseSection.offsetTop;
      break;
    case 'Услуги':
      top = serviceSection.offsetTop - 30;
      break;
    case 'Цены':
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



function closeDiv(openedElem) {
    if (openedElem && openedElem.style.display == 'block') {
        openedElem.style.display = 'none';
    }
};

function top_walker (node, test_func, last_parent) {
	while ( node && node !== last_parent ) {
		if ( test_func(node) ) {
			return node;
		}
		node = node.parentNode;
	}
}

document.documentElement.addEventListener('click', (event) => {
  if (event.target.classList.contains('bars-button') || event.target.parentElement.classList.contains('bars-button')) {
    bars.classList.toggle('hidden');
  } else {
    let isClickWithinOpenedDiv = top_walker(event.target, function (node) {
        return node === bars
      });

    if (!isClickWithinOpenedDiv) {
       bars.classList.add('hidden');
    } else {
      return;
    }
  }
})


let sticky = header.offsetTop;
header.classList.remove('sticky');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});


window.addEventListener('resize', () => {
  if(window.innerWidth < 760) {
    header.classList.remove('sticky');
  }
})
