import React, { Component } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/staticPages/Home";
import NotFound404 from "./components/staticPages/NotFound404";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            {/* <NavHeader /> */}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="*" component={NotFound404} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
