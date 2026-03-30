export function switchModal(book) {
  const main = document.querySelector(".main_modal");
  console.log(book);

  main.innerHTML = `
         <article class="modal_book">
          <div class="modal_container">
            <div class="modal_container-book">
              <div class="modal_page-left">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
                  voluptates magnam illum porro ipsa! Vel numquam obcaecati
                  consectetur molestiae quos fugiat nobis ducimus quae expedita
                  non, perferendis odit, magni nihil?
                </p>
              </div>
              <div class="modal_page-right">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  corporis animi eaque et enim accusamus ad dolores quis quod
                  reiciendis, libero mollitia, fugiat aut consequatur ex iusto?
                  Voluptas, ut unde?
                </p>
              </div>
            </div>
            <div class="modal_container-data">
              <div class="data_book-content">
                <div class="data_book-portrait"></div>
                <div class="data_book-information">
                  <div class="information_title">
                    <h2>${book.titulo}</h2>
                    <h3>${book.autor}</h3>
                  </div>
                  <div class="information_price">
                    <p>Libros disponibles: ${book.stock}</p>
                    <p>Precio: $ ${book.precio}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
            `;
  const modalOut = document.querySelector(".modal_book");
  if (!modalOut) return;

  modalOut.addEventListener("click", () => {
    main.innerHTML = `
        `;
  });
}
