"use strict";

import Square from "./square";
import Triangle from "./triangle";

const mySquare = new Square(5);
const myTriangle = new Triangle(4, 3);

console.log(
  `El cuadrado que tiene ${
    mySquare.base
  } metros de lado tiene ${mySquare.perimeter()} metros de perímetro y su área es de ${mySquare.area()} metros cuadrados.`
);

console.log(
  `El triángulo que tiene ${
    myTriangle.base
  } metros de lado tiene ${myTriangle.perimeter()} metros de perímetro y su área es de ${myTriangle.area()} metros cuadrados.`
);
