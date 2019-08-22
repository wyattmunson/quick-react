import React from "react";
import Actions from "../../../Actions";
import { connect } from "react-redux";

export default class Groups extends React.Component {
  componentDidMount() {
    // this.props.getGroups();
    Actions.getGroups(this.props.groupList.id);
  }

  render() {
    let currentTime = new Date().toLocaleDateString();
    let { groupList } = this.props;
    if (!this.props.groupList) {
      return <p>Loading...</p>;
    }

    return (
      <div className="card">
        <div className="card-body">
          <a href={groupList.web_url}>{groupList.name}</a>
          <small>{groupList.description}</small>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    groupList: state.SentryReducer.groupList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getGroups: () => {
      dispatch(Actions.getGroups());
    }
  };
};

// export default (SentryDashboard = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(SentryDashboard));
