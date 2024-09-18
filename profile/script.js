const hamburger = document.querySelector('.humberger');
const navLinks = document.querySelector('.nav-items');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const filterBtn = document.querySelector('.filter-toggle');
const aside = document.querySelector('.aside-bar');
filterBtn.addEventListener('click', () => {
  aside.classList.toggle('filter-btn');
})

const filterclose = document.querySelector('.filter-close');
filterclose.addEventListener('click', () => {
  aside.classList.toggle('filter-btn');
})