"use strict";

class Square {
  constructor(side) {
    this.side = side;
  }
  perimeter() {
    return this.side * 4;
  }
  area() {
    return this.side ** 2; //esa es la manera de elevar al cuadrado, también podríamos hacer this.side * this.side
  }
  console() {
    console.log(
      `El cuadrado que tiene ${
        this.side
      } metro de lado tiene ${this.perimeter()} metros de perímetro y su área es de ${this.area()} metro cuadrado.`
    );
  }
}

const square1 = new Square(1);
const square2 = new Square(3);
const square3 = new Square(7);

square1.console();
square2.console();
square3.console();
