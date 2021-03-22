const add = require("./math-add.js");
const sub = require("./math-sub.js");

module.exports = {
  add,
  sub: sub, //Las dos opciones de poner el nombre de la función son válidas
};
