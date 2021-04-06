import React from "react";
import "./App.css";

class OnionHater extends React.Component {
  constructor(props) {
    super(props);
    this.isHating = "";
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(ev) {
    if (ev.target.value.toLowerCase().includes("repollo")) {
      this.isHating = "red";
    } else {
      this.isHating = "";
      //main.classList.remove("red");
    }
    this.forceUpdate();
  }
  render() {
    return (
      <main className={`main ${this.isHating}`}>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          onChange={this.handleChange}
        ></textarea>
      </main>
    );
  }
}

export default OnionHater;
