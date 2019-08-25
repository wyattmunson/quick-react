import React from "react";
import Actions from "../../../Actions";
import ApiEndpoints from "../../../Actions/ApiActions";
import Project from "./Project";

export default class Groups extends React.Component {
  state = { projects: null };
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
    Actions.getProjects(this.props.groupList.id).then(
      result => {
        this.setState({ projects: result });
      },
      error => {
        this.setState({ error: true });
      }
    );
  }

  render() {
    let { groupList } = this.props;
    let { projects } = this.state;
    if (!projects) {
      return <p>Loading GROUPS...</p>;
    }

    return (
      <div className="card groupCard">
        <div className="card-body">
          <a href={groupList.web_url}>{groupList.name}</a>
          <small>{groupList.description}</small>

          <div className="list-group">
            {projects.projects.map(item => (
              <Project details={item} groupId={groupList.id} />
            ))}
          </div>

          {/* <ProjectCard /> */}
        </div>
      </div>
    );
  }
}

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
