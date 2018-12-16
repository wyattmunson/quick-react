import React from "react";
import stationList from "../../assets/stationList.json";

export default class StationList extends React.Component {
  render() {
    return (
      <div>
        <h1>Station List</h1>
        {stationList.station.map(item => (
          <p>
            <a href={`/station/${item.abbr}`}>{item.name}</a>
          </p>
        ))}
      </div>
    );
  }
}
