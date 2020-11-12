import React from "react";
import "../stylesheets/App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.value = "";
    this.state = {
      color: "blue",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      let nextColor;
      if (prevState.color === "blue") {
        nextColor = "coral";
      } else {
        nextColor = "blue";
      }
      return {
        color: nextColor,
      };
    });
  }

  render() {
    return (
      <div
        className={`app ${this.state.color}`}
        onClick={this.handleClick}
      ></div>
    );
  }
}

export default App;
