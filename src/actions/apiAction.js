import {
  fetchDataRequest,
  fetchHomeDataSuccess,
  fetchDataError,
} from "./action";
import axios from "axios";

export function fetchHomeData() {
  return (dispatch) => {
    dispatch(fetchDataRequest(true));

    axios
      .get("https://api.spacexdata.com/v3/capsules")
      .then((response) => {
        dispatch(fetchHomeDataSuccess(response.data));
        dispatch(fetchDataRequest(false));
      })
      .catch((error) => {
        dispatch(fetchDataError(error));
        dispatch(fetchDataRequest(false));
      });
  };
}
