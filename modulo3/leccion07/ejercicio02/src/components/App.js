import React, { useState } from "react";
import "../stylesheets/App.scss";

const App = () => {
  const [year, setYear] = useState(20);
  const [gift, setGift] = useState(1);
  const handleClickYears = () => {
    setYear(year + 1);
  };

  const handleClickGifts = () => {
    setGift(gift + 1);
  };
  return (
    <div className="app">
      <h3>Hoy tengo {year} años</h3>
      <button onClick={handleClickYears}>Hazme más viejo</button>
      <h3>Tengo {gift} regalo</h3>
      <button onClick={handleClickGifts}>Dame regalos</button>
    </div>
  );
};

export default App;
