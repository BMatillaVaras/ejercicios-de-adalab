import React from "react";
import "../stylesheets/App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.fr = new FileReader();
    this.state = {
      title: "",
      description: "",
      select: "",
      age: "A:todos los públicos",
      gender: [],
      file: "",
      fileUrl: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.writeImage = this.writeImage.bind(this);
    this.fileInput = React.createRef();
    this.fr = new FileReader();
  }

  handleChange(ev) {
    const name = ev.target.name;
    this.setState({
      [name]: ev.target.value,
    });
  }

  handleChangeCheckbox(ev) {
    const name = ev.target.name;
    if (this.state.gender.includes(ev.target.value)) {
      const newGender = this.state.gender.filter(
        (gender) => gender !== ev.target.value
      );
      this.setState({
        gender: newGender,
      });
    } else if (
      !this.state.gender.includes(ev.target.value) &&
      this.state.gender.length < 3
    ) {
      this.setState({
        [name]: [...this.state.gender, ev.target.value],
      });
    } else {
      ev.preventDefault();
      alert("Solo puedes elegir 3 géneros");
    }
  }

  writeImage() {
    const url = this.fr.result;
    this.setState({
      fileUrl: url,
    });
  }

  handleFileChange(ev) {
    const file = this.fileInput.current.files[0];
    this.fr.onload = this.writeImage;
    this.fr.readAsDataURL(file);
  }
  fakeClick() {
    this.fileInput.current.click();
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
                checked={
                  this.state.age === "A:todos los públicos" ? true : false
                }
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
                checked={this.state.age === "7" ? true : false}
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
                checked={this.state.age === "12" ? true : false}
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
                checked={this.state.age === "16" ? true : false}
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
                checked={this.state.age === "18" ? true : false}
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
                onChange={this.handleChangeCheckbox}
              />
              Comedia
            </label>
            <label htmlFor="drama">
              <input
                id="drama"
                type="checkbox"
                value="Drama"
                name="gender"
                onChange={this.handleChangeCheckbox}
              />
              Drama
            </label>
            <label htmlFor="fantasy">
              <input
                id="fantasy"
                type="checkbox"
                value="Fantasía"
                name="gender"
                onChange={this.handleChangeCheckbox}
              />
              Fantasía
            </label>
            <label htmlFor="action">
              <input
                id="action"
                type="checkbox"
                value="Acción"
                name="gender"
                onChange={this.handleChangeCheckbox}
              />
              Acción
            </label>
            <label htmlFor="family">
              <input
                id="family"
                type="checkbox"
                value="Familia"
                name="gender"
                onChange={this.handleChangeCheckbox}
              />
              Familia
            </label>
            <label htmlFor="terror">
              <input
                id="terror"
                type="checkbox"
                value="Terror"
                name="gender"
                onChange={this.handleChangeCheckbox}
              />
              Terror
            </label>
          </div>
          <label htmlFor="file">Upload file:</label>
          <input
            id="file"
            type="file"
            name="file"
            ref={this.fileInput}
            onChange={this.handleFileChange}
          />
        </form>
        <article>
          <h4>{this.state.title}</h4>
          <p>{this.state.description}</p>
          <p>{this.state.select}</p>
          <p>Edad mínima permitida para la película: {this.state.age}</p>
          <p>Género de la película: {this.state.gender}</p>
          <div>
            <img src={this.state.fileUrl} alt="Poster de la película" />
          </div>
        </article>
      </div>
    );
  }
}

export default App;
