import { lessonServiceInit } from '../../../shared/services/lessons-service.js';
import { lesson } from '../../home/templates/lesson.js';
import { debounce } from '../../../shared/scripts/debounce.js';

const listLessonsDiv = document.querySelector('.list-lessons');
const searchLessons = document.querySelector('#lessons-search');
searchLessons.addEventListener('keyup', debounce((event) => searchByName(event), 1000));

async function loadListLessons() {
  const lessonsInfo = await lessonServiceInit.getLessons();
  renderLessons(lessonsInfo);
};

loadListLessons();

function searchByName(event) {
  const query = event.target.value.toLowerCase();
  const newList = lessonServiceInit.lessonsCache.filter((lesson) => lesson.title.toLowerCase().includes(query));
  renderLessons(newList);
}

function renderLessons(lessons) {
  listLessonsDiv.innerHTML = '';
  lessons.sort((aLesson, bLesson) => bLesson.id - aLesson.id);
  lessons.forEach((lessonData) => {
    const newLesson = lesson(lessonData);
    listLessonsDiv.appendChild(newLesson.template);
  });
}