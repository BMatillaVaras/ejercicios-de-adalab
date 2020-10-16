"use strict";
const body = document.querySelector(".body");

function color(event) {
  if (event.key === "r") {
    body.classList.add("coral");
    body.classList.remove("blue");
  } else if (event.key === "m") {
    body.classList.add("blue");
    body.classList.remove("coralr");
  }
}
document.addEventListener("keydown", color);
