import React from "react";
import dataImport from "./trips.json";
import LineItem from "./lineItem/LineItem";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Actions from "../../Actions";
import moment from "moment";

class Tracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tripData: null };
  }

  componentDidMount() {
    this.props.getMyTrips();
  }

  handleRefresh = () => {
    window.location.reload();
  };

  render() {
    const { tripData } = this.state;
    const { error, trips, fetching } = this.props;
    if (error) {
      return <FailedToFetch refreshCallback={this.handleRefresh} />;
    }
    if (trips === null) {
      return <h2>Loading</h2>;
    }
    console.log(trips);
    return (
      <div className="container">
        <div className="stdHeader">
          <Link to="/trips/add" className="btn btn-outline-primary float-right">
            Add New
          </Link>
          <h1>Your trips</h1>
        </div>
        <div className="row">
          {trips.map(item => (
            <TripList {...item} />
          ))}
        </div>
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
        {/* TRIP TITLE */}
        <h2 className="card-title">
          <Link to={`/trip/${props.tripid}`}>{props.name}</Link>
        </h2>
        {/* TRIP CITIES */}
        <h6>
          <i className="fas fa-map-marker-alt" /> {props.cities}
        </h6>
        {/* TRIP DATE */}
        <i className="far fa-calendar-alt" /> {moment(props.startdate).format("ll")} -{" "}
        {moment(props.enddate).format("ll")}
        {/* <Link to={`/trip/${props.tripid}`} className="btn btn-primary">
          View Trip
        </Link> */}
      </div>
    </div>
  );
};

const FailedToFetch = props => {
  return (
    <div className="container text-center iconPageHeader">
      <i class="fas fa-bomb fa-3x" />
      <h2>Failed to fetch</h2>
      <p>Could not reach server.</p>
      <button className="btn btn-secondary" onClick={props.refreshCallback}>
        Reload the page
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    trips: state.TripReducer.trips,
    error: state.TripReducer.error,
    fetching: state.TripReducer.fetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMyTrips: () => {
      dispatch(Actions.getUserTrips());
    }
  };
};

console.log(mapDispatchToProps);

export default (Tracker = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tracker));
