import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Actions from "../../../Actions";
import { Redirect } from "react-router-dom";
import moment from "moment";

import Loader from "../../common/Loader";
import ErrorPage from "../../common/Error";
import AddEvent from "./addEvent/AddEvent";
import { EasyButton } from "../../common/form";

export class TripDetail extends React.Component {
  state = { trip: null, expandTools: false, confirmDelete: false, toggleAdd: false };
  componentDidMount() {
    let id = this.props.location.pathname;
    id = id.replace("/trip/", "");
    this.props.getEventsByTrip(id);

    if (this.props.events === null) {
      this.props.getMyTrips();
    }
    try {
      let trip = this.props.trips.find(obj => obj.tripid === id);
      this.setState({ trip: trip });
    } catch (error) {
      console.error(error);
    }
  }

  getEvents = () => {
    let id = this.props.location.pathname;
    id = id.replace("/trip/", "");

    try {
      let trip = this.props.trips.find(obj => obj.tripid === id);
      this.setState({ trip: trip });
    } catch (error) {
      console.error(error);
    }
  };

  handleAskDelete = e => {
    e.preventDefault();
    this.setState({ confirmDelete: !this.state.confirmDelete });
    // this.props.deleteTrip();
  };

  handleDelete = e => {
    let payload = { tripid: this.state.trip.tripid };
    console.log("REQUEST PAYLOAD", payload);
    this.props.deleteTrip(payload);
    this.setState({ deleted: true });
  };

  toggelAddEvent = () => {
    this.setState({ toggleAdd: !this.state.toggleAdd });
  };

  render() {
    const { events, error } = this.props;
    const { trip, toggleAdd } = this.state;

    // Trip was deleted
    // TODO: does not confirm if delete request resolved with 204 vs 400
    if (this.state.deleted) {
      return <Redirect to={"/tracker"} />;
    }

    // API call failed
    if (error === true) {
      return <ErrorPage text="No such trip exists" />;
    }

    // On pageload, or direct link, load parent trip info (handle unintended user behavior)
    if (trip === null) {
      this.getEvents();
      return <Loader />;
    }

    // Loading child events
    if (events === null) {
      return <Loader />;
    }

    // Normal return
    return (
      <div className="container">
        {/* TRIP DETAIL HEADER */}
        <div className="tripDetailHeader">
          <h1>{trip.name}</h1>
          <div className="card-subtitle mb-2 text-muted">
            {moment(trip.startdate).format("LL")} - {moment(trip.enddate).format("LL")}
          </div>
          <h3>{trip.cities}</h3>
        </div>
        <EditToolbar />
        <ConfirmDeleteBox
          toggleDelete={this.handleAskDelete}
          onDelete={this.handleDelete}
          confirmDelete={this.state.confirmDelete}
        />
        <br />
        {/* NEW LIST GROUP */}
        <ul className="list-group">
          {/* LIST HEADAER */}
          <ListHeader clickCallback={this.toggelAddEvent} active={this.state.toggleAdd} />
          {toggleAdd && <AddEvent tripid={trip.tripid} name={trip.name} cancelButton={this.toggelAddEvent} />}
          <EventList events={events} />
        </ul>
        {/* OLD LIST OF EVENTS */}
      </div>
    );
  }
}

const EditToolbar = props => {
  const test = () => {
    return "fas fa-trash-alt mutedButton";
  };

  //   if (!props.expandTools) {
  //     return (
  //       <div className="fa-2x">
  //         <i className="fas fa-cogs mutedButton" />
  //       </div>
  //     );
  //   }

  return (
    <div className="fa-2x">
      <i className="fas fa-pencil-alt mutedButton" />
      <i className="fas fa-trash-alt mutedButton" />
      {/* <i className={test()} /> */}
    </div>
  );
};

const ListHeader = props => {
  return (
    <li className="list-group-item list-group-item-primary">
      {/* NEW WORKOUT BUTTON */}
      <div className="float-right">
        {/* <Link className="btn btn-primary" to="workouts/new">
          New Event
        </Link> */}
        <EasyButton text={props.active ? "Cancel" : "Add event"} getInput={props.clickCallback} />
      </div>
      <h2>Events</h2>
    </li>
  );
};

const ConfirmDeleteBox = props => {
  // DELETE BUTTON
  if (!props.confirmDelete) {
    return (
      //   <button className="btn btn-danger" onClick={props.toggleDelete}>
      //     Delete
      //   </button>
      <i className="fas fa-trash-alt mutedButton fa-2x" onClick={props.toggleDelete} />
    );
  }

  //   CANCEL/CONFIRM BUTTONS
  return (
    <div>
      <button type="button" className="btn btn-secondary" onClick={props.toggleDelete}>
        Cancel
      </button>
      <button type="button" className="btn btn-danger" onClick={props.onDelete}>
        Confirm Delete
      </button>
    </div>
  );
};

const EventList = props => {
  return (
    <div className="">
      {props.events.map(item => (
        <li className="list-group-item" key={item.exerciseid}>
          <div className="row">
            {/* ICON COL */}
            <div className="col-1">
              <i className={`iconDiv text-center fa-2x ${item.icon}`} />
              <br />
              {item.type}
            </div>
            {/* CONTENT COL */}
            <div className="col-10">
              <h5 className="card-title">{item.title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{item.subtext}</h6>
            </div>
            {/* TOOLBAR COL */}
            <div className="col-1">
              <i className="fas fa-ellipsis-v" />
            </div>
          </div>
        </li>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    events: state.TripReducer.tripWithEvent,
    fetching: state.TripReducer.fetching,
    error: state.TripReducer.error,
    trips: state.TripReducer.trips
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getEventsByTrip: id => {
      dispatch(Actions.getEventsByTrip(id));
    },
    getMyTrips: () => {
      dispatch(Actions.getUserTrips());
    },
    deleteTrip: payload => {
      dispatch(Actions.deleteTrip(payload));
    }
  };
};

export default (TripDetail = connect(
  mapStateToProps,
  mapDispatchToProps
)(TripDetail));
