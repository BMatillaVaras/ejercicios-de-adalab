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

export default { Polygon };
