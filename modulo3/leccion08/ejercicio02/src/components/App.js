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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    const name = ev.target.name;
    this.setState({
      [name]: ev.target.value,
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
            onChange={this.handleChange}
          />
          <label htmlFor="description">Resumen de la película</label>
          <textarea
            className="form__textarea"
            name="description"
            id="description"
            cols="30"
            rows="10"
            value={this.state.description}
            onChange={this.handleChange}
          ></textarea>
          <select
            className="form__select"
            name="select"
            id="select"
            value={this.state.select}
            onChange={this.handleChange}
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
