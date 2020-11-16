import React from "react";
import palettes from "../palettes.json";
import "../stylesheets/App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  const palettes = palettes.palettes;
  render() {
    console.log(palettes);
    return (
      <>
        <ul>{}</ul>
      </>
    );
  }
}

export default App;
