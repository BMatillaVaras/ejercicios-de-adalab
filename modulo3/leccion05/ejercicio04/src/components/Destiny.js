import React from "react";
import "../App.css";
import CityImage from "./CityImage";

class Destiny extends React.Component {
  constructor(props) {
    super(props);
    this.city = "";
    this.handleListener = this.handleListener.bind(this);
  }

  handleListener(ev) {
    this.city = ev.target.value;
    const text = `Tu destino es viajar a ${this.city}`;
    //return <p>`Tu destino es viajar a `</p>;
    this.forceUpdate();
  }
  render() {
    return (
      <>
        <select name="" id="" onChange={this.handleListener}>
          <option value="Buenos Aires">Buenos Aires</option>
          <option value="Sydney">Sydney</option>
          <option value="Praga">Praga</option>
          <option value="Boston">Boston</option>
          <option value="Tokio">Tokio</option>
        </select>
        <p>Tu destino es viajar a {this.city}</p>
        <CityImage />
      </>
    );
  }
}

export default Destiny;
