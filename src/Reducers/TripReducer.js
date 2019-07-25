const defaultState = {
  trips: null,
  error: null,
  tripWithEvent: null
};

export const TripReducer = (state = defaultState, action) => {
  switch (action.type) {
    // GET TRIPS
    case "GET_TRIPS_REQUEST": {
      return {
        ...state,
        fetching: true
      };
    }

    case "GET_TRIPS_SUCCESS": {
      console.log("REDUCER ACTION", action);
      return {
        ...state,
        fetching: false,
        trips: action.payload.rows
      };
    }

    case "GET_TRIPS_FAILURE": {
      return {
        ...state,
        fetching: false,
        error: true
      };
    }

    case "GET_EVENT_BY_ID_REQUEST": {
      return {
        ...state,
        fetching: true
      };
    }

    case "GET_EVENT_BY_ID_SUCCESS": {
      return {
        ...state,
        fetching: false,
        tripWithEvent: action.payload.data.rows
      };
    }

    case "GET_EVENT_BY_ID_FAILURE": {
      return {
        ...state,
        fetching: false,
        error: true
      };
    }

    case "CREATE_EVENT_REQUEST": {
      return {
        ...state,
        fetching: true
      };
    }

    case "CREATE_EVENT_SUCCESS": {
      return {
        ...state,
        fetching: false,
        tripWithEvent: [...state.tripWithEvent, action.payload]
      };
    }

    case "CREATE_EVENT_FAILURE": {
      return {
        ...state,
        fetching: false,
        error: true
      };
    }

    // DELETE TRIP
    // case "DELETE_TRIP_SUCCESS": {
    //   return {
    //     ...state,
    //     tripDeleted: true
    //   };
    // }

    default:
      return state;
  }
};
