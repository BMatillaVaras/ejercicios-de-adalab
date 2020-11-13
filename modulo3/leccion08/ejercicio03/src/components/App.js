import React from "react";
import "../stylesheets/App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      select: "",
      age: "",
      gender: "",
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
          <div>
            <label htmlFor="A">
              <input
                type="radio"
                id="A"
                name="age"
                value="A:todos los públicos"
                onChange={this.handleChange}
              />
              A:todos los públicos
            </label>
            <label htmlFor="7">
              <input
                type="radio"
                id="7"
                name="age"
                value="7"
                onChange={this.handleChange}
              />
              7
            </label>
            <label htmlFor="7">
              <input
                type="radio"
                id="7"
                name="age"
                value="12"
                onChange={this.handleChange}
              />
              12
            </label>
            <label htmlFor="7">
              <input
                type="radio"
                id="7"
                name="age"
                value="16"
                onChange={this.handleChange}
              />
              16
            </label>
            <label htmlFor="7">
              <input
                type="radio"
                id="7"
                name="age"
                value="18"
                onChange={this.handleChange}
              />
              18
            </label>
          </div>
          <div>
            Tipo de película
            <label htmlFor="comedy">
              <input
                id="comedy"
                type="checkbox"
                value="Comedia"
                name="gender"
                onChange={this.handleChange}
              />
              Comedia
            </label>
            <label htmlFor="drama">
              <input
                id="drama"
                type="checkbox"
                value="Drama"
                name="gender"
                onChange={this.handleChange}
              />
              Drama
            </label>
            <label htmlFor="fantasy">
              <input
                id="fantasy"
                type="checkbox"
                value="Fantasía"
                name="gender"
                onChange={this.handleChange}
              />
              Fantasía
            </label>
            <label htmlFor="action">
              <input
                id="action"
                type="checkbox"
                value="Acción"
                name="gender"
                onChange={this.handleChange}
              />
              Acción
            </label>
            <label htmlFor="family">
              <input
                id="family"
                type="checkbox"
                value="Familia"
                name="gender"
                onChange={this.handleChange}
              />
              Familia
            </label>
            <label htmlFor="terror">
              <input
                id="terror"
                type="checkbox"
                value="Terror"
                name="gender"
                onChange={this.handleChange}
              />
              Terror
            </label>
          </div>
        </form>
        <article>
          <h4>{this.state.title}</h4>
          <p>{this.state.description}</p>
          <p>{this.state.select}</p>
          <p>Edad mínima permitida para la película: {this.state.age}</p>
        </article>
      </div>
    );
  }
}

export default App;
