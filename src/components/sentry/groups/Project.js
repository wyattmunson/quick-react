import React from "react";
import Actions from "../../../Actions";
import ApiEndpoints from "../../../Actions/ApiActions";

export default class Projects extends React.Component {
  state = { pipeline: null };
  componentDidMount() {
    // this.props.getGroups();
    // Actions.getGroups(this.props.groupList.id);
    // this.setState({
    //   projects: Actions.getGroups(this.props.groupList.id)
    // });
    // fetch(endpoint, {
    //   headers: gitlabHeader(),
    //   method: "GET"
    // })
    //   .then(res => {
    //     if (!res.ok) {
    //       throw Error;
    //     }
    //     return res.json();
    //   })
    // Actions.getProjects(this.props.groupList.id).then(
    //   result => {
    //     this.setState({ projects: result });
    //   },
    //   error => {
    //     this.setState({ error: true });
    //   }
    // );
    let url = `https://gitlab.com/api/v4/projects/${
      this.props.details.id
    }/pipelines`;
    // let url = ApiEndpoints;
    Actions.genericGet(url).then(
      result => {
        this.setState({ pipeline: result });
      },
      error => {
        this.setState({ error: error });
      }
    );
  }

  render() {
    let { details } = this.props;
    let { pipeline } = this.state;
    // if (!projects) {
    //   return <p>Loading...</p>;
    // }
    if (details === undefined || details === null) {
      return null;
    }

    return (
      <div>
        <div className="card projectCard">
          <div className="card-body">{details.name}</div>
          <img
            className="tester"
            src={getPipelineBadge(details.path_with_namespace)}
          />
        </div>
      </div>
    );
  }
}

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
