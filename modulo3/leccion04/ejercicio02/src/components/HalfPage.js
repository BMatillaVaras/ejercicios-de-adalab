import React from "react";

class HalfPage extends React.Component {
  render() {
    return <div className="halfpage1">{this.props.children}</div>;
  }
}

export default HalfPage;
