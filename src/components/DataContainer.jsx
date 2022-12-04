import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchHomeData } from "../actions/apiAction";
import DataCard from "./DataCard";

import { Pagination } from "antd";

const DataContainer = () => {
  const [getStaus, setStatus] = useState();
  const [getType, setType] = useState();
  const [pageNumber, setPageNumber] = useState(8);

  const dispatch = useDispatch();
  const mainData = useSelector((state) => state.data);

  const { homeData, loading } = mainData;

  const [searchIndex, setSearchIndex] = useState(false);
  const [gridData, setGridData] = useState([]);

  useEffect(() => {
    dispatch(fetchHomeData());
  }, []);

  let status = [...new Set(homeData.map((item) => item.status))];
  let type = [...new Set(homeData.map((item) => item.type))];

  const emptyForm = () => {
    setStatus("");
    setType("");
  };

  const submitForm = (event) => {
    event.preventDefault();
    setSearchIndex(true);

    var filterData;

    filterData = homeData.filter((item) => {
      return item.status === getStaus && item.type === getType;
    });

    setGridData(filterData);
  };

  const showMore = () => {
    setPageNumber(pageNumber + 8);
  };

  return (
    <div className="container">
      {loading ? (
        "loading"
      ) : (
        <>
          <section className="search">
            <form>
              <div className="select_div">
                <select
                  value={getStaus}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  {status.map((val, index) => {
                    return (
                      <option value={val} key={index}>
                        {val}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="select_div">
                <select
                  value={getType}
                  onChange={(e) => setType(e.target.value)}
                >
                  {/* <option value="null">Show all</option> */}

                  {type.map((val, index) => {
                    return (
                      <option value={val} key={index}>
                        {val}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="btn">
                <input type="submit" onClick={submitForm} value="Search" />
              </div>

              {searchIndex ? (
                <div className="btn clear">
                  <input
                    type="Submit"
                    value="Clear"
                    onClick={() => setSearchIndex(false)}
                  />{" "}
                </div>
              ) : (
                ""
              )}
            </form>
          </section>

          <section className="data_container">
            {searchIndex ? (
              <div className="wrapper">
                {gridData.length > 0
                  ? gridData.map((data, index) => {
                      return <DataCard key={index} data={data} />;
                    })
                  : "No Data Found"}
              </div>
            ) : (
              <>
                <div className="wrapper">
                  {homeData.slice(0, pageNumber).map((data, index) => {
                    return <DataCard key={index} data={data} />;
                  })}
                </div>

                <div className="show_more">
                  <div className="btn" onClick={(e) => showMore()}>
                    Show More
                  </div>
                </div>
              </>
            )}
          </section>
        </>
      )}
    </div>
  );
};

export default DataContainer;
