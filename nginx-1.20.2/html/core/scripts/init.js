
import { getRoute } from "./router.js";

window.onpopstate = function(event) {
  getRoute(event.state.identifier, true);
}

document.cookie = 'SameSite=None'

let routeToLoad;
switch(window.location.pathname){
  case '/':
    routeToLoad = 'log-in';
    break;
  case '/home':
    routeToLoad = 'home';
    break;
  default:
    routeToLoad = 'not-found';
}

const loader = '<div class="loader"><span>Cargando...</span></div>';
document.body.innerHTML = loader;

getRoute(routeToLoad);

