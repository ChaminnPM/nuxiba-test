import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import css from "./resources/css/App.module.css";
import Users from "./components/users/Users";

const App = () => (
  <div class={css.module} style={{ overflow: "auto" }}>
    <header>
      <nav class="navbar navbar-dark bg-dark m-0">
        <span class="navbar-brand mb-0 h1">Nuxiba Test</span>
      </nav>
    </header>
    <BrowserRouter>
      <Switch>
        <Route path="/users" component={Users} />
        <Redirect to="/users" />
      </Switch>
    </BrowserRouter>
    <div class="card-footer text-muted">
      Uriel Cabrera Salinas - Nuxiba Test
    </div>
  </div>
);

App.propTypes = {};

export default App;
