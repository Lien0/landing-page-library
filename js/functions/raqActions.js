//Función que hace rotar los botones del RAQ, así como mostrar u ocultar las preguntas
//al dar click en el botón.
export function raqActions() {
  const btns = document.querySelectorAll(".quest_btn");
  const answers = document.querySelectorAll(".answer");

  btns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      /*Toggle es un switch lo activa si no esta activo y lo 
    desactiva si esta activo */
      btn.classList.toggle("quest-btn-flip");
      btn.classList.toggle("quest_content-sin-hover");
      answers[index].classList.toggle("answer-visible");
    });
  });
}
