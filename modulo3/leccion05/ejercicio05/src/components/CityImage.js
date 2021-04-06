import React from "react";

class CityImage extends React.Component {
  constructor(props) {
    super(props);
    this.cities = {
      Praga:
        "https://www.estaentumundo.com/wp-content/imagenes/2012/06/puente-carlos-praga-777x396.jpg",
      Boston:
        "https://www.langan.com/wp-content/uploads/2019/02/Boston-996x554.jpg",
      Sydney:
        "https://lp-cms-production.imgix.net/2019-06/3a78da7d1d7507dc521db5ce29854931da39df89a0b33dc65cc7c929b4fca7da.jpg?auto=format&fit=crop&ixlib=react-8.6.4&h=520&w=1312&q=50&dpr=2",
    };
  }
  render() {
    return (
      <img
        src={this.cities[this.props.city]}
        alt={`foto de ${this.props.city}`}
        className="img"
      />
    );
  }
}

export default CityImage;
