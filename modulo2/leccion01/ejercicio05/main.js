// Aquí va el código JS
"use strict";

const titleElement = document.querySelector(".title");
const password = document.querySelector(".password");

//Para que aparezca el segundo componente de la lista

password.innerHTML = "**";
titleElement.innerHTML = titleElement.innerHTML + password.innerHTML;
