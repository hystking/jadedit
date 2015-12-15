"use strict";

const React = require("react");

class Preview extends React.Component {
  render() {
    return <textarea className="pane jadedit-preview" value={this.props.preview} readOnly={true}/>;
  }
}

module.exports = Preview;
