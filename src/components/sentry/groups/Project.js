import React from "react";
import Actions from "../../../Actions";
import ApiEndpoints from "../../../Actions/ApiActions";
import ReactScoreIndicator from "react-score-indicator";

export default class Projects extends React.Component {
  state = { pipeline: null, currentPipe: null };
  componentDidMount() {
    let url = `https://gitlab.com/api/v4/projects/${
      this.props.details.id
    }/pipelines/`;
    // let url = ApiEndpoints;
    Actions.genericGet(url).then(
      result => {
        this.setState({ pipeline: result });
        //   return result;
        return result;
      },
      error => {
        this.setState({ error: error });
      }
    );
    this.request(url);
    //   .then(function(result) {
    //     this.getCurrentPipe(result);
    //   });
    // //   .then(
    //     Actions.genericGet(url + result[0].id).then(
    //       result => {
    //         this.setState({ pipeline: result });
    //       },
    //       error => {
    //         this.setState({ error: error });
    //       }
    //     )
    //   );

    // let endpoint = url + this.props.details;
    // this.request();
    // Actions.genericGet(url).then(
    //     result => {
    //       this.setState({ pipeline: result });
    //     },
    //     error => {
    //       this.setState({ error: error });
    //     }
    //   );
  }

  getCurrentPipe = async data => {
    console.log("DAATAAAAAA", data);
    if (data.length > 0) {
      let url = `https://gitlab.com/api/v4/projects/${
        this.props.details.id
      }/pipelines/`;

      console.log("DATA[0].id ===", data[0].id);
      const getThisPipe = await Actions.genericGet(url + data[0].id).then(
        result => {
          this.setState({ pipeline: result });
        },
        error => {
          this.setState({ error: error });
        }
      );
    }
  };

  request = async url => {
    let result = "WAAAA";
    const getAllPipes = await Actions.genericGet(url)
      .then(
        result => {
          this.setState({ pipeline: result });
          return result;
        },
        error => {
          this.setState({ error: error });
        }
      )
      .then(console.log("IN THE THEN", getAllPipes));
  };

  render() {
    let { details } = this.props;
    let { pipeline } = this.state;
    if (details === undefined || details === null) {
      return null;
    }

    return (
      <div className={`list-group-item darkMode`}>
        <img
          className="tester float-right"
          src={getPipelineBadge(details.path_with_namespace)}
        />
        <h3>{details.name}</h3>
        <RecentPipe />
        <PipelineChecks pipeline={pipeline} />
        {/* <ReactScoreIndicator value={30} maxValue={100} /> */}
      </div>
    );
  }
}

const RecentPipe = props => {
  return null;
};

const PipelineChecks = props => {
  if (props.pipeline === null) {
    return null;
  }

  if (props.pipeline.length === 0) {
    return <p>Pipeline never run.</p>;
  }

  const getIcon = status => {
    if (status == "success") {
      return "far fa-check-circle";
    } else if (status === "failed") {
      return "far fa-times-circle";
    } else if (status === "canceled") {
      return "far fa-pause-circle";
    } else if (status === "running") {
      return "fas fa-spinner fa-spin";
    } else if (status === "pending") {
      return "fas fa-clock";
    } else if (status === "skipped") {
      return "fas fa-ban";
    }
  };
  let passPercentage = { pass: 0, total: 0 };
  props.pipeline.forEach(item => console.log(item));
  return (
    <div>
      <small>RECENT BUILDS (94% PASSING)</small>
      <br />
      <i className={`${getIcon(props.pipeline[0].status)} fa-4x`} />
      {props.pipeline.slice(0, 5).map(item => (
        //   getIcon(item.)
        <i className={`${getIcon(item.status)} fa-2x buildIcons`} />
        // <p>{item.status}</p>
      ))}
    </div>
  );
};

const getPipelineBadge = name => {
  return `https://gitlab.com/${name}/badges/master/pipeline.svg`;
};

// const mapStateToProps = state => {
//   return {
//     groupList: state.SentryReducer.groupList
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     getGroups: () => {
//       dispatch(Actions.getGroups());
//     }
//   };
// };

// export default (SentryDashboard = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(SentryDashboard));
