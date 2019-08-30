const defaultState = {
  groupList: [],
  error: null,
  jobs: null,
  allJobs: [],
  runners: null,
  bulkJobs: []
  // runners: [
  //   {
  //     id: 1063853,
  //     description: "ip-172-29-12-181.ec2.internal",
  //     ip_address: "3.208.92.202",
  //     active: true,
  //     is_shared: false,
  //     name: "gitlab-runner",
  //     online: true,
  //     status: "online"
  //   },
  //   {
  //     id: 1063855,
  //     description: "ip-172-29-26-124.ec2.internal",
  //     ip_address: "3.92.209.99",
  //     active: true,
  //     is_shared: false,
  //     name: "gitlab-runner",
  //     online: true,
  //     status: "active"
  //   },
  //   {
  //     id: 1065073,
  //     description: "ip-172-29-51-43.ec2.internal",
  //     ip_address: "54.89.103.133",
  //     active: true,
  //     is_shared: false,
  //     name: "gitlab-runner",
  //     online: true,
  //     status: "paused"
  //   },
  //   {
  //     id: 1072075,
  //     description: "ip-172-29-44-32.ec2.internal",
  //     ip_address: "18.205.239.120",
  //     active: true,
  //     is_shared: false,
  //     name: "gitlab-runner",
  //     online: true,
  //     status: "online"
  //   }
  // ]
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

    case "GET_RUNNERS_REQUEST": {
      return {
        ...state,
        fetching: true
      };
    }

    case "GET_RUNNERS_SUCCESS": {
      console.log("REDUCER ACTION", action);
      return {
        ...state,
        fetching: false,
        runners: action.payload
      };
    }

    case "GET_RUNNERS_FAILURE": {
      return {
        ...state,
        fetching: false,
        error: true
      };
    }

    // GET_RUNNERS_BULK
    case "GET_RUNNERS_BULK_REQUEST": {
      return {
        ...state,
        fetching: true
      };
    }

    case "GET_RUNNERS_BULK_SUCCESS": {
      console.log("REDUCER ACTION", action);
      return {
        ...state,
        fetching: false,
        bulkJobs: [...state.bulkJobs, action.payload]
      };
    }

    case "GET_RUNNERS_BULK_FAILURE": {
      return {
        ...state,
        fetching: false,
        error: true
      };
    }

    // getAllJobs
    case "GET_ALL_JOBS_REQUEST": {
      return {
        ...state,
        fetching: true
      };
    }

    case "GET_ALL_JOBS_SUCCESS": {
      console.log("REDUCER ACTION", action);
      return {
        ...state,
        fetching: false,
        allJobs: [...state.allJobs, action.payload]
      };
    }

    case "GET_ALL_JOBS_FAILURE": {
      return {
        ...state,
        fetching: false,
        error: true
      };
    }

    case "ADD_JOBS": {
      return {
        ...state,
        jobs: [...state.jobs, action.payload]
      };
    }

    default:
      return state;
  }
};
