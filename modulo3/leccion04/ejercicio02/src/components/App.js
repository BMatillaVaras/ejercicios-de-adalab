import React from "react";
import HalfPage from "./HalfPage";
import HalfPage2 from "./HalfPage2";
import "../App.css";

class Item extends React.Component {
  render() {
    return (
      <>
        <HalfPage>
          <h1>Podremos colocar esto en el lado izquierdo?</h1>
          <h3>Vamos a probar</h3>
          <p>
            Lorem fistrum la caidita cillum occaecat cillum eiusmod quis.
            Eiusmod mamaar pupita condemor dolore no puedor voluptate. De la
            pradera te va a hasé pupitaa consequat voluptate de la pradera.
            Cillum apetecan sit amet aliqua consectetur se calle ustée aute nisi
            al ataquerl reprehenderit ad. Ut voluptate jarl ut labore laboris
            por la gloria de mi madre nostrud duis et irure. Adipisicing la
            caidita jarl la caidita por la gloria de mi madre me cago en tus
            muelas.
          </p>
        </HalfPage>
        <HalfPage2>
          <h1>Podremos colocar esto en el lado derecho?</h1>
          <h3>Vamos a probar</h3>
          <p>
            Lorem fistrum la caidita cillum occaecat cillum eiusmod quis.
            Eiusmod mamaar pupita condemor dolore no puedor voluptate. De la
            pradera te va a hasé pupitaa consequat voluptate de la pradera.
            Cillum apetecan sit amet aliqua consectetur se calle ustée aute nisi
            al ataquerl reprehenderit ad. Ut voluptate jarl ut labore laboris
            por la gloria de mi madre nostrud duis et irure. Adipisicing la
            caidita jarl la caidita por la gloria de mi madre me cago en tus
            muelas.
          </p>
        </HalfPage2>
      </>
    );
  }
}

export default Item;
