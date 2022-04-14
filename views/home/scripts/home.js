import { lesson } from '../templates/lesson.js'

const newsContainer = document.querySelector('.news');

function loadNews() {
  const currentId = 1;
  const newLesson = lesson(currentId, 'HTML', 'Este es un curso de HTML', 'https://www.google.com');
  newsContainer.appendChild(newLesson.template);
}

loadNews();