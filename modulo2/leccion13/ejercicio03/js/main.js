"use strict";

const users = [
  { name: "María", isPremium: false },
  { name: "Lucía", isPremium: true },
  { name: "Susana", isPremium: true },
  { name: "Rocío", isPremium: false },
  { name: "Inmaculada", isPremium: false },
];

const premiumUsers = users.map((user) => {
  //llaves para empezar a poner el if, si no no funciona
  if (user.isPremium === true) {
    return `Bienvenida ${user.name}. Gracias por confiar en nosotros`; //igual que en la línea anterior ponemos user.isPremium para ver si es true o false, ahora tenemos que poner user.name para sacar el nombre, si no dará error.
  } else {
    return `Bienvenida ${user.name}.`; //También tenemos que poner el return, si no no devuelve nada!!!
  }
});
console.log(premiumUsers);
