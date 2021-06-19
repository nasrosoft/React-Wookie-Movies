import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Movies from "./component/Movies";
import Details from "./component/Details";
import NotFoundPage from "./component/NotFoundPage";

const App = () => (
  <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Simple React App</h1>
      </header>
      <Switch>
        <Route path="/" component={Movies} exact={true} />
        <Route path="/details/:id" component={Details} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);
export default App;
