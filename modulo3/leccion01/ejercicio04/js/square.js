import Polygon from "./polygon";

class Square extends Polygon {
  constructor(base) {
    //Hacemos referencia a los atributos del padre(polygon)
    super(4, base, base);
  }
}

export default Square;
