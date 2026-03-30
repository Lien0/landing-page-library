import { GET } from "../apis/books/get_books.js";
import { switchModal } from "./switchModal.js";

export async function getData() {
  const params = new URLSearchParams(window.location.search);
  const param = params.get("book");
  const spaces = document.querySelectorAll(".spaces");
  const title = document.querySelector(".library_title");

  let data;

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

  bookBtns.forEach((btn, index) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      switchModal(data.libros[index]);
    });
  });
}
