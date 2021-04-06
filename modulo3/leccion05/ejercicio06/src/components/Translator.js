import React from "react";

class Translator extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <p className="translator">{this.props.text}</p>
      </>
    );
  }
}

export default Translator;
