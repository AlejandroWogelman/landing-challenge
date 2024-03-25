const nav__button = document.querySelector('#nav__button');
const nav__ul = document.querySelector('.nav__ul');
const nav__li = document.querySelectorAll('.nav__li');

/* URL IMAGES */
const nav__iconOpen = './assets/menu-icon.svg';
const nav__iconClose = './assets/close-icon.svg';

/* Function for change img and remove class */
function closeBurgerMenu() {
  nav__ul.classList.remove('nav__toggle');
  nav__button.setAttribute('src', nav__iconOpen);
}

nav__button.addEventListener('click', (e) => {
  nav__ul.classList.toggle('nav__toggle');

  if (nav__ul.classList.contains('nav__toggle')) {
    nav__button.setAttribute('src', nav__iconClose);
  } else {
    nav__button.setAttribute('src', nav__iconOpen);
  }
});

window.addEventListener('resize', () => {
  const width = window.innerWidth;
  if (width > 767) {
    closeBurgerMenu();
    nav__li.forEach((li) =>
      li.addEventListener('click', () => {
        closeBurgerMenu();
      })
    );
  }
});
