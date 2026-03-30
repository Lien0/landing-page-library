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

function initSmoothScroll() {
    smoothScroll();
}

function initNavActions() {
  navActions();
}

function initRaqActions() {
 raqActions();
}

function initFormValidator() {
  formValidator();
}

async function initMapRender(){
    await mapRender();
}




