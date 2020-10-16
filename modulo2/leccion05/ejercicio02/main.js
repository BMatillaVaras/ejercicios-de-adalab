"use strict";

const button = document.querySelector(".button");

function firstClick() {
  const name = document.querySelector(".input"); //tenemos que declarar esta constante dentro de la función para que no se ejecute al iniciar al programa y así no coja el valor por defecto del input, y coja el nombre escrito una vez que hacemos click.
  console.log(`Hola ${name.value}`);
}
button.addEventListener("click", firstClick);
