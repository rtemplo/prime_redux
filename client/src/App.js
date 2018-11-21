import React, { Component } from "react";
import Script from "react-load-script";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    scriptLoaded: false
  };

  handleScriptCreate = () => {
    this.setState({ scriptLoaded: false });
  };

  handleScriptError = () => {
    this.setState({ scriptError: true });
  };

  handleScriptLoad = () => {
    this.setState({ scriptLoaded: true });
  };

  render() {
    return (
      <div className="App">
        <Script
          url="/samplescript.js"
          onCreate={this.handleScriptCreate}
          onError={this.handleScriptError}
          onLoad={this.handleScriptLoad}
        />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.state.scriptLoaded ? "Hi Srini" : null}
            <br />
            Learn React Fast
          </a>
        </header>
      </div>
    );
  }
}

export default App;
