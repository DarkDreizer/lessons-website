import { mainRoutes } from "../const/routes.js";

export function getRoute(routeRef, hMove= false, firstLoad) {
  const currentRoute = window.location.pathname;
  if(!currentRoute.includes(routeRef) || firstLoad) {
    fetch(mainRoutes.get(routeRef).html)
    .then(template => template.text())
    .then(html => {
      loadPage(mainRoutes.get(routeRef), html, mainRoutes.get(routeRef).replace, hMove);
    });
  }
}


async function loadPage(routeObject, html, replaceAll = false, hMove) {
  let target;
  if (replaceAll) {
    target = document.body;
  } else {
    const content = document.querySelector('.site-content');
    if(!content){
      await buildNavigation()
        .then(() => {
          target = document.querySelector('.site-content');
        });
    } else {
      target = content;
    }
  }
  document.querySelector('#currentStyle').href = routeObject.style;
  document.querySelector('#pageTitle').innerText = routeObject.title;
  target.innerHTML = html;
  if (routeObject.script){
    const scripts = document.createElement('script');
    scripts.type = 'module';
    const timeStamp = new Date();
    scripts.src = routeObject.script + `?${timeStamp.getTime()}`;
    target.appendChild(scripts);
  }
  if (!hMove){  
    history.pushState(
      routeObject, 
      '', 
      routeObject.displayURL);
  }
  addNavHandlers();
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

async function buildNavigation() {
  const body = document.body;
  await fetch('../../shared/templates/top-bar.html')
          .then((html) => html.text())
          .then((htmlText) => body.innerHTML = htmlText);
  await fetch('../../shared/templates/nav-bar.html')
          .then((html) => html.text())
          .then((htmlText) => {
            const navSection = document.createElement('section');
            navSection.innerHTML = htmlText;
            body.appendChild(navSection);
          });
  return new Promise((resolve) => {
    const contentSection = document.createElement('section');
    contentSection.classList.add('site-content');
    body.appendChild(contentSection);
    resolve();
  })
}