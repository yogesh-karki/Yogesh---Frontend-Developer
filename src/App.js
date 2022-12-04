import React from "react";

import { Provider } from "react-redux";
import DataContainer from "./components/DataContainer";
import dataStore from "./store/store";

const App = () => {
  return (
    <Provider store={dataStore()}>
      <header>
        <div className="container">
          <div className="logo">spaceX</div>
        </div>
      </header>

      <section
        className="banner"
        style={{ background: 'url("./images/banner.jpg")' }}
      ></section>

      <DataContainer />
    </Provider>
  );
};

export default App;
