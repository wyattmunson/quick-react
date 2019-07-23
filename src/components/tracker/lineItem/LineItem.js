import React from "react";

export default class LineItem extends React.Component {
  constructor() {
    super();
    this.state = {
      expandRow: false
    };
  }

  onClick = e => {
    this.setState({ expandRow: !this.state.expandRow });
  };

  render() {
    const { expandRow } = this.state;

    return (
      <li class="list-group-item" onClick={this.onClick}>
        <div className="row">
          <div className="col-1">
            <div className="iconCircle">
              <i className={`iconDiv ${this.props.icon}`} />
            </div>
            <br />
            {this.props.date}
          </div>
          <div className="col-11">
            <h5 className="card-title">{this.props.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">
              {this.props.date} · {this.props.subText}
            </h6>
            {expandRow && <RowDetail />}
          </div>
        </div>
      </li>
    );
  }
}

const RowDetail = props => {
  return (
    <div className="row text-center">
      <div className="col-4">SFO</div>
      <div className="col-4">to</div>
      <div className="col-4">PEK</div>
    </div>
  );
};
