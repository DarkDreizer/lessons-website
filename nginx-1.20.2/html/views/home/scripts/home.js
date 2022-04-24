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

const lastLessonsDiv = document.querySelector('.last-lessons');

function loadLastNews() {
  fetch('views/home/const/lessons.json')
    .then((result) => result.json())
    .then((lessonsInfo) => {
      lessonsInfo.sort((aLesson, bLesson) => bLesson.id - aLesson.id);
      for (let i=0; i < 4; i++){
        const newLesson = lesson(lessonsInfo[i]);
        lastLessonsDiv.appendChild(newLesson.template);
      }
    })  
}

loadLastNews();