"use strict";

//const lostNumbers = [4, 8, 15, 16, 23, 42];
const lostNumbers = [];
// const parNumber = [];
// const multiple3 = [];

const bestLostNumber = function () {
  const parNumber = []; //Podemos declarar estas constantes fuera o dentro de la función, dependiendo de si son variables globales o locales.
  const multiple3 = [];
  for (let i = 0; i < lostNumbers.push; i++) {
    if (lostNumbers[i] % 2 === 0) {
      parNumber.push(lostNumbers[i]);
    }
    if (lostNumbers[i] % 3 === 0) {
      multiple3.push(lostNumbers[i]);
    }
  }
  // for (let i = 0; i < lostNumbers.length; i++) {
  //   if (lostNumbers[i] % 3 === 0) {
  //     multiple3.push(lostNumbers[i]);
  //   }
  // } No es necesario poner otro for, con meter el if de los impares después del if de los pares es suficiente, porque al ser dos if, el número entra primero en el primer if, y después en el segundo. Si hubiera else if entonces sí que cambiarían.
  const result = parNumber.concat(multiple3);
  return result;
};

const exercise = bestLostNumber();
console.log(exercise);
