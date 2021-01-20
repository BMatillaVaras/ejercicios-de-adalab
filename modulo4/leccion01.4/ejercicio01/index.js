const _ = require("lodash");

const students = [
  {
    name: "Itziar",
    promo: "k",
  },
  {
    name: "María",
    promo: "l",
  },
  {
    name: "Concha",
    promo: "j",
  },
  {
    name: "Belén",
    promo: "k",
  },
];

const studentsOrder = _.sortBy(students, ["promo", "name"]);
console.log(studentsOrder);
