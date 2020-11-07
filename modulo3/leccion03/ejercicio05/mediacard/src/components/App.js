import React from "react";
import MediaList from "./MediaList";
import img from "../belen.jpg";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <MediaList></MediaList>
      </>
    );
  }
}

export default App;
