"use strict";

const React = require("react");
const {ipcRenderer} = require('electron');

class Header extends React.Component {
  _onSaveClick() {
    ipcRenderer.send("save-file");
  }

  render() {
    return <div className="toolbar toolbar-header">
      <div className="toolbar-actions">
        <div className="btn-group">
          <button className="btn btn-default" onClick={this._onSaveClick}>
            <span className="icon icon-folder"></span>
          </button>
        </div>
      </div>
    </div>
  }
}

module.exports = Header;
