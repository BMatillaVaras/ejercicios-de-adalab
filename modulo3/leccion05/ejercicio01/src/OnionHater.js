import React from "react";
import "./App.css";

const onChangeListener = function (ev) {
  if (ev.target.value.toLowerCase().includes("repollo")) {
    return alert("Odio el repollo!!!!");
  }
};

class OnionHater extends React.Component {
  render() {
    return (
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        onChange={onChangeListener}
      ></textarea>
    );
  }
}

export default OnionHater;
