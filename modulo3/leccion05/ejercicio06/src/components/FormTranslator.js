import React from "react";

class Textarea extends React.Component {
  render() {
    return (
      <>
        <form action="">
          <textarea
            name="translator"
            id=""
            cols="30"
            rows="10"
            onKeyUp={this.props.handleTranslator}
          ></textarea>
        </form>
      </>
    );
  }
}

export default Textarea;
