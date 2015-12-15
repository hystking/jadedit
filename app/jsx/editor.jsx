"use strict";

const ace = require("brace");
const React = require("react");
const AceEditor = require("react-ace");
const {ipcRenderer} = require('electron');

require("brace/mode/jade");

class Editor extends React.Component {
  componentWillMount() {
    this.state = {text: this.props.text};
  }

  _onChange(newValue) {
    ipcRenderer.send("store-dispatch", {
      type: "UPDATE_TEXT",
      value: newValue
    });
    this.setState({text: newValue});
  }

  render() {
    return <AceEditor className="pane" height="auto" mode="jade" onChange={this._onChange.bind(this)} value={this.state.text}/>;
  }
}

module.exports = Editor;
