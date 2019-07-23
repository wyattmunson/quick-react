import React from "react";
import dataImport from "./trips.json";
import LineItem from "./lineItem/LineItem";
import { Link } from "react-router-dom";

export default class Tracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tripData: null };
  }

  componentDidMount() {
    fetch("http://localhost:5151/api/v1/trips/mine", {
      headers: {
        "x-access-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI0ZjgxMzllYi0zYmQwLTQyOGYtYmU0Mi00NGU5MjZhZWMwMWIiLCJpYXQiOjE1NjM4OTM2MDAsImV4cCI6MTU2NDE1MjgwMH0.jtjb4rKXmxUREVe1QJdXnOQodAKEoBoYkIhQyglujdQ"
      }
    })
      .then(response => response.json())
      .then(data => this.setState({ tripData: data }));
  }

  render() {
    const { tripData } = this.state;
    if (tripData == null) {
      return <h2>Loading</h2>;
    }
    return (
      <div className="container">
        <Link to="/trips/add">Add New</Link>
        {this.state.tripData.map(item => (
          <TripList {...item} />
        ))}
      </div>
    );
  }
}

const TripList = props => {
  if (props == null) {
    return null;
  }
  return (
    <div className="card tripCard">
      <div className="card-body">
        <h2 className="card-title">{props.trip}</h2>
        <h6>
          <i className="fas fa-map-marker" /> {props.cities}
        </h6>
        {props.startDate} - {props.endDate}
        {/* <div className="card-group"> */}
        <ul class="list-group list-group-flush">
          {props.events.map(item => (
            <LineItem {...item} />
          ))}
        </ul>
        {/* </div> */}
      </div>
    </div>
  );
};

// XXXXX DEPRECATED XXXXX
const FlightList = props => {
  return (
    //
    <li class="list-group-item">
      <div className="row">
        <div className="col-1">
          <div className="iconCircle">
            <i className={`iconDiv ${props.icon}`} />
          </div>
          <br />
          {props.date}
        </div>
        <div className="col-11">
          <h5 className="card-title">{props.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">
            {props.date} · {props.subText}
          </h6>
        </div>
      </div>
      {props.expandRow && (
        <div>
          <h3>Hello</h3>
        </div>
      )}
    </li>
  );
};
