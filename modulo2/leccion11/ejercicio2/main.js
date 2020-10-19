"use strict";

const btn = document.querySelector(".js-btn");
const input = document.querySelector(".js-input");
const list = document.querySelector(".js-list");

function paint() {
  const paintInput = input.value;
  let listContent = ""; //hemos creado esta variable para meter aquí el <li> y después esto añadirlo al innerHTML de la lista, porque así cada vez que se ejecuta la búsqueda de personajes se borra lo anterior y se crea una lsita nueva, sin añadirse a lo ya existente
  fetch(`https://swapi.dev/api/people/?search=${paintInput}`)
    .then((response) => response.json())
    .then((data) => {
      const characters = data.results; // lo metemos en una constante porque devuelve un array. Ahora ya podemos utilizar el array characters, que metemos en un for para leer todos sus elementos
      for (let i = 0; i < characters.length; i++) {
        listContent += `<li>Name:${characters[i].name} ---- Gender:${characters[i].gender}</li>`;
      }
      list.innerHTML = listContent;
    });
}
btn.addEventListener("click", paint);
