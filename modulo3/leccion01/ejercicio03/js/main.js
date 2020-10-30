"use strict";

class Polygon {
  constructor(numberOfSides, base, height) {
    this.numberOfSides = numberOfSides;
    this.base = base;
    this.height = height;
  }
  perimeter() {
    return this.numberOfSides * this.base;
  }
  area() {
    return this.base * this.height;
  }
}

class Square extends Polygon {
  constructor(base) {
    //Hacemos referencia a los atributos del padre(polygon)
    super(4, base, base);
    this.side = base;
  }
}

class Triangle extends Polygon {
  constructor(base, height) {
    super(3, base, height);
  }
  area() {
    return super.area() / 2;
  }
}

const mySquare = new Square(4);
const myTriangle = new Triangle(4, 3);

console.log(
  `El cuadrado que tiene ${
    mySquare.side
  } metros de lado tiene ${mySquare.perimeter()} metros de perímetro y su área es de ${mySquare.area()} metros cuadrados.`
);

console.log(
  `El triángulo que tiene ${
    myTriangle.base
  } metros de lado tiene ${myTriangle.perimeter()} metros de perímetro y su área es de ${myTriangle.area()} metros cuadrados.`
);
