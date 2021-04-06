// Aquí va el código JS
"use strict";

// Obtenemos el elemento con el que queremos trabajar usando document.querySelector()
const titleElement = document.querySelector(".title");
const firstItem = document.querySelector(".adalaber1");
const secondItem = document.querySelector(".adalaber2");
//Para que aparezca el primer componente de la lista
/*titleElement.innerHTML = titleElement.innerHTML + " " + firstItem.innerHTML;*/

//Para que aparezca el segundo componente de la lista
titleElement.innerHTML = titleElement.innerHTML + " " + secondItem.innerHTML;
