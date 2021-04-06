"use strict";

function get100Numbers() {
  const arr = [];
  for (let i = 0; i < 100; i++) {
    arr.push(i + 1);
    //console.log(arr);
  }
  return arr;
}

const getNumbers = get100Numbers();
console.log(getNumbers);
