import { getData } from "../js/functions/getData.js";

window.addEventListener('DOMContentLoaded', () => {
  initGetData();
});

//Importamos la función para obtener los datos cada que entramos a la página de cada sección
async function initGetData(){
  //Función async y await porque importamos los archivos desde un json.
  await getData();
}

