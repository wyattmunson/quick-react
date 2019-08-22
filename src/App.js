import React, { Component } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import Alert from "react-s-alert";
import store from "./store";

import Home from "./components/staticPages/Home";
import About from "./components/staticPages/About";
import Contact from "./components/staticPages/Contact";
import NotFound404 from "./components/staticPages/NotFound404";
import NavHeader from "./components/navigation/NavHeader";
// import Tabs from "./components/tabs/Tabs";
// import Tracker from "./components/tracker/Tracker";
import AddTrip from "./components/tracker/addTrip/AddTrip";
import TripDetail from "./components/tracker/tripDetail/TripDetail";
import SentryDashboard from "./components/sentry/SentryDashboard";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
            <div>
              <NavHeader />
              <Alert stack={{ limit: 3, spacing: 5 }} timeout={5000} />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                {/* <Route exact path="/tabs" component={Tabs} /> */}
                <Route exact path="/sentry" component={SentryDashboard} />
                {/* <Route exact path="/tracker" component={Tracker} /> */}
                {/* <Route exact path="/trips/add" component={AddTrip} /> */}
                {/* <Route exact path="/trip/:id" component={TripDetail} /> */}
                <Route path="*" component={NotFound404} />
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
