"use strict";

const adalaber1 = {
  name: "Susana",
  age: 34,
  profession: "periodista",
};
const text = document.querySelector(".text");
text.innerHTML = `Mi nombre es ${adalaber1.name} tengo ${adalaber1.age} años y soy ${adalaber1.profession}`;

const adalaber2 = {
  name: "Rocío",
  age: 25,
  profession: "actriz",
};
const text2 = document.querySelector(".text1");
text2.innerHTML = `Mi nombre es ${adalaber2.name} tengo ${adalaber2.age} años y soy ${adalaber2.profession}`;
