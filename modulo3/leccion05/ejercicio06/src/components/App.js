import React from "react";
import FormTranslator from "./FormTranslator";
import Translator from "./Translator";
import "../stylesheets/App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.text = "";
    this.handleTranslator = this.handleTranslator.bind(this);
  }

  handleTranslator(ev) {
    const text = ev.currentTarget.value;
    this.text = text.replace(/[aeouáéóú]/g, "i");
    this.forceUpdate();
  }

  render() {
    return (
      <div className="app">
        <h1>Traductor Mimimi</h1>
        <div>
          <FormTranslator
            handleTranslator={this.handleTranslator}
          ></FormTranslator>
          <Translator text={this.text}></Translator>
        </div>
      </div>
    );
  }
}

export default App;
