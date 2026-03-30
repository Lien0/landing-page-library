export async function GET(req) {
  const url = "../data/bookData.json";
  try {
    const response = await fetch(url);
    if (!response.ok)
      throw new Error("Error al pedir los datos: ", response.status);

    const result = await response.json();
    let data;
    result.libreria.secciones.map((el) => {
        if(el.categoria === req){
            data = {
                'libros': el.libros,
                'categoria': el.categoria,
                'descripcion':el.descripcion
            }
        }
    });
    return data;
  } catch (error) {
    console.error("Error al intentar acceder.");
  }
}
