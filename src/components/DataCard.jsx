import React, { useState } from "react";
import { useEffect } from "react";
import Moment from "react-moment";

const DataCard = (props) => {
  const data = props.data;
  const [activeData, setActiveData] = useState({
    activeIndex: false,
    data: null,
  });

  const dataSetter = (data) => {
    setActiveData({
      activeIndex: true,
      data: data,
    });
  };

  const closeBtn = () => {
    setActiveData({
      activeIndex: false,
      data: null,
    });
  };

  return (
    <>
      <div className="another_div">
        {activeData.activeIndex ? (
          <div className="popUp">
            <div
              className="close_btn"
              onClick={(e) => {
                closeBtn();
              }}
            >
              X
            </div>

            <div className="wrapper">
              <div className="img">
                <img src="./images/5143537.jpg" alt="" />
              </div>

              <div className="desc">
                <h3>
                  <small>{activeData.data.capsule_id}</small>{" "}
                  {activeData.data.capsule_serial}
                </h3>
                <Moment format="YYYY/MM/DD">
                  {activeData.data.original_launch}
                </Moment>

                <p>{activeData.data.details}</p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="data_card" onClick={(e) => dataSetter(data)}>
        <div className="img">
          <img src="./images/5143537.jpg" alt="" />
          <Moment format="YYYY/MM/DD">{data.original_launch}</Moment>
        </div>

        <div className="head">
          <h4>
            <small>{data.capsule_id}</small> {data.capsule_serial}{" "}
          </h4>

          <p className={`status ${data.status}`}>{data.status}</p>
        </div>

        <p className="details">{data.details}</p>
      </div>
    </>
  );
};

export default DataCard;
