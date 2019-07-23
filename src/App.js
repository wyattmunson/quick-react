import React, { Component } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/staticPages/Home";
import About from "./components/staticPages/About";
import Contact from "./components/staticPages/Contact";
import NotFound404 from "./components/staticPages/NotFound404";
import NavHeader from "./components/navigation/NavHeader";
import Tabs from "./components/tabs/Tabs";
import Tracker from "./components/tracker/Tracker";
import AddTrip from "./components/tracker/addTrip/AddTrip";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <NavHeader />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/tabs" component={Tabs} />
              <Route exact path="/tracker" component={Tracker} />
              <Route exact path="/trips/add" component={AddTrip} />
              <Route path="*" component={NotFound404} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
