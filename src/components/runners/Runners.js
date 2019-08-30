import React from "react";
import Actions from "../../Actions";
import { connect } from "react-redux";
import RecentJobs from "./RecentJobs";

class Runners extends React.Component {
  componentDidMount() {
    const { runners } = this.props;
    if (!runners || runners.length === 0) {
      console.log("FIRED RUNNERS");
      this.props.getRunners();
    }
  }

  render() {
    const { runners } = this.props;
    if (!runners || runners.length === 0) {
      return <i className="fas fa-spinner fa-spin fa-5x center-text" />;
    }
    return (
      <div className="">
        <h1>Runners</h1>
        <h2>
          {/* Available Runners:{" "} */}
          <span className="badge badge-secondary">
            Available Runners: {runners.length}
          </span>
        </h2>

        {/* RUNNER CARDS */}
        <div className="row">
          {/* <div className="col"> */}
          {runners.map(item => (
            <RunnerCard data={item} />
          ))}
          {/* </div> */}
        </div>
      </div>
    );
  }
}

const RunnerCard = props => {
  return (
    <div className="card runnerCard bg-dark">
      <div className="card-body">
        <span className="float-right">{getIcon(props.data.status)}</span>
        <h2>{props.data.ip_address}</h2>
        <p>{props.data.description}</p>

        <small>RECENT JOBS</small>
        <br />
        <RecentJobs runnerId={props.data.id} />
      </div>
    </div>
  );
};

const getIcon = status => {
  if (status === "online") {
    return <i class="far fa-check-circle fa-3x" />;
  } else if (status === "active") {
    return <i class="fas fa-circle-notch fa-spin fa-3x" />;
  } else if (status === "offline") {
    return <i class="fas fa-bed fa-spin fa-3x" />;
  } else if (status === "paused") {
    return <i class="far fa-pause-circle fa-3x" />;
  }
};

// paused online offline

const mapStateToProps = state => {
  return {
    runners: state.SentryReducer.runners,
    allJobs: state.SentryReducer.allJobs
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getRunners: () => {
      dispatch(Actions.getRunners());
    }
  };
};

export default Runners = connect(
  mapStateToProps,
  mapDispatchToProps
)(Runners);
