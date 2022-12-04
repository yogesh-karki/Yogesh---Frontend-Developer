export function fetchDataRequest(bool) {
  return {
    type: "FETCH_DATA_REQUEST",
    bool,
  };
}

export function fetchHomeDataSuccess(data) {
  return {
    type: "FETCH_HOME_DATA_SUCCESS",
    data,
  };
}

export function fetchDataError(error) {
  return {
    type: "FETCH_DATA_ERROR",
    payload: { error },
  };
}
