"use strict";
function getEl(selector) {
  const result = document.querySelector(selector);
  if (result) {
    
    return result;
  } else {
    console.error(`No existe ningún elemento con clase, id o tag llamado {selector}`);
  }
  return result;
}

const btnEl = getEl(".h4");
console.log(btnEl);