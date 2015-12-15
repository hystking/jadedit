"use strict";

const React = require("react");

const Header = require("./header");
const Editor = require("./editor");
const Preview = require("./preview");

class RootComponent extends React.Component {
  render() {
    return (<div className="window">
      <Header {...this.props}/>
      <div className="window-content">
        <div className="pane-group">
          <Editor {...this.props}/>
          <Preview {...this.props}/>
        </div>
      </div>
    </div>);
  }
}

module.exports = RootComponent;
