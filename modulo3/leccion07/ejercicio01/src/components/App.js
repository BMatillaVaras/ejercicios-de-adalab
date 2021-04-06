import React, { useState } from "react";
import "../stylesheets/App.scss";

const App = () => {
  const [year, setYear] = useState(20);

  const handleClick = () => {
    setYear(year + 1);
  };
  return (
    <div className="app">
      <h3>Hoy tengo {year} años</h3>
      <button onClick={handleClick}>Hazme más viejo</button>
    </div>
  );
};

export default App;
