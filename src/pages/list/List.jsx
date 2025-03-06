import { useEffect, useState } from "react";
import "./list.css";
import { useLocation } from "react-router-dom";

function List() {
  const location = useLocation();
  const { state } = location;

  const [data, setData] = useState(state);

  useEffect(() => {
    setData(state);
  }, [state]);

  const destination = data?.destination;
  const options = data?.options;
  const date = `${data?.startDate || "date"} to ${data?.endDate || "date"} `;

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
            <button>Search</button>
          </div>
          <div className="listResult">assaasasasasasa</div>
        </div>
      </div>
    </div>
  );
}

export default List;
