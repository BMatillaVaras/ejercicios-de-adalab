"use strict";

// const pins = [2389, 2384, 2837, 5232, 8998];

// const parPins = pins.filter((pin) => pin % 2 === 0); //Le decimos que la condición tienen que ser que el resto de dividir por 2 sea 0
// console.log(parPins);

const users = [
  { name: "María", isPremium: false, pin: 2389 },
  { name: "Lucía", isPremium: true, pin: 2384 },
  { name: "Susana", isPremium: true, pin: 2837 },
  { name: "Rocío", isPremium: false, pin: 5232 },
  { name: "Inmaculada", isPremium: false, pin: 8998 },
];

const accesPermited = users.filter((user) => user.pin % 2 === 0); //Para que nos devuelva un array con los usuarios que pueden acceder solo tenemos que añadirle user. al pin, y así hablamos de la propiedad del objeto
console.log(accesPermited);

//Si queremos que el usuario que pueda entrar sea premium y además tenga cómo contraseña un número par.
const premiumPermited = users.filter((user) => {
  if (user.isPremium === true) {
    if (user.pin % 2 === 0) {
      return user;
    }
  }
});

console.log(premiumPermited);
