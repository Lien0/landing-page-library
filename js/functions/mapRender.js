import { GetMap } from "../apis/maps/get_map.js";


export async function mapRender() {
  const ubicacion = await GetMap();
  const container = document.querySelector('.map');
  container.innerHTML = ubicacion;
}
