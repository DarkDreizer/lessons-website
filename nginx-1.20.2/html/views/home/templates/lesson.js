export function lesson(lessonObject) {
  const { id, video, title, description, pLink, rLink, sLink, additional } = lessonObject;
  const container = document.createElement('div');
  container.id = id;
  container.classList.add('unit-lesson');
  if (video) {
    container.appendChild(createIframeVideo(video, title));
  }
  const headerTitle = document.createElement('h3');
  headerTitle.innerText = title;
  const descriptionText = document.createElement('p');
  descriptionText.innerText = description;
  container.appendChild(headerTitle);
  container.appendChild(descriptionText);

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

function createIframeVideo(src, title) {
  const iframeWidth = ((window.innerWidth - 80) / 4) - 20;
  const iframe = document.createElement('iframe');
  iframe.src = src;
  iframe.title = title;
  iframe.frameborder = 0;
  iframe.allow = "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;";
  iframe.width = iframeWidth;
  return iframe;
}