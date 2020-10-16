"use strict";

const inputElement = document.querySelector(".input");
const paragraph = document.querySelector(".p");

function handleInput(event) {
  paragraph.innerHTML = event.currentTarget.value;
  console.log(event.currentTarget);
}

inputElement.addEventListener("keyup", handleInput); //con keydown funciona pero va como con retraso.