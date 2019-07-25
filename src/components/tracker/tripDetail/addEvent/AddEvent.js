import React from "react";
import { FormField } from "../../../common/form";

export default class AddEvent extends React.Component {
  state = { active: "flight" };
  handleClick = e => {
    this.setState({ active: e.target.id });
  };

  checkActive = text => {
    if (text === this.state.active) {
      return "col activeAddEvent";
    }
    return "col";
  };

  render() {
    return (
      <li className="list-group-item">
        <h2>Add new event</h2>
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
