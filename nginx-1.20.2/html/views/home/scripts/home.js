import { lesson } from '../templates/lesson.js'

const lastLessonsDiv = document.querySelector('.last-lessons');

function loadLastNews() {
  fetch('views/home/const/lessons.json')
    .then((result) => result.json())
    .then((lessonsInfo) => {
      lastLessonsDiv.innerHTML = '';
      lessonsInfo.sort((aLesson, bLesson) => bLesson.id - aLesson.id);
      for (let i=0; i < 4; i++) {
        const newLesson = lesson(lessonsInfo[i]);
        lastLessonsDiv.appendChild(newLesson.template);
      }
    })
};

loadLastNews();
