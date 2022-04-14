export function lesson(id, title, description, link) {
  const container = document.createElement('div'); 
  container.innerHTML = `<h3>${title}</h3>
    <p>${description}</p>
    <a href="${link}">Leer mas</a>
  `;
  return {
    id,
    title,
    description,
    link,
    template: container
  }
}