"use strict";
function getEl(selector) {
  const result = document.querySelector(selector);
  return result;
}

const btnEl = getEl(".h2");
console.log(btnEl);
