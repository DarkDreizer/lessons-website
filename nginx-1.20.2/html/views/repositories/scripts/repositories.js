const list = document.querySelector('#repository-list');

function loadList() {
  fetch('shared/const/lessons.json')
    .then((lesson) => lesson.json())
    .then((lessonsObject) => renderList(extractRepositoryList(lessonsObject)));
}

loadList();

function extractRepositoryList(lessons) {
  const filteredList = lessons.filter((lesson) => lesson.rLink);
  return filteredList.map((lesson) => {
    const { id, title, rLink } = lesson;
    return {
      id,
      title,
      rLink
    }
  });
}

function renderList(extractedList) {
  list.innerHTML = '';
  extractedList.forEach((element) => {
    const newLi = document.createElement('li');
    newLi.innerHTML = `<a class="repository-${element.id}" href="${element.rLink}" target="_blank">${element.title}</a>`;
    list.appendChild(newLi);
  })
}