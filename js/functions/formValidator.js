//Función para validar los datos del formulario.
export function formValidator() {
  const form = document.querySelector(".form");
  const content = document.querySelectorAll(".form_content");
  let error = "";
  let timer;

  form.addEventListener("submit", (e) => {
    //Evitamos el comportamiento por defecto al hacer submit
    //y obtenemos los datos que se envián en los input.
    e.preventDefault();
    const name = document.querySelector("#name").value;
    const tel = document.querySelector("#tel").value;
    const email = document.querySelector("#mail").value;
    content[0].innerHTML = `
    <label for="name">Nombre:</label
                ><input type="text" id="name" placeholder="Nombre completo" />
    `;
    content[1].innerHTML = `
    <label for="tel">Teléfono:</label
                ><input type="tel" id="tel" placeholder="4455223311" />
    `;
    content[2].innerHTML = `
     <label for="mail">Correo:</label
                ><input type="email" id="mail" placeholder="name@mail.com" />
    `;
    if (name.length < 3 || !name) {
      content[0].innerHTML += `
            <p style="font-size: 10px; color: red; height: 10px;">
                Nombre inválido.
            </p>
        `;
      return;
    }
    //Hacemos una comprobación con una función para revisar el teléfono.
    if (!telValidator(tel)) {
      content[1].innerHTML += `
            <p style="font-size: 10px; color: red; height: 10px;">
                Número inválido, solo números y 10 dígitos.
            </p>
        `;
      return;
    }
    //Hacemos una comparación con una función para revisar el correo.
    if (!emailValidator(email)) {
      content[2].innerHTML += `
            <p style="font-size: 10px; color: red; height: 10px;">
                Correo inválido: formato name@mail.com.
            </p>
        `;
      return;
    }

    //Hacemos reset en los valores del formulario.
    form.reset();
    //Consumimos los datos.
    console.log(`Nombre: ${name}, Teléfono: ${tel}, Correo: ${email}`);
    //Mostramos un mensaje al usuario de la información enviada con éxito.
    form.innerHTML += `
     <p style="color: green;">¡ Informacion enviada !</p>
    `;
    clearTimeout(timer);
    timer = setTimeout(() => clearFormat(form), 3000);
    return;
  });
}

//Función para validar teléfono.
function telValidator(tel) {
  if (Number(tel) && tel.length === 10) {
    return true;
  }
  return false;
}

//Función para validar correo con RegEx
function emailValidator(email) {
  return /^[^/s@]+@[^/s@]+\.[^/s@]+$/.test(email);
}

//Quitamos los avisos de error que se crean al no ingresar información válida.
function clearFormat(form) {
  form.innerHTML = `
        <div class="form_content">
        <label for="name">Nombre:</label
        ><input type="text" id="name" placeholder="Nombre completo" />
        </div>
        <div class="form_content">
        <label for="tel">Teléfono:</label
        ><input type="tel" id="tel" placeholder="4455223311" />
        </div>
        <div class="form_content">
        <label for="mail">Correo:</label
        ><input type="email" id="mail" placeholder="name@mail.com" />
        </div>
        <div class="form_content">
        <label for="message">Mensaje:</label
        ><textarea
            name="message"
            id="message"
            placeholder="Escribe algún comentario . . ."
        ></textarea>
        </div>
        <div class="form_btn"><button type="submit">Enviar</button></div>
    `;
}
