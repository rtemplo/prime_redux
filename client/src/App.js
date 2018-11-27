import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import asyncComponent from "./components/hoc/asyncComponent";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";

const asyncTestForm = asyncComponent(() => {
  return import("./views/TestForm/TestForm");
});

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={asyncTestForm} />
        </Switch>
      </div>
    );
  }
}

export default App;
