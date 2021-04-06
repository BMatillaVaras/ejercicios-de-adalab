"use strict";

function getEl(selector) {
  const result = document.querySelector(selector);
  return result
}

const btnEl = getEl(".p2");
const value = parseInt(btnEl.innerHTML);

function number(a) {
  if (a % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

const num = number(value);
console.log(num);
