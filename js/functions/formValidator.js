export function formValidator() {
  const form = document.querySelector(".form");
  const content = document.querySelectorAll(".form_content");
  let error = "";
  let timer;

  form.addEventListener("submit", (e) => {
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
    if (!telValidator(tel)) {
      content[1].innerHTML += `
            <p style="font-size: 10px; color: red; height: 10px;">
                Número inválido, solo números y 10 dígitos.
            </p>
        `;
      return;
    }
    if (!emailValidator(email)) {
      content[2].innerHTML += `
            <p style="font-size: 10px; color: red; height: 10px;">
                Correo inválido: formato name@mail.com.
            </p>
        `;
      return;
    }

    form.reset();
    console.log(`Nombre: ${name}, Teléfono: ${tel}, Correo: ${email}`);
    form.innerHTML += `
     <p style="color: green;">¡ Informacion enviada !</p>
    `;
    clearTimeout(timer);
    timer = setTimeout(() => clearFormat(form), 3000);
    return;
  });
}

function telValidator(tel) {
  if (Number(tel) && tel.length === 10) {
    return true;
  }
  return false;
}

function emailValidator(email) {
  return /^[^/s@]+@[^/s@]+\.[^/s@]+$/.test(email);
}

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
