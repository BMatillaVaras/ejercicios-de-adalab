import img from "./belen.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-principal">
          <img src={img} className="App-logo" alt="logo" />
          <div className="App-titles">
            <h1 className="App-title">Belén Matilla</h1>
            <h3 className="App-data">Domingo 01 de noviembre de 2020</h3>
          </div>
        </div>
        <p className="App-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum...
        </p>
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
            37 <i className="fas fa-heart"></i>
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
