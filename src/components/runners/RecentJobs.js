import React from "react";
import Actions from "../../Actions";
import { connect } from "react-redux";
import Octicon from "react-octicon";
import { bindActionCreators } from "redux";

class RecentJobs extends React.Component {
  state = { jobs: null };
  componentDidMount() {
    Actions.getRecentJobs(this.props.runnerId)
      .then(
        result => {
          this.setState({ jobs: result });
        },
        error => {
          this.setState({ error: true });
        }
      )
      .then(Actions.addJobs("test"));

    //
    // Actions.getAllJobs(this.props.runnderId);
    Actions.getRunnersBulk(this.props.runnerId);
    //   .then(Actions.addJobs(this.state.jobs));
  }

  render() {
    const { jobs } = this.state;
    if (!jobs) {
      return <i className="fas fa-spinner fa-spin fa-5x center-text" />;
    }
    if (jobs.length === 0) {
      return <h3>This runner hasn't run any jobs</h3>;
    }
    return (
      <div className="list-group">
        <div className="list-group-item darkMode">
          <PassRate jobs={jobs} />
        </div>
        {jobs.map(item => (
          <div className="list-group-item darkMode">
            <h4>
              <Octicon name="repo mega" />
              {item.project.name}
            </h4>
            <h6>
              <i className="fas fa-list-ul" /> {item.stage}: {item.name}
            </h6>
            {getJobStatusIcon(item.status)}

            <br />

            <br />
            {/* STAGE AND JOB NAME */}
            {/* <div className="row">
              <div className="col">
                <i className="fas fa-list-ul" /> {item.stage}: {item.name}
              </div>
              <div className="col">{item.step}</div>
            </div>
            <br /> */}
            {/* GIT INFO */}
            <div className="row">
              <div className="col">
                <Octicon name="git-commit" />
                {item.commit.short_id}
              </div>
              <div className="col">
                <Octicon name="person" />
                {item.commit.committer_name}
              </div>
            </div>

            <div className="row">
              <div className="col"></div>
              <div className="col"></div>
            </div>
            <div className="row">
              <div className="col"></div>
              <div className="col"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const PassRate = props => {
  let passing = 0;
  let total = 0;
  props.jobs.forEach(item => {
    if (item.status === "success") {
      passing += 1;
    }
    total += 1;
  });
  let passRate = (passing / total) * 100;
  console.log("PASS RATE", passing, total);
  return <h5>{passRate}% of builds successful</h5>;
};

const getJobStatusIcon = status => {
  if (status === "success") {
    return (
      <span className="badge badge-success">
        <i class="far fa-check-circle" /> SUCCESS
      </span>
    );
  } else if (status === "running") {
    return (
      <span className="badge badge-primary">
        <i class="fas fa-circle-notch fa-spin" /> RUNNING
      </span>
    );
  } else if (status === "failed") {
    return (
      <span className="badge badge-danger">
        <i class="far fa-times-circle" /> FAILED
      </span>
    );
  } else if (status === "canceled") {
    return (
      <span className="badge badge-secondary">
        <i class="fas fa-ban" /> CANCELLED
      </span>
    );
  }
};

const ProjectCard = props => {
  // if (!props.details.name) {
  //   return null;
  // }
  console.log(props.details);
  // return null;
  // return null;
  return (
    <div>
      {props.details && (
        <div className="card projectCard">
          <div className="card-body">{props.details.name}</div>
          <img
            className="tester"
            src={getPipelineBadge(props.details.path_with_namespace)}
          />
        </div>
      )}
    </div>
  );
};

const getPipelineBadge = name => {
  return `https://gitlab.com/${name}/badges/master/pipeline.svg`;
};

const mapStateToProps = state => {
  return {
    groupList: state.SentryReducer.groupList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // addJobs: input => {
    //   dispatch(Actions.addJobs(input));
    // },
    getAllJobs: runnerId => {
      dispatch(Actions.getAllJobs(runnerId));
    },
    getRunnersBulk: runnerId => {
      dispatch(Actions.getRunnersBulk(runnerId));
    }
  };
};

// export default RecentJobs = connect(
//   null,
//   mapDispatchToProps
// )(RecentJobs);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecentJobs);
