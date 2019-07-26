import * as types from "./ActionTypes";
import * as ApiEndpoints from "./ApiEndpoints";
import { successAlert, failureAlert } from "./alerts";
import axios from "axios";
import Alert from "react-s-alert";
import "react-s-alert/dist/s-alert-default.css";

export function getUserTrips1() {
  return dispatch => {
    dispatch({ type: types.GET_TRIPS.REQUEST });

    axios
      .get(ApiEndpoints.getMyTrips, {
        headers: {
          "x-access-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI0ZjgxMzllYi0zYmQwLTQyOGYtYmU0Mi00NGU5MjZhZWMwMWIiLCJpYXQiOjE1NjM4OTM2MDAsImV4cCI6MTU2NDE1MjgwMH0.jtjb4rKXmxUREVe1QJdXnOQodAKEoBoYkIhQyglujdQ",
          "Content-Type": "application/json"
        }
      })
      .then(function(response) {
        dispatch({ type: types.GET_TRIPS.SUCCESS, payload: response.data });
      })
      .catch(function(error) {
        dispatch({ type: types.GET_TRIPS.FAILURE, payload: error });
      });
  };
}

export function getUserTrips() {
  return dispatch => {
    dispatch({ type: types.GET_TRIPS.REQUEST });

    fetch(ApiEndpoints.getMyTrips, {
      headers: buildHeader(),
      method: "GET"
    })
      .then(res => {
        if (!res.ok) {
          throw Error;
        }
        return res.json();
      })
      .then(
        result => {
          //   const buMap = arrayToObject(result.data, "businessUnitId");
          //   const allData = { buMap: buMap, result: result.data };
          dispatch({ type: types.GET_TRIPS.SUCCESS, payload: result });
        },
        error => {
          dispatch({ type: types.GET_TRIPS.FAILURE, payload: error });
        }
      );
  };
}

export function getEventsByTrip(id) {
  return dispatch => {
    dispatch({ type: types.GET_EVENT_BY_ID.REQUEST });
    axios
      .post(ApiEndpoints.getEventByTripId, {
        trip: id
      })
      .then(function(response) {
        dispatch({ type: types.GET_EVENT_BY_ID.SUCCESS, payload: response });
        console.log(response);
      })
      .catch(function(error) {
        dispatch({ type: types.GET_EVENT_BY_ID.FAILURE, payload: error });
        console.log(error);
      });
  };
}

export function addTrip(payload) {
  return dispatch => {
    dispatch({ type: types.POST_TRIP.REQUEST });
    axios
      .post(ApiEndpoints.trips, payload, { headers: headers })
      .then(function(response) {
        dispatch({ type: types.POST_TRIP.SUCCESS, payload: response });
        console.log(response);
      })
      .catch(function(error) {
        dispatch({ type: types.POST_TRIP.FAILURE, payload: error });
        console.log(error);
      });
  };
}

export function addEvent(payload) {
  return dispatch => {
    dispatch({ type: types.CREATE_EVENT.REQUEST });
    axios
      .post(ApiEndpoints.event, payload, { headers: headers })
      .then(function(response) {
        dispatch({ type: types.CREATE_EVENT.SUCCESS, payload: payload });
        console.log(response);
        console.log(payload);
        successAlert(`Added ${payload.title}`);
      })
      .catch(function(error) {
        dispatch({ type: types.CREATE_EVENT.FAILURE, payload: error });
        console.log(error);
        // failureAlert(`Added ${payload.title}`);
        failureAlert(`Added ${error}`);
      });
  };
}

export function deleteTrip(payload) {
  return dispatch => {
    dispatch({ type: types.DELETE_TRIP.REQUEST });
    axios
      .delete(ApiEndpoints.trip, { headers: headers, data: payload })
      .then(function(response) {
        dispatch({ type: types.DELETE_TRIP.SUCCESS, payload: response });
        successAlert(`Deleted ${payload.title}`);
      })
      .then(function(error) {
        dispatch({ type: types.DELETE_TRIP.FAILURE, payload: error });
        failureAlert(`Could not delete ${payload.title}`);
      });
  };
}

export function deleteEvent(payload) {
  return dispatch => {
    dispatch({ type: types.DELETE_EVENT.REQUEST });
    axios
      .post(ApiEndpoints.event, payload, { headers: headers })
      .then(function(response) {
        dispatch({ type: types.DELETE_EVENT.SUCCESS, payload: response });
      })
      .then(function(error) {
        dispatch({ type: types.DELETE_EVENT.FAILURE, payload: error });
      });
  };
}

export function getEventsByTrip2(id) {
  let endpoint = ApiEndpoints.getEventByTripId;
  let payload = {
    trip: id
  };
  console.log("PAYLOAD", payload);
  return dispatch => {
    dispatch({ type: types.GET_EVENT_BY_ID.REQUEST });

    fetch(endpoint, {
      headers: buildHeader(),
      method: "POST",
      body: JSON.stringify(payload)
      //   body: payload
    })
      .then(res => {
        if (!res.ok) {
          throw Error;
        }
        return res.json();
      })
      .then(
        result => {
          dispatch({ type: types.GET_EVENT_BY_ID.SUCCESS, payload: result });
        },
        error => {
          dispatch({ type: types.GET_EVENT_BY_ID.FAILURE, payload: error });
        }
      );
  };
}

let headers = {
  "x-access-token":
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI0ZjgxMzllYi0zYmQwLTQyOGYtYmU0Mi00NGU5MjZhZWMwMWIiLCJpYXQiOjE1NjM4OTM2MDAsImV4cCI6MTU2NDE1MjgwMH0.jtjb4rKXmxUREVe1QJdXnOQodAKEoBoYkIhQyglujdQ"
};

function buildHeader() {
  let options = (headers = {
    "x-access-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI0ZjgxMzllYi0zYmQwLTQyOGYtYmU0Mi00NGU5MjZhZWMwMWIiLCJpYXQiOjE1NjM4OTM2MDAsImV4cCI6MTU2NDE1MjgwMH0.jtjb4rKXmxUREVe1QJdXnOQodAKEoBoYkIhQyglujdQ"
  });
  return (headers = {
    "x-access-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI0ZjgxMzllYi0zYmQwLTQyOGYtYmU0Mi00NGU5MjZhZWMwMWIiLCJpYXQiOjE1NjQxNTUzMDIsImV4cCI6MTU2NDQxNDUwMn0.rEBRd5M-UMsum-3F0unF0OA9XbdeE9-6FPrmv23Jr48"
  });
}
