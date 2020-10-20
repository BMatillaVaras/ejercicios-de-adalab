"use strict";

const form = document.querySelector(".form");
const body = document.querySelector(".body");
const input1 = document.querySelector(".js-input");
const input2 = document.querySelector(".js-input2");

function paint() {
  if (input1.checked === true) {
    input2.checked === false;
    body.classList.add("option1");
    body.classList.remove("option2");
  }
  if (input2.checked === true) {
    input1.checked === false;
    body.classList.add("option2");
    body.classList.remove("option1");
  }
}

form.addEventListener("click", paint);
