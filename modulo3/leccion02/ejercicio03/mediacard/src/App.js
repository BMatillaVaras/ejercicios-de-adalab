import React from "react";
import img from "./belen.jpg";
import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const AppPrincipal = (
      <div className="App__header--principal">
        <img src={img} className="App-logo" alt="logo" />
        <div className="App-titles">
          <h1 className="App-title">Belén Matilla</h1>
          <h3 className="App-data">Domingo 01 de noviembre de 2020</h3>
        </div>
      </div>
    );
    const AppText = (
      <p className="App__header--text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum...
      </p>
    );
    const AppEnd = (
      <div className="App__header--end">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Leer más...
        </a>
        <p>
          37 <i className="fas fa-heart"></i>
        </p>
      </div>
    );
    const AppRoot = (
      <div className="App">
        <header className="App__header">
          {AppPrincipal}
          {AppText}
          {AppEnd}
        </header>
      </div>
    );
    return AppRoot;
  }
}

export default App;
