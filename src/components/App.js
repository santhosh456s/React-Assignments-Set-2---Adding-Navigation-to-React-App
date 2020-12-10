import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "../styles/App.css";
import Home from "./Home";
import Nomatch from "./Nomatch";
import About from "./About";
import LocationDisplay from "./locationDisplay";

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
          <Route component={Nomatch} />
        </Switch>
        <LocationDisplay />
      </div>
    );
  }
}

export default App;
