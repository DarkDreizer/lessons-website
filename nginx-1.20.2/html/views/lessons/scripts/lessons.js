import { lessonServiceInit } from '../../../shared/services/lessons-service.js';
import { lesson } from '../../home/templates/lesson.js';
import { debounce } from '../../../shared/scripts/debounce.js';

const listLessonsDiv = document.querySelector('.list-lessons');
const searchLessons = document.querySelector('#lessons-search');
const filterSelect = document.querySelector('#category');
searchLessons.addEventListener('keyup', debounce((event) => searchByName(event.target.value), 1000));
filterSelect.addEventListener('change', (event) => filterLessons(event.target.value));

async function loadListLessons() {
  const lessonsInfo = await lessonServiceInit.getLessons();
  const categories = new Set();
  lessonsInfo.forEach((lesson) => {
    lesson.category.forEach((category) => {
      categories.add(category);
    });
  });
  lessonServiceInit.categories = categories;
  renderLessons(lessonsInfo);
  renderOptions();
};

loadListLessons();

function searchByName(queryValue, preFilterList) {
  const query = queryValue.toLowerCase();
  let newList;
  if (!preFilterList) {
    newList = lessonServiceInit.lessonsCache.filter((lesson) => lesson.title.toLowerCase().includes(query));
    filterLessons(filterSelect.value, newList);
  } else {
    newList = preFilterList.filter((lesson) => lesson.title.toLowerCase().includes(query));
    renderLessons(newList);
  }
}

function filterLessons(filterValue, preSearchList) {
  const selectedFilter = filterValue;
  let newList;
  if (!preSearchList) {
    newList = selectedFilter === 'todas' ? 
    lessonServiceInit.lessonsCache : 
    lessonServiceInit.lessonsCache.filter((lesson) => lesson.category.map((category) => category.toLowerCase()).includes(selectedFilter));
    searchByName(searchLessons.value, newList);
  } else {
    newList = selectedFilter === 'todas' ? 
    preSearchList : 
    preSearchList.filter((lesson) => lesson.category.map((category) => category.toLowerCase()).includes(selectedFilter));
    renderLessons(newList);
  }
}

function renderLessons(lessons) {
  listLessonsDiv.innerHTML = '';
  lessons.sort((aLesson, bLesson) => bLesson.id - aLesson.id);
  lessons.forEach((lessonData) => {
    const newLesson = lesson(lessonData);
    listLessonsDiv.appendChild(newLesson.template);
  });
};

function renderOptions() {
  const select = document.querySelector('#category')
  const lessonsCategories = lessonServiceInit.categories;
  lessonsCategories.forEach((option) => {
    const newOption = document.createElement('option');
    newOption.value = option.toLowerCase();
    newOption.innerText = option;
    select.appendChild(newOption);
  });
}