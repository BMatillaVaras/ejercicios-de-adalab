"use strict";
const form = document.querySelector(".form");
const inputName = document.querySelector(".js-input-name");
const inputLastName = document.querySelector(".js-input-lastName");
const name = document.querySelector(".name");
const lastName = document.querySelector(".lastName");

function paint() {
  const inputNameValue = inputName.value;
  const inputLastNameValue = inputLastName.value;
  name.innerHTML = inputNameValue;
  lastName.innerHTML = inputLastNameValue;
  const user = {
    name: inputNameValue,
    lastName: inputLastNameValue,
  };
  localStorage.setItem("user", JSON.stringify(user));
}

form.addEventListener("keyup", paint);

function uploadName() {
  const savedUser = JSON.parse(localStorage.getItem("user"));
  if (savedUser !== null) {
    //tenemos que hacer esta validación de si savedUser es distinto de null para que lo pinte, porque si no la primera vez que cargamos la página como no hay nada guardado en localStorage la consola nos va a dar un error, aunque el usuario no lo vez y funcionar funciona.
    inputName.value = savedUser.name;
    inputLastName.value = savedUser.lastName;
    name.innerHTML = savedUser.name;
    lastName.innerHTML = savedUser.lastName;
  }
}
uploadName();
