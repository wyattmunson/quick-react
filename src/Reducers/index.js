// import * as AppReducer from "./AppReducer";
import * as TripReducer from "./TripReducer";
import * as SentryReducer from "./SentryReducer";
import { combineReducers } from "redux";

const reducers = combineReducers(Object.assign(TripReducer, SentryReducer));
console.log("REDUCERS", reducers);

export default reducers;
