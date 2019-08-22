import React from "react";
import Actions from "../../Actions";
import { connect } from "react-redux";
import Groups from "./groups/Groups";

class SentryDashboard extends React.Component {
  componentDidMount() {
    this.props.getGroups();
  }

  render() {
    let currentTime = new Date().toLocaleDateString();
    const { groupList } = this.props;
    if (!this.props.groupList) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <h1>Sentry: WCF Build Status</h1>
        <small>Refreshed: {currentTime}</small>
        {groupList.map(item => (
          <Groups groupList={item} />
        ))}

        {/* <GroupCards groupList={this.props.groupList} /> */}
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

export default (SentryDashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(SentryDashboard));
