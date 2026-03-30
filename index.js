import { smoothScroll } from "./js/functions/smoothScroll.js";
import { navActions } from "./js/functions/navActions.js";
import { raqActions } from "./js/functions/raqActions.js";
import { formValidator } from "./js/functions/formValidator.js";
import { mapRender } from "./js/functions/mapRender.js";

window.addEventListener("DOMContentLoaded", () => {
  initNavActions();
  initSmoothScroll();
  initMapRender();
  initRaqActions();
  initFormValidator();
});

//Importamos la funcion para hacer un smooth en el scroll de los links de navegación y lo inicializamos.
function initSmoothScroll() {
    smoothScroll();
}

//Importamos la función de las animaciones de la barra de navegación y lo inicializamos.
function initNavActions() {
  navActions();
}

//Importamos la función de las animaciones para el apartado de Reccurent Answer and Questions y lo inicializamos.
function initRaqActions() {
 raqActions();
}

//Importamos la función para validar el formulario de registro y lo inicializamos.
function initFormValidator() {
  formValidator();
}

//Importamos la función para renderizar el mapa y lo inicializamos
async function initMapRender(){
    //Función async y await porque importamos el mapa desde un archivo json.
    await mapRender();
}




