import { mainRoutes } from "../const/routes.js";

export function getRoute(routeRef) {
  fetch(mainRoutes.get(routeRef).html)
  .then(template => template.text())
  .then(html => {
    loadPage(mainRoutes.get(routeRef), html, true);
    addNavHandlers();
  });
}


function loadPage(routeObject, html, replaceAll = false) {
  let target;
  if (replaceAll) {
    target = document.body;
  } else {
    document.querySelector('.site-content');
  }
  document.querySelector('#currentStyle').href = routeObject.style;
  document.querySelector('#pageTitle').innerText = routeObject.title;
  document.body.innerHTML = html;
  if (routeObject.script){
    const scripts = document.createElement('script');
    scripts.type = 'module';
    const timeStamp = new Date();
    scripts.src = routeObject.script + `?${timeStamp.getTime()}`;
    target.appendChild(scripts);
  }
  history.pushState(
    routeObject, 
    null, 
    routeObject.displayURL === 'index.html' ? new URL('http://127.0.0.1:5500/index.html') : routeObject.displayURL);
}

function addNavHandlers() {
  const navs = document.querySelectorAll('.nav-link');
  navs.forEach((nav) => {
    nav.addEventListener('click', (event) => {
      event.preventDefault();
      const anchor = event.target;
      const hrefArray = anchor.href.split('/');
      const route = hrefArray[hrefArray.length - 1];
      getRoute(route);
    })
  })
}