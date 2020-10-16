"use strict";

const tasks = [
  { name: "Recoger setas en el campo", completed: true },
  { name: "Comprar pilas", completed: true },
  { name: "Poner una lavadora de blancos", completed: true },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
  },
];
const liItem = document.querySelectorAll(".js-li");
const check = document.querySelectorAll(".js-check");

for (let i = 0; i < tasks.length; i++) {
  liItem[i].innerHTML = tasks[i].name;
  if (tasks[i].completed === true) {
    liItem[i].classList.add("completed");
    check[i].checked = 1;
  }
}
