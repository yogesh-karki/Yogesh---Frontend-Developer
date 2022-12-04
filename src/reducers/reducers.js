const initialState = {
  loading: true,
  homeData: [],
  error: null,
};

function reducers(state = initialState, action) {
  switch (action.type) {
    case "FETCH_DATA_REQUEST":
      return {
        ...state,
        loading: action.bool,
      };

    case "FETCH_HOME_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        homeData: action.data,
      };

    case "FETCH_DATA_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    default:
      return {
        ...state,
      };
  }
}

export default reducers;
