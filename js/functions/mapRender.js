import { GetMap } from "../apis/maps/get_map.js";


//Función con consumo de la api para obtener el mapa, se incrusta el mapa en el DOM.
export async function mapRender() {
  const ubicacion = await GetMap();
  const container = document.querySelector('.map');
  container.innerHTML = ubicacion;
}
