const darkmode__container = document.querySelector('.darkmode__container');
const darkmode__img = document.querySelector('.darkmode__img');
const body = document.querySelector('body');

const sun = '/assets/sun-icon.svg';
const moon = '/assets/moon-icon.svg';

const actualMode = JSON.parse(window.localStorage.getItem('darkmode'));

function darkOn() {
  darkmode__img.setAttribute('src', moon);
  body.classList.add('darkmode');
  window.localStorage.setItem('darkmode', JSON.stringify({ darkmode: true }));
}
function darkOff() {
  darkmode__img.setAttribute('src', sun);
  body.classList.remove('darkmode');
  window.localStorage.setItem('darkmode', JSON.stringify({ darkmode: false }));
}

if (actualMode.darkmode) {
  darkOn();
} else {
  darkOff();
}

darkmode__container.addEventListener('click', () => {
  if (!body.classList.contains('darkmode')) {
    darkOn();
  } else {
    darkOff();
  }
});
