// Aquí va el código JS
"use strict";

// Obtenemos el elemento con el que queremos trabajar usando document.querySelector()
const titleElement = document.querySelector(".title");

// Cambiamos su contenido con innerHTML
titleElement.innerHTML = "Hola Mundo";
titleElement.innerHTML = titleElement.innerHTML + " cruel";
// Hay que poner un espacio delante de la palabra pero dentro de las comillas porque si no lo junta todo, no cuenta espacios.
