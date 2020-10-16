'use strict';

function number(a) {
  if (a % 2 === 0) {
    console.log('El resultado es par');
    return true;
    
  } else {
    console.log('El resultado es impar');
    return false;
    
  }
}
const num = number(15);
console.log(num);
