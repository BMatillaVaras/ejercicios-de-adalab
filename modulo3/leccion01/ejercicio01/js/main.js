"use strict";

class Square {
  perimeter(side) {
    return side * 4;
  }
  area(side) {
    return side ** 2;
    // return side*side;
  }
}

const exemple = new Square();
console.log(exemple.perimeter(9));
console.log(exemple.area(9));
