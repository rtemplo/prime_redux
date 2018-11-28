import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

// Individual Pages that are viewable before login outside of the dashboard layout
import publicRoutes from "../routes/publicRoutes";
// Areas that are only accessible after login, usually seen within the dashboard
import protectedRoutes from "../routes/protectedRoutes";

import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";

class Layout extends Component {
  state = {
    token: null
  };

  componentDidMount = () => {
    this.setState({ token: localStorage.getItem("token") });
  };

  render() {
    let routes = (
      <Switch>
        {publicRoutes.map((prop, key) => {
          return (
            <Route path={prop.path} key={key} component={prop.component} />
          );
        })}
      </Switch>
    );

    if (this.state.token) {
      routes = (
        <Switch>
          {protectedRoutes.map((prop, key) => {
            return (
              <Route path={prop.path} key={key} component={prop.component} />
            );
          })}
        </Switch>
      );
    }

    return <div>{routes}</div>;
  }
}

export default Layout;
