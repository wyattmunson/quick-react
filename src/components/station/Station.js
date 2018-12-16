import React from "react";
import { getStationInfo } from "../../api/apiManager";
import stationList from "../../assets/stationList.json";

export default class Station extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
      error: null,
      stationInfo: null
    };
  }

  componentDidMount() {
    let abbr = window.location.pathname.replace("/station/", "");
    console.log(abbr);
    getStationInfo(abbr).then(
      result => {
        this.setState({
          data: result
        });
      },
      error => {
        this.setState({
          error: error
        });
      }
    );
    let findStation = stationList.station.find(x => x.abbr === abbr);
    this.setState({ stationInfo: findStation });
  }

  render() {
    const { data, error, stationInfo } = this.state;
    console.log(window.location.pathname);

    if (data === null) {
      return <h1 className="container">Loading</h1>;
    }
    const destinations = data.root.station[0].etd;
    console.log(destinations);
    return (
      <div className="container">
        <h1 className="pageHeader">{stationInfo.name}</h1>
        <h3>
          {stationInfo.city}, {stationInfo.state}
        </h3>
        <GenerateDestinations list={destinations} />
      </div>
    );
  }
}

const GenerateDestinations = props => {
  return props.list.map(item => (
    <div>
      <h2>{item.destination}</h2>
      <div className="row">
        {item.estimate.map(item => (
          <GenerateCards list={item} />
        ))}
      </div>
    </div>
  ));
};

// const

const GenerateCards = props => {
  console.log(props.list);
  let item = props.list;
  return (
    <div class={`card stationCard ${getColorStyling(item.color)}`}>
      <div class="card-body">
        <span className="minutesBig">
          {item.minutes}
          <span className="minutesSmall">mins</span>
        </span>
        <h3 class="card-title">{item.minutes}</h3>
        <h6 class="card-subtitle mb-2 text-muted">
          {item.color}, {item.direction}
        </h6>
        <p class="card-text">
          Platform: {item.platform}, {item.length} cars
        </p>
      </div>
    </div>
  );
};

const getColorStyling = input => {
  switch (input) {
    case "ORANGE":
      return "orangeBorder";
    case "YELLOW":
      return "yellowBorder";
    case "RED":
      return "redBorder";
    case "BLUE":
      return "blueBorder";
    case "GREEN":
      return "greenBorder";
  }
};

const northList = [
  {
    id: 1,
    destination: "Richmond",
    line: "Orange",
    time: "2 mins"
  },
  {
    id: 2,
    destination: "Daily City",
    line: "Blue",
    time: "5 mins"
  },
  {
    id: 3,
    destination: "Richmond",
    line: "Orange",
    time: "17 mins"
  },
  {
    id: 4,
    destination: "Daily City",
    line: "Blue",
    time: "20 mins"
  }
];

const southList = [
  {
    id: 1,
    destination: "Dublin / Pleasanton",
    line: "Blue",
    time: "3 mins"
  },
  {
    id: 2,
    destination: "Warm Springs / South Fremont",
    line: "Orange",
    time: "7 mins"
  },
  {
    id: 3,
    destination: "Dublin / Pleasanton",
    line: "Blue",
    time: "18 mins"
  },
  {
    id: 4,
    destination: "Warm Springs / South Fremont",
    line: "Orange",
    time: "22 mins"
  }
];
