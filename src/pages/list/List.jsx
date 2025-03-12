import { useEffect, useRef, useState } from "react";
import "./list.css";
import { useLocation } from "react-router-dom";
import SearchItem from "../../components/searchItem/SearchItem";
import { useAPI } from "../../hooks/useAPI";
import Loading from "../../components/loading/Loading";

function List() {
  const location = useLocation();
  const { state } = location;

  const [data, setData] = useState(state);
  const destination = data?.destination;
  const options = data?.options;
  const date = `${data?.startDate || "date"} to ${data?.endDate || "date"} `;

  const topSearchRef = useRef();

  const { data: hotels, loading, error } = useAPI(`/hotels?city=madrid`, "GET");

  useEffect(() => {
    setData(state);
  }, [state]);

  const handleSearch = () => {

    

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
              <input type="text" placeholder={destination} />
            </div>
            <div className="listSearchItem">
              <label htmlFor="">Check In Date:</label>
              <span className="listSearchItemDate">{date}</span>
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
                />
              </div>
              <div className="listSearchItemOption">
                <span className="listSearchItemOptionText">Adults</span>
                <input
                  placeholder={options.adults}
                  type="number"
                  className="listSearchItemOptionInput"
                  min={1}
                />
              </div>

              <div className="listSearchItemOption">
                <span className="listSearchItemOptionText">Room</span>
                <input
                  placeholder={options.room}
                  type="number"
                  className="listSearchItemOptionInput"
                  min={1}
                />
              </div>
              <div className="listSearchItemOption">
                <span className="listSearchItemOptionText">Children</span>
                <input
                  placeholder={options.children}
                  type="number"
                  className="listSearchItemOptionInput"
                  min={0}
                />
              </div>
            </div>
            <button onClick={handleSearch}>Search</button>
          </div>
          <div className="listResult" ref={topSearchRef}>
            {error && <Error error={error} />}
            {loading ? (
              <Loading />
            ) : (
              !error &&
              hotels.map((hotel, index) => {
                index === 0 && console.log(hotel);
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
