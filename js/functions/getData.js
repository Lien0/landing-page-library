import { GET } from "../apis/books/get_books.js";
import { switchModal } from "./switchModal.js";

//Función que conecta con la api de books la cual obtiene la página del libro de la cuál se 
//necesita obtener la infomración.
export async function getData() {
  const params = new URLSearchParams(window.location.search);
  const param = params.get("book");
  const spaces = document.querySelectorAll(".spaces");
  const title = document.querySelector(".library_title");

  let data;


  //switch para obtener la categoría adecuada según la página en la que se navega.
  switch (param) {
    case "clasica":
      data = await GET("Literatura Clásica");
      break;
    case "matematicas":
      data = await GET("Ciencias Matemáticas");
      break;
    case "mexicana":
      data = await GET("Literatura Mexicana");
      break;
    case "lenguas":
      data = await GET("Lenguas Extranjeras");
      break;
    case "fotografia":
      data = await GET("Galerías de Fotos");
      break;
  }
  title.innerHTML = `
        <h2>
            ${data.categoria === null ? "Empty" : data.categoria}
        </h2>
    `;

  data.libros.map((el) => {
    spaces[1].innerHTML += `
        <div class="book">
           <p>${el.titulo === null ? "Empty" : el.titulo}</p>
        </div>
    `;
  });

  const bookBtns = document.querySelectorAll(".book");

  //Según los datos obtenidos y el libro seleccionado se envia la información a el modal.
  bookBtns.forEach((btn, index) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      switchModal(data.libros[index]);
    });
  });
}
