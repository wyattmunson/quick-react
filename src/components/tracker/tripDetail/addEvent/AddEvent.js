import React from "react";
import { Motion, spring } from "react-motion";
import { connect } from "react-redux";
import { FormField, DatePicker, SubmitButton, EasyButton } from "../../../common/form";
import Actions from "../../../../Actions";

class AddEvent extends React.Component {
  state = { type: "flight", trip: this.props.tripid };
  handleClick = e => {
    this.setState({ type: e.target.id });
  };

  checkActive = text => {
    if (text === this.state.type) {
      return "col activeAddEvent eventTypeIconDiv";
    }
    return "col eventTypeIconDiv";
  };

  submitAddEvent = () => {
    console.log("Submit add event pressed");
    let payload = this.state;
    console.log(payload);
    this.props.addEvent(payload);
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <li className="list-group-item addNewEventItem">
        <h2>Add new event to {this.props.name}</h2>
        {/* BUTTONS */}
        <div className="row text-center">
          {tripOptions.map(item => (
            <div onClick={this.handleClick} id={item.text} className={this.checkActive(item.text)}>
              <i className={`${item.className} fa-2x`} id={item.text} />
              <br />
              {item.text}
            </div>
          ))}
        </div>

        {/* FORM */}
        <form id="addEventForm">
          <FormField
            id="formForEventName"
            placeholder="SFO > PEK"
            name="title"
            getInput={this.onChange}
            label="Title"
          />
          <FormField
            id="formForEventSubtext"
            name="subtext"
            placeholder="Austin, Texas"
            getInput={this.onChange}
            label="Subtitle"
          />
          <DatePicker if="formStartDate" name="startdate" getInput={this.onChange} label="Start Date" />
          <DatePicker if="formStartDate" name="enddate" getInput={this.onChange} label="End Date" />
          <SubmitButton text="Add event" getInput={this.submitAddEvent} />
          <EasyButton text="cancel" getInput={this.props.cancelButton} />
        </form>
      </li>
    );
  }
}

const tripOptions = [
  {
    className: "fas fa-paper-plane",
    text: "flight"
  },
  {
    className: "fas fa-subway",
    text: "train"
  },
  {
    className: "fas fa-bus",
    text: "bus"
  },
  {
    className: "fas fa-car",
    text: "roadtrip"
  },
  {
    className: "fas fa-archway",
    text: "attraction"
  },
  {
    className: "fas fa-drumstick-bite",
    text: "meal"
  }
];

// const mapStateToProps = state => {
//     return {

//     }
// }

const mapDispatchToProps = dispatch => {
  return {
    addEvent: payload => {
      dispatch(Actions.addEvent(payload));
    }
  };
};

export default (AddEvent = connect(
  null,
  mapDispatchToProps
)(AddEvent));
