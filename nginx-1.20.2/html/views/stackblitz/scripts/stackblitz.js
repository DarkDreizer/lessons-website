const list = document.querySelector('#stackblitz-list');
const iframeContainer = document.querySelector('#iframe-container');
const resetButton = document.querySelector('#close-active-stackblitz');

resetButton.addEventListener('click', () => {
  iframeContainer.innerHTML = '';
});

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
    newLi.innerHTML = `<a class="stack-${element.id} stack-link" target="_blank" href="${element.sLink}"> ${element.title} </a>`;
    list.appendChild(newLi);
  });

  const links = document.querySelectorAll('.stack-link');
  links.forEach((link) => link.addEventListener('click', (event) => {
    event.preventDefault();
    const source = event.target.href;
    const title = event.target.innerText;

    iframeContainer.innerHTML = `<iframe id="stackblitz-iframe" src="${source}" title="${title}" width="1800" height="1200"></iframe>`
  }));
}