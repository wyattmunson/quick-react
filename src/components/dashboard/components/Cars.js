import React from "react";
import { getCarCount } from "../../../api/apiManager";

export default class Cars extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
      error: null
    };
  }
  componentDidMount() {
    getCarCount().then(
      result => {
        this.setState({
          data: result.root.traincount
        });
      },
      error => {
        this.setState({
          error: error
        });
      }
    );
  }
  render() {
    const { data, error } = this.state;

    if (data === null) {
      return <h1>Loading car count</h1>;
    }
    return (
      <div className="card border-success mb-3 stationCard mx-auto">
        <div className="card-body text-success">
          <h5 className="card-title">{data} cars</h5>
          <p className="card-text">System is running at normal volume.</p>
        </div>
      </div>
    );
  }
}
