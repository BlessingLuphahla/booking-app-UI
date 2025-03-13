import { useEffect, useRef, useState } from "react";
import "./list.css";
import { useLocation } from "react-router-dom";
import SearchItem from "../../components/searchItem/SearchItem";
import { useAPI } from "../../hooks/useAPI";
import Loading from "../../components/loading/Loading";
import DateRangePicker from "../../components/dateRangePicker/DateRangePicker";

function List() {
  const location = useLocation();
  const { state } = location;

  const [data, setData] = useState(state);
  const [destination, setDestination] = useState(data?.destination);
  const [options, setOptions] = useState(data?.options);
  const [startDate, setStartDate] = useState(data?.startDate);
  const [endDate, setEndDate] = useState(data?.endDate);
  const [isOpenDate, setIsOpenDate] = useState(false);
  const [minPrice, setMinPrice] = useState(undefined);
  const [maxPrice, setMaxPrice] = useState(undefined);

  const date = `${startDate || "date"} to ${endDate || "date"} `;

  const topSearchRef = useRef();

  const {
    data: hotels,
    loading,
    reFetchData,
    error,
  } = useAPI(
    `/hotels?city=${destination}&max=${maxPrice || 999}&min=${minPrice || 0}`,
    "GET"
  );

  useEffect(() => {
    setData(state);
  }, [state]);

  const handleSearch = () => {
    setData({
      destination: destination || "",
      options: options,
      startDate: startDate,
      endDate: endDate,
    });

    reFetchData();
    topSearchRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="list">
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listSearchTitle">Search</h1>
            <div className="listSearchItem">
              <label htmlFor="">Destination:</label>
              <input
                type="text"
                placeholder={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
            <div className="listSearchItem">
              <label htmlFor="">Check In Date:</label>
              <span
                onClick={() => setIsOpenDate(!isOpenDate)}
                className="listSearchItemDate"
              >
                {date}
              </span>
              {isOpenDate && (
                <DateRangePicker
                  setEndDate={setEndDate}
                  setStartDate={setStartDate}
                  startDate={startDate}
                  endDate={endDate}
                  setIsOpenDate={setIsOpenDate}
                />
              )}
            </div>
            <label htmlFor="">Options:</label>
            <div className="listSearchItem">
              <div className="listSearchItemOption">
                <span className="listSearchItemOptionText">
                  Min Price <small>(per night)</small>
                </span>
                <input
                  type="number"
                  className="listSearchItemOptionInput"
                  min={0}
                  onChange={(e) => setMinPrice(e.target.value)}
                />
              </div>
              <div className="listSearchItemOption">
                <span className="listSearchItemOptionText">
                  Max Price <small>(per night)</small>
                </span>
                <input
                  type="number"
                  className="listSearchItemOptionInput"
                  min={0}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </div>
              <div className="listSearchItemOption">
                <span className="listSearchItemOptionText">Adults</span>
                <input
                  placeholder={options.adults}
                  type="number"
                  className="listSearchItemOptionInput"
                  min={1}
                  onChange={(e) =>
                    setOptions((prev) => ({ ...prev, adults: e.target.value }))
                  }
                />
              </div>

              <div className="listSearchItemOption">
                <span className="listSearchItemOptionText">Room</span>
                <input
                  placeholder={options.room}
                  type="number"
                  className="listSearchItemOptionInput"
                  min={1}
                  onChange={(e) =>
                    setOptions((prev) => ({ ...prev, room: e.target.value }))
                  }
                />
              </div>
              <div className="listSearchItemOption">
                <span className="listSearchItemOptionText">Children</span>
                <input
                  placeholder={options.children}
                  type="number"
                  className="listSearchItemOptionInput"
                  min={0}
                  onChange={(e) =>
                    setOptions((prev) => ({
                      ...prev,
                      children: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
            <button onClick={handleSearch}>Search</button>
          </div>
          <div className="listResult" ref={topSearchRef}>
            {error && <Error error={error} />}
            {loading ? (
              <Loading />
            ) : !error && hotels.length <= 0 ? (
              <div className="listNoResultContainer">
                <div className="listNoResult">
                  <h3>Sorry no results found for the given details</h3>
                </div>
              </div>
            ) : (
              hotels.map((hotel, index) => {
                return <SearchItem key={hotel?._id || index} hotel={hotel} />;
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
