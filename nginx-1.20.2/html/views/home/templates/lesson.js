export function lesson(lessonObject) {
  const { id, title, description, pLink, rLink, sLink, additional } = lessonObject;
  const container = document.createElement('div');
  container.id = id;
  container.innerHTML = `<h3>${title}</h3>
    <p>${description}</p>
  `;
  if (pLink) {
    container.appendChild(createLink('Presentación', 'presentation', pLink));
  }
  if (rLink) {
    container.appendChild(createLink('Repositorio', 'repository', rLink));
  }
  if (sLink) {
    container.appendChild(createLink('Stack Blitz', 'stack-blitz', sLink));
  }
  if (additional && additional.length){
    additional.forEach((aLink) => {
      container.appendChild(createLink(aLink.title, 'additional', aLink.link))
    })
  }
  return {
    ...lessonObject,
    template: container
  }
}

function createLink(text, classText, href) {
  const element =  document.createElement('a');
  element.innerText = text;
  element.classList.add(classText);
  element.href = href;
  element.target = '_blank'
  return element;
}