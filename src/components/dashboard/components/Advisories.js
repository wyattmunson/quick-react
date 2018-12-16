import React from "react";
import { getAdvisories } from "../../../api/apiManager";

export default class Advisories extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
      error: null
    };
  }

  componentDidMount() {
    getAdvisories().then(
      result => {
        this.setState({
          data: result.root.bsa
        });
      },
      error => {
        this.setState({
          error: error
        });
      }
    );
  }

  calculateStatus = () => {
    let { data } = this.state;
    let description = data[0].description["#cdata-section"];
    if (description === "No delays reported.") {
      return <NoAdvisory />;
    } else {
      return <Advisory data={data} />;
    }
  };

  render() {
    const { data, error } = this.state;
    if (data === null) {
      return <h1>Loading advisories</h1>;
    }
    return <div className="dashboardDiv">{this.calculateStatus()}</div>;
  }
}

const NoAdvisory = () => {
  return (
    <div className="card border-success mb-3 stationCard mx-auto">
      <div className="card-body text-success">
        <h5 className="card-title">No advisories</h5>
        <p className="card-text">There are no delays in the system.</p>
      </div>
    </div>
  );
};

const Advisory = props => {
  return props.data.map(item => (
    <div className="card border-danger mb-3 stationCard">
      <div className="card-body text-danger">
        <h5 className="card-title">Advisory!</h5>
        <p className="card-text">{item.description["#cdata-section"]}</p>
      </div>
    </div>
  ));
};
