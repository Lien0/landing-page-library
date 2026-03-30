//Función para actualizar las acciones que se hacen en los links de navegación
//estos links se muestran de distinta forma tanto para dispositivos móviles como para 
//monitores grandes, creando un responsive adecuado para la página sin sacrificar 
//funcionalidad y diseño.
export function navActions() {
  let flag = 0;

  actions();
  function debounce(func, delay) {
    let timer;

    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
    };
  }
  function actions() {
    const width = window.innerWidth;
    if (width >= 1100) {
      const navBtn = document.querySelector("#navBtn");
      navBtn.classList.remove("nav-btn-visible");
      navBtn.classList.add("nav-btn-invisible");
      const headerLinks = document.querySelector(".nav_links");
      headerLinks.classList.add("nav-links-visible");
      headerLinks.classList.remove("nav-links-invisible");
    } else if (width <= 1100) {
      const navBtn = document.querySelector("#navBtn");
      navBtn.classList.remove("nav-btn-invisible");
      navBtn.classList.add("nav-btn-visible");
      const headerLinks = document.querySelector(".nav_links");
      headerLinks.classList.add("nav-links-invisible");
      headerLinks.classList.remove("nav-links-visible");
    }
  }
  //Creamos un debounce para retrasar la lectura de la actualización de la ventana
  //evitamos consumir recursos inecesarios y tras ms de no realizar la accón se actualiza
  //la ventana con el nuevo tamaño
  const screener = debounce(actions, 100);
  //Obtenemos el tamaño de la ventana para así poder saber que estilo se asignara a
  //la barra de navegación.
  window.addEventListener("resize", screener);
  const navBtn = document.querySelector("#navBtn");
  if (!navBtn) return;
  
  navBtn.addEventListener("click", () => {
    console.log(flag);
    if (flag === 0) {
      actions1();
      flag = 1;
    } else {
      actions2();
      flag = 0;
    }
  });

  function actions1() {
    const headerLinks = document.querySelector(".nav_links");
    headerLinks.classList.add("nav-links-visible");
    headerLinks.classList.remove("nav-links-invisible");
  }
  function actions2() {
    const headerLinks = document.querySelector(".nav_links");
    headerLinks.classList.add("nav-links-invisible");
    headerLinks.classList.remove("nav-links-visible");
  }
}
