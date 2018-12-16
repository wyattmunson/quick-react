import React from "react";
import { getAdvisories } from "../../api/apiManager";
import Cars from "./components/Cars";
import Advisories from "./components/Advisories";

export default class Dashbaord extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
      error: null
    };
  }

  render() {
    const { data, error } = this.state;
    // if (data === null) {
    //   return <h1>Loading</h1>;
    // }
    return (
      <div className="dashboardDiv">
        <h1>How fucked is Bart?</h1>
        <div className="row">
          <Advisories />
          <Cars />
        </div>
      </div>
    );
  }
}
