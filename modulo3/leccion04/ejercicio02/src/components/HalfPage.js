import React from "react";

class HalfPage2 extends React.Component {
  render() {
    return <div className={this.props.class}>{this.props.children}</div>;
  }
}

export default HalfPage2;
