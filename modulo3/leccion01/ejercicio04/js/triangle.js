import Polygon from "./polygon";

class Triangle extends Polygon {
  constructor(base, height) {
    super(3, base, height);
  }
  area() {
    return super.area() / 2;
    // returnt (this.base*this.height)/2;
  }
}

export default Triangle;
