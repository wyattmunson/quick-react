// import * as AppReducer from "./AppReducer";
import * as TripReducer from "./TripReducer";
import { combineReducers } from "redux";

const reducers = combineReducers(Object.assign(TripReducer));
console.log("REDUCERS", reducers);

export default reducers;
