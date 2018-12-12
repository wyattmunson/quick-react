import React from "react";
import Tab1 from "./contents/Tab1";
import Tab2 from "./contents/Tab2";
import Tab3 from "./contents/Tab3";

export default class Tabs extends React.Component {
  constructor() {
    super();
    this.state = {
      activeTab: 1
    };
  }

  onClick = input => {
    this.setState({ activeTab: input });
  };

  setActiveTab = input => {
    const { activeTab } = this.state;
    if (activeTab === input) {
      return "nav-link active";
    } else {
      return "nav-link";
    }
  };

  render() {
    const { activeTab } = this.state;
    return (
      <div className="container">
        <div className="tabRow">
          <ul className="nav nav-tabs">
            <li
              className="nav-item"
              onClick={() => {
                this.onClick(1);
              }}
            >
              <a className={this.setActiveTab(1)}>Tab 1</a>
            </li>
            <li
              className="nav-item"
              onClick={() => {
                this.onClick(2);
              }}
            >
              <a className={this.setActiveTab(2)}>Tab 2</a>
            </li>
            <li
              className="nav-item"
              onClick={() => {
                this.onClick(3);
              }}
            >
              <a className={this.setActiveTab(3)}>Tab 3</a>
            </li>
          </ul>
        </div>
        <Loader activeTab={activeTab} />
      </div>
    );
  }
}

const Loader = props => {
  //   const { activeTab } = props;
  const activeTab = props.activeTab;
  if (activeTab === 1) {
    return <Tab1 />;
  } else if (activeTab === 2) {
    return <Tab2 />;
  } else if (activeTab === 3) {
    return <Tab3 />;
  } else {
    return null;
  }
};
