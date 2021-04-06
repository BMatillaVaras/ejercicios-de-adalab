import React from "react";
import "../App.css";
import CityImage from "./CityImage";
import CitySelector from "./CitySelector";

class Destiny extends React.Component {
  constructor(props) {
    super(props);
    this.city = "";
    this.handleListener = this.handleListener.bind(this);
  }

  handleListener(ev) {
    this.city = ev.target.value;
    this.forceUpdate();
  }
  render() {
    return (
      <>
        <CitySelector handleListener={this.handleListener}></CitySelector>
        <p>Tu destino es viajar a {this.city}</p>
        <div>
          <CityImage city={this.city} />
        </div>
      </>
    );
  }
}

export default Destiny;
