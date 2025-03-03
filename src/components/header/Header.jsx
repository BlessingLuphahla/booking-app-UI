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

function Header() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHamburgerOpen, setHamburgerIsOpen] = useState(false);

  const mobileIconSize = "10px"

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

  const { isMobile } = useScreen();

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
            <Hotel fontSize={isMobile && mobileIconSize} />
            <input
              type="text"
              placeholder="Where are you going?"
              className="headerSearchInput"
            />
          </div>
          <div className="headerSearchItem">
            <CalendarMonth fontSize={isMobile && mobileIconSize} />
            <span className="headerSearchText">date to date</span>
          </div>
          <div className="headerSearchItem">
            <Person fontSize={isMobile && mobileIconSize} />
            <span className="headerSearchText">2 adults two children</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
