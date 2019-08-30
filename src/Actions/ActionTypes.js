const requestTypes = ["ABORT", "FAILURE", "SUCCESS", "REQUEST"];

function createRequestTypes(base) {
  let res = {};
  requestTypes.forEach(type => (res[type] = `${base}_${type}`));
  return res;
}

export const GET_TRIPS = createRequestTypes("GET_TRIPS");
export const POST_TRIP = createRequestTypes("POST_TRIP");
export const GET_EVENT_BY_ID = createRequestTypes("GET_EVENT_BY_ID");
// export const POST_TRIP = createRequestTypes("POST_TRIP");
export const DELETE_TRIP = createRequestTypes("DELETE_TRIP");
export const DELETE_EVENT = createRequestTypes("DELETE_EVENT");
export const CREATE_EVENT = createRequestTypes("CREATE_EVENT");
export const GET_GROUPS = createRequestTypes("GET_GROUPS");
export const GET_ALL_JOBS = createRequestTypes("GET_ALL_JOBS");

export const GET_RUNNERS_BULK = createRequestTypes("GET_RUNNERS_BULK");

export const GET_RUNNERS = createRequestTypes("GET_RUNNERS");

export const CHANGE_TAB_INDEX = "CHANGE_TAB_INDEX";
export const ADD_JOBS = "ADD_JOBS";
