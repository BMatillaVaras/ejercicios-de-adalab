"use strict";

const adalaber1 = {
  name: "Susana",
  age: 34,
  profession: "periodista",
  run: (phrase) => `Estoy ${phrase}`,
  showBio: function () {
    console.log(
      "Mi nombre es " +
        this.name +
        ",tengo " +
        this.age +
        " años y soy " +
        this.profession
    );
  },
};
adalaber1.showBio();

const adalaber2 = {
  name: "Rocío",
  age: 25,
  profession: "actríz",
  showBio: function () {
    console.log(
      "Mi nombre es " +
        this.name +
        ",tengo " +
        this.age +
        " años y soy " +
        this.profession
    );
  },
};
adalaber2.showBio();
