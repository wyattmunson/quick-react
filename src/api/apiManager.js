import * as apiEndpoints from "./apiEndpoints";

export function getStationInfo(input) {
  let endpoint = apiEndpoints.getStation + input;
  return fetch(endpoint, {
    method: "GET"
  }).then(res => {
    if (!res.ok) {
      throw Error;
    }
    return res.json();
  });
}

export function getAdvisories() {
  return fetch(apiEndpoints.getBSA, {
    method: "GET"
  }).then(res => {
    if (!res.ok) {
      throw Error;
    }
    return res.json();
  });
}

export function getCarCount() {
  return fetch(apiEndpoints.getCarCount, {
    method: "GET"
  }).then(res => {
    if (!res.ok) {
      throw Error;
    }
    return res.json();
  });
}
