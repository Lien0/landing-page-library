//Obtenemos los datos del json para obtener el mapa, sol oretornamos el mapa.
export async function GetMap() {
  const url = "./data/bookData.json";
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.log("Error");
      throw new Error('Error', res.status);
    }
    const result = await res.json();
    return result.libreria.ubicación;
  } catch (error) {
    console.log("Error");
    console.log(error);
  }
}
