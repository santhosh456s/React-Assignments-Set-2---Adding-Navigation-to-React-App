import React, { Component, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "../styles/App.css";
import Home from "./Home";
import Nomatch from "./Nomatch";
import About from "./About";

class App extends Component {
  render() {
    return (
      <div id="main">
        <div className="navigation">
          <a href="/">Home</a>
          <a href="about">About</a>
        </div>
        {/* <Navigation/> */}
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
          <Route path="" component={Nomatch} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
