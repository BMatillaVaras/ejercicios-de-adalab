"use strict";

function get100Numbers() {
  const arr = [];
  for (let i = 0; i < 100; i++) {
    arr.push(i + 1);
    //console.log(arr);
  }
  return arr;
}

// const getNumbers = get100Numbers();
// console.log(getNumbers);

const getReversed100Numbers = function () {
  const reverse = get100Numbers().reverse(); //ambos son funciones por lo que aunque se puedan poner juntos tienen que tener () los dos, si no da error
  return reverse; //tenemos que declarar la constante que retornamos si no no funciona
};

//const numbersReverse = getReversed100Numbers();
console.log(getReversed100Numbers());

// function getReversed100Numbers() {
//   const reverse = get100Numbers().reverse();
//   return reverse;
// }
