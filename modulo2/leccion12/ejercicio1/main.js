"use strict";

const list = document.querySelector(".list");
const numbers = [1, 2, 3];

for (let i = 0; i < numbers.length; i++) {
  const newItem = document.createElement("li");
  const content = document.createTextNode([numbers[i]]);
  newItem.appendChild(content);
  list.appendChild(newItem);
}
