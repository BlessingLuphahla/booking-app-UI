import { useState } from "react";
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

function Header() {
  const { isMobile } = useScreen();

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHamburgerOpen, setHamburgerIsOpen] = useState(false);
  const [isOpenDate, setIsOpenDate] = useState(false);

  const mobileIconSize = isMobile ? "5px" : "20px";

  const headerItems = [
    [<Hotel />, "Stays"],
    [<AirplanemodeActive />, "Flight"],
    [<CarRental />, "Car Rentals"],
    [<BedOutlined />, "Attractions"],
    [<AirlineSeatReclineExtra />, " Airport Taxis"],
  ];

  const handleActive = (index) => {
    setActiveIndex(index);
    isMobile && setHamburgerIsOpen(!isHamburgerOpen);
  };

  const handleHamburger = () => {
    setHamburgerIsOpen(!isHamburgerOpen);
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
        <h1 className="headerTitle">A lifetime of savings? Yes Please!</h1>

        <p className="v">
          Get rewwarded for your travels - unlock instant savings of 10% or more
          with a free Redd Booking Account
        </p>
        <button className="headerBtn">Sign In / Register</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <Hotel style={{ fontSize: { mobileIconSize } }} />
            <input
              type="text"
              placeholder="Where are you going?"
              className="headerSearchInput"
            />
          </div>

          <div
            className="headerSearchItem"
            onClick={() => setIsOpenDate(!isOpenDate)}
          >
            <CalendarMonth style={{ fontSize: { mobileIconSize } }} />
            <span className="headerSearchText">date to date</span>
          </div>
          <div className="headerSearchItem">
            <Person style={{ fontSize: { mobileIconSize } }} />
            <span className="headerSearchText">2 adults two children</span>
          </div>
          {!isMobile && (
            <div className="headerSearchItem">
              <button style={{ width: "100px" }} className="headerBtn">
                Search
              </button>
            </div>
          )}
        </div>
        {isOpenDate && <DateRangePicker />}
      </div>
    </div>
  );
}

export default Header;
