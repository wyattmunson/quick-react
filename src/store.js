import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./Reducers";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";

const logger = createLogger({});

// const middleware = applyMiddleware(thunk, logger);

// const store = createStore(reducers, composeWithDevTools(middleware));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk, logger)));

export default store;
