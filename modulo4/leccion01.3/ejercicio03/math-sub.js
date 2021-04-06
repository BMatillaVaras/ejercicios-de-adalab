const sub = (a, b) => {
  return a - b;
};

module.exports = sub; //Al exportarse solo una cosa no hace falta exportarla como objeto y así, en el módulo en el que se importa la reconoce como función directamente.
