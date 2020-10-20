"use strict";

const input = document.querySelector(".js-input");
const name = document.querySelector(".name");

function paint() {
  const inputValue = input.value;
  name.innerHTML = inputValue;
  localStorage.setItem("name", inputValue);
}
input.addEventListener("keyup", paint);

localStorage.getItem("name");
input.value = localStorage.getItem("name");
name.innerHTML = localStorage.getItem("name");
