import React from "react";
import Mediacard from "./Mediacard";
import img from "../belen.jpg";

class MediaList extends React.Component {
  render() {
    return (
      <section>
        <h2>Listado de Tarjetas</h2>
        <ul>
          <Mediacard
            name="Belén Matilla"
            date="Miércoles 04 de noviembre de 2020"
            img={img}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..."
            likes={37}
            heart={<i className="fas fa-heart"></i>}
          />
          <Mediacard
            name="Juan Matilla"
            date="Sábado 07 de noviembre de 2020"
            img={img}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..."
            likes={20}
            heart={<i className="fas fa-heart"></i>}
          />
          <Mediacard
            name="Belén Matilla"
            date="Miércoles 04 de noviembre de 2020"
            img={img}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..."
            likes={37}
            heart={<i className="fas fa-heart"></i>}
          />
        </ul>
      </section>
    );
  }
}

export default MediaList;
