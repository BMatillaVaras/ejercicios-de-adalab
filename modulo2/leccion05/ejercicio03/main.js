"use strict";

const paragraph = document.querySelector(".p");
const section = document.querySelector(".section");

function mouse() {
  section.innerHTML = section.innerHTML + "<p>lorem ipsum</p>";
}
paragraph.addEventListener("mouseover", mouse);
// paragraph.removeEventListener("mouseover");
