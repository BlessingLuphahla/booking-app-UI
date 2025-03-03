import { useState } from "react";
import "./header.css";
import {
  CarRental,
  Hotel,
  AirlineSeatReclineExtra,
  BedOutlined,
  AirplanemodeActive,
} from "@mui/icons-material";

function Header() {
  const [activeIndex, setActiveIndex] = useState(0);

  const headerItems = [
    [<Hotel />, "Stays"],
    [<AirplanemodeActive />, "Flight"],
    [<CarRental />, "Car Rentals"],
    [<BedOutlined />, "Attractions"],
    [<AirlineSeatReclineExtra />, " Airport Taxis"],
  ];

  const handleActive = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="HeaderListItem active"></div>
          {headerItems.map((element, index) => {
            return (
              <div
                key={index}
                className={`HeaderListItem ${
                  activeIndex === index && "active"
                }`}
                onClick={() => handleActive(index)}
              >
                {element[0]}
                <span>{element[1]}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Header;
