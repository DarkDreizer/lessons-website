
import { getRoute } from "./router.js";

window.onpopstate = function(event) {
  getRoute(event.state.identifier);
}

const loader = '<div class="loader"><span>Cargando...</span></div>';
document.body.innerHTML = loader;

getRoute('log-in');

