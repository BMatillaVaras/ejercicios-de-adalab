import React from "react";
import img from "../belen.jpg";
import "../App.css";

class Mediacard extends React.Component {
  render() {
    const AppPrincipal = (
      <div className="App-principal">
        <img src={this.props.img} className="App-logo" alt="logo" />
        <div className="App-titles">
          <h1 className="App-title">{this.props.name}</h1>
          <h3 className="App-data">{this.props.date}</h3>
        </div>
      </div>
    );
    const AppText = <p className="App-text">{this.props.text}</p>;
    const AppEnd = (
      <div className="App-end">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Leer más...
        </a>
        <p>
          {this.props.likes}
          {this.props.heart}
        </p>
      </div>
    );
    const AppRoot = (
      <div className="App">
        <header className="App-header">
          {AppPrincipal}
          {AppText}
          {AppEnd}
        </header>
      </div>
    );
    return AppRoot;
  }
}

export default Mediacard;
