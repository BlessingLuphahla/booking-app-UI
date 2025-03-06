import { Children, useEffect, useState } from "react";
import "./header.css";
import {
  CarRental,
  Hotel,
  AirlineSeatReclineExtra,
  BedOutlined,
  AirplanemodeActive,
  Menu,
  Person,
  CalendarMonth,
} from "@mui/icons-material";
import { useScreen } from "../../hooks/useScreen";
import DateRangePicker from "../dateRangePicker/DateRangePicker";
import Options from "../options/Options";
import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  const { isMobile } = useScreen();
  const navigate = useNavigate();

  const [destination, setDestination] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHamburgerOpen, setHamburgerIsOpen] = useState(false);
  const [isOpenDate, setIsOpenDate] = useState(false);
  const [isOpenOptions, setIsOpenOptions] = useState(false);

  const [options, setOptions] = useState({
    adults: null,
    children: null,
    room: null,
  });

  const mobileIconSize = isMobile ? "5px" : "20px";

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const headerItems = [
    [<Hotel />, "Stays"],
    [<AirplanemodeActive />, "Flight"],
    [<CarRental />, "Car Rentals"],
    [<BedOutlined />, "Attractions"],
    [<AirlineSeatReclineExtra />, " Airport Taxis"],
  ];

  const location = useLocation();

  const handleActive = (index) => {
    setActiveIndex(index);
    isMobile && setHamburgerIsOpen(!isHamburgerOpen);
  };

  const handleHamburger = () => {
    setHamburgerIsOpen(!isHamburgerOpen);
  };

  useEffect(() => {
    if (startDate && endDate) {
      setIsOpenDate(false);
    }
  }, [endDate, startDate]);

  const handleSearch = () => {
    navigate("/hotels", {
      state: {
        destination,
        options,
        startDate,
        endDate,
      },
    });
  };

  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          {isMobile ? (
            <>
              <Menu onClick={handleHamburger} />
              {isHamburgerOpen && (
                <div className="mobileMenu">
                  <>
                    <div
                      onClick={() => setHamburgerIsOpen(!isHamburgerOpen)}
                      className="closeMenu"
                    >
                      ×
                    </div>
                    {headerItems.map((element, index) => {
                      return (
                        <div
                          key={index}
                          className={`headerListItem ${
                            activeIndex === index && "active"
                          }`}
                          onClick={() => handleActive(index)}
                        >
                          {element[0]}
                          <span>{element[1]}</span>
                        </div>
                      );
                    })}
                  </>
                </div>
              )}
            </>
          ) : (
            <>
              {headerItems.map((element, index) => {
                return (
                  <div
                    key={index}
                    className={`headerListItem ${
                      activeIndex === index && "active"
                    }`}
                    onClick={() => handleActive(index)}
                  >
                    {element[0]}
                    <span>{element[1]}</span>
                  </div>
                );
              })}
            </>
          )}
        </div>
        {location.pathname === "/" && (
          <>
            <h1 className="headerTitle">A lifetime of savings? Yes Please!</h1>

            <p className="v">
              Get rewarded for your travels - unlock instant savings of 10% or
              more with a free Redd Booking Account
            </p>
            <button className="headerBtn">Sign In / Register</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <Hotel style={{ fontSize: { mobileIconSize } }} />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>

              <div
                className="headerSearchItem"
                onClick={() => setIsOpenDate(!isOpenDate)}
              >
                <CalendarMonth style={{ fontSize: { mobileIconSize } }} />
                <div className="headerSearchText">
                  <div className="dateOutput">
                    <div> {startDate ? startDate : "date"}</div>
                    <span>to</span>
                    {endDate ? endDate : "date"}
                  </div>
                </div>
              </div>
              <div
                className="headerSearchItem"
                onClick={() => setIsOpenOptions(!isOpenOptions)}
              >
                <Person style={{ fontSize: { mobileIconSize } }} />
                <span className="headerSearchText">
                  {options.adults || 0} adults {options.children || 0} children{" "}
                  {options.room || 0}
                </span>
              </div>
              <div className="headerSearchItem">
                <button
                  onClick={handleSearch}
                  style={{ width: "100px" }}
                  className="headerBtn searchBtn"
                >
                  Search
                </button>
              </div>
            </div>
            {isOpenDate && (
              <DateRangePicker
                setEndDate={setEndDate}
                setStartDate={setStartDate}
                startDate={startDate}
                endDate={endDate}
                setIsOpenDate={setIsOpenDate}
              />
            )}

            {isOpenOptions && (
              <Options
                setIsOpenOptions={setIsOpenOptions}
                options={options}
                setOptions={setOptions}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
