const list = document.querySelector('#stackblitz-list');

function loadList() {
  fetch('shared/const/lessons.json')
    .then((lesson) => lesson.json())
    .then((lessonsObject) => renderList(extractStacktblitzList(lessonsObject)))
}

loadList();

function extractStacktblitzList(lessons) {
  const filteredList = lessons.filter((lesson) => lesson.sLink);
  return filteredList.map((lesson) => {
    const { id, title, sLink} = lesson;
    return {
      id,
      title,
      sLink
    }
  });
}

function renderList(extractedList) {
  list.innerHTML = '';
  extractedList.forEach((element) => {
    const newLi = document.createElement('li');
    newLi.innerHTML = `<a class="stack-${element.id}" target="_blank" href="${element.sLink}"> ${element.title} </a>`;
    list.appendChild(newLi);
  });
}