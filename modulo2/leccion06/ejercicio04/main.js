"use strict";

const button = document.querySelector(".button");
const consola = function (ev) {
  console.log(ev);
};
button.addEventListener("click", consola);

//la clave type es una propiedad --> type: 'click'

