"use strict";
const div = document.querySelector(".div");

function color() {
  let scrollValue = window.scrollY;
  if (scrollValue > 250) {
    div.classList.add("coral");
    div.classList.remove("blue");
  } else {
    div.classList.add("blue");
    div.classList.remove("coral");
  }
}
window.addEventListener("scroll", color);
