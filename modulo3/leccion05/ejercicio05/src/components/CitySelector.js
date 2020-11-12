import React from "react";

class CitySelector extends React.Component {
  render() {
    return (
      <select name="" id="" onChange={this.props.handleListener}>
        <option value="Buenos Aires">Buenos Aires</option>
        <option value="Sydney">Sydney</option>
        <option value="Praga">Praga</option>
        <option value="Boston">Boston</option>
        <option value="Tokio">Tokio</option>
      </select>
    );
  }
}

export default CitySelector;
