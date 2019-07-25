const requestTypes = ["ABORT", "FAILURE", "SUCCESS", "REQUEST"];

function createRequestTypes(base) {
  let res = {};
  requestTypes.forEach(type => (res[type] = `${base}_${type}`));
  console.log(res);
  return res;
}

export const GET_TRIPS = createRequestTypes("GET_TRIPS");
export const POST_TRIP = createRequestTypes("POST_TRIP");
export const GET_EVENT_BY_ID = createRequestTypes("GET_EVENT_BY_ID");
// export const POST_TRIP = createRequestTypes("POST_TRIP");
export const DELETE_TRIP = createRequestTypes("DELETE_TRIP");
export const DELETE_EVENT = createRequestTypes("DELETE_EVENT");

export const CHANGE_TAB_INDEX = "CHANGE_TAB_INDEX";
