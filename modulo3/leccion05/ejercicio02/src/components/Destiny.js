import React from "react";
import "../App.css";

const onChangeListener = function (ev) {
  return alert(`Tu destino es viajar a ${ev.target.value}`);
};

class Destiny extends React.Component {
  render() {
    return (
      <select name="" id="" onChange={onChangeListener}>
        <option value="Buenos Aires">Buenos Aires</option>
        <option value="Sydney">Sydney</option>
        <option value="Praga">Praga</option>
        <option value="Boston">Boston</option>
        <option value="Tokio">Tokio</option>
      </select>
    );
  }
}

export default Destiny;
