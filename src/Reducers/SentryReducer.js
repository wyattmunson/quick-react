const defaultState = {
  groupList: null,
  error: null
};

export const SentryReducer = (state = defaultState, action) => {
  switch (action.type) {
    // GET TRIPS
    case "GET_GROUPS_REQUEST": {
      return {
        ...state,
        fetching: true
      };
    }

    case "GET_GROUPS_SUCCESS": {
      console.log("REDUCER ACTION", action);
      return {
        ...state,
        fetching: false,
        groupList: action.payload
      };
    }

    case "GET_GROUPS_FAILURE": {
      return {
        ...state,
        fetching: false,
        error: true
      };
    }

    default:
      return state;
  }
};
