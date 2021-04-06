import React from "react";
import "../stylesheets/App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      select: "",
    };
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
  }

  handleChangeInput(ev) {
    this.setState({
      title: ev.target.value,
    });
  }
  handleChangeText(ev) {
    this.setState({
      description: ev.target.value,
    });
  }
  handleChangeSelect(ev) {
    this.setState({
      select: ev.target.value,
    });
  }
  render() {
    return (
      <div className="app">
        <h3>Películas</h3>
        <form className="form" action="">
          <label className="form__label" htmlFor="title">
            Título de la película
          </label>
          <input
            className="form__input"
            id="title"
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChangeInput}
          />
          <label className="form__label" htmlFor="description">
            Resumen de la película
          </label>
          <textarea
            className="form__textarea"
            name="description"
            id="description"
            cols="30"
            rows="10"
            value={this.state.description}
            onChange={this.handleChangeText}
          ></textarea>
          <select
            className="form__select"
            name="select"
            id="select"
            value={this.state.select}
            onChange={this.handleChangeSelect}
          >
            <option value="Español">Español</option>
            <option value="Inglés">Inglés</option>
            <option value="Portugués">Portugués</option>
          </select>
        </form>
        <article>
          <h4>{this.state.title}</h4>
          <p>{this.state.description}</p>
          <p>{this.state.select}</p>
        </article>
      </div>
    );
  }
}

export default App;
