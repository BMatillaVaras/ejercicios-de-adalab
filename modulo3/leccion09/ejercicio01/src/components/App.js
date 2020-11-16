import React from "react";
import "../stylesheets/App.scss";

const numbers = [1, 4, 6, 8, 45, 89];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberSearch: "",
      check: false,
      list: numbers,
    };
    this.filterInput = this.filterInput.bind(this);
    this.filterParNumbers = this.filterParNumbers.bind(this);
  }

  filterInput = (ev) => {
    const value = ev.currentTarget.value;
    const numberInput = parseInt(value);

    //const listFiltered = numbers.filter((number) => number > numberInput);
    this.setState(
      {
        numberSearch: value,
        /*list: listFiltered,*/
      },
      () => {
        this.filter();
      }
    );
  };

  filterParNumbers = (ev) => {
    const value = ev.currentTarget.checked;
    //const listPar = this.state.list.filter((number) => number % value === 0);
    this.setState(
      {
        check: value,
        //list: listPar,
      },
      () => {
        this.filter();
      }
    );
  };

  filter = () => {
    // this.state.numberSearch.filterInput()
    const numberInput = this.state.numberSearch;
    const value = this.state.check;

    let listFiltered = numbers.filter((number) => number > numberInput);
    if (value) {
      listFiltered = listFiltered.filter((number) => number % 2 === 0);
    }

    this.setState({
      list: listFiltered,
    });
  };
  render() {
    return (
      <>
        <label htmlFor="number">Introduce un número</label>
        <input
          id="number"
          type="text"
          onChange={this.filterInput}
          value={this.state.numberSearch}
        />
        <label htmlFor="pares">Números pares</label>
        <input
          id="pares"
          type="checkbox"
          onChange={this.filterParNumbers}
          value="2"
        />
        <ul>
          {this.state.list.map((number) => (
            <li key={number}>{number}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
