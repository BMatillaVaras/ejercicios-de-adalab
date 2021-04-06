import React from "react";
import "../stylesheets/App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.value = "";
    this.state = {
      text: "",
    };
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleKeyUp(ev) {
    this.value = ev.target.value;
    this.setState(() => {
      let newText = this.value;
      return {
        text: newText,
      };
    });
  }

  render() {
    return (
      <div className="app">
        <input
          type="text"
          placeholder="Escriba aquí"
          onKeyUp={this.handleKeyUp}
        />
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default App;
