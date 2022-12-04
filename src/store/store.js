import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "../reducers/rootReducers";

export default function dataStore() {
  const store = configureStore(
    { reducer: rootReducer },
    applyMiddleware(thunk)
  );

  return store;
}
