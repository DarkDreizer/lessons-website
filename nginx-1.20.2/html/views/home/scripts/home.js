import { lesson } from '../templates/lesson.js'

const navs = document.querySelectorAll('.main-nav span');
navs.forEach((nav) => {
  nav.addEventListener('mouseenter', (event) => {
    const selected = event.target;
    const menuContent = selected.querySelector('.sub-menu');
    if (menuContent) {
      menuContent.classList.add('sub-menu-open');
      document.body.addEventListener('mouseover', openMenu);
    }
  });
});

function openMenu(event) {
  const elementHoverClasses = event.target.classList;
  if (!(elementHoverClasses.contains('sub-menu') ||
   elementHoverClasses.contains('sub-menu-parent') ||
   elementHoverClasses.contains('sub-menu-option'))) {
    const openedMenu = document.querySelector('.sub-menu-open');
    openedMenu.classList.remove('sub-menu-open');
    document.body.removeEventListener('mouseover', openMenu);
  }
}

const newsContainer = document.querySelector('.news');

function loadNews() {
  const currentId = 1;
  const newLesson = lesson(currentId, 'HTML', 'Este es un curso de HTML', 'https://www.google.com');
  newsContainer.appendChild(newLesson.template);
}

loadNews();