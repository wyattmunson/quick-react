import React from "react";
import { FormField, DatePicker, SubmitButton } from "../../common/form";
import Actions from "../../../Actions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export class AddTrip extends React.Component {
  state = { name: null, cities: null, startdate: null, enddate: null };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addTrip(this.state);
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/tracker" />;
    }

    return (
      <div className="container">
        <h1>Add New Trip</h1>
        <form>
          {/* TRIP NAME */}
          <FormField
            label="Trip Name"
            placeholder="Atlantis, December 2019"
            id="tripNameInput"
            getInput={this.onChange}
            name="name"
          />

          <FormField
            label="Cities"
            placeholder="Bangkok, Chang Mai, Koh Tao"
            id="tripCitiesInput"
            getInput={this.onChange}
            name="cities"
          />

          <DatePicker id="endDateInput" getInput={this.onChange} name="startdate" label="Start Date" />

          <DatePicker id="startDateInput" getInput={this.onChange} name="enddate" label="End Date" />

          <SubmitButton text="Create Trip" getInput={this.onSubmit} />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTrip: payload => {
      dispatch(Actions.addTrip(payload));
    }
  };
};

export default (AddTrip = connect(
  null,
  mapDispatchToProps
)(AddTrip));
