import { lessonServiceInit } from '../../../shared/services/lessons-service.js';
import { lesson } from '../templates/lesson.js'

const lastLessonsDiv = document.querySelector('.last-lessons');

async function loadLastLessons() {
  const lessonsInfo = await lessonServiceInit.getLessons();
  lastLessonsDiv.innerHTML = '';
  lessonsInfo.sort((aLesson, bLesson) => bLesson.id - aLesson.id);
  for (let i=0; i < 4; i++) {
    const newLesson = lesson(lessonsInfo[i]);
    lastLessonsDiv.appendChild(newLesson.template);
  }
};

loadLastLessons();
