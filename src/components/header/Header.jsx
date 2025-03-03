import { useEffect } from "react";
import "./header.css";
import {
  CarRental,
  Hotel,
  AirlineSeatReclineExtra,
  BedOutlined,
  AirplanemodeActive,
} from "@mui/icons-material";

function Header() {
  useEffect(() => {
    document.querySelectorAll(".HeaderListItem").forEach((element) =>
      element.addEventListener("click", function () {
        console.log("wassup");
      })
    );
  }, []);

  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="HeaderListItem active">
            <Hotel />
            <span>Stays</span>
          </div>
          <div className="HeaderListItem">
            <AirplanemodeActive />
            <span>Flight</span>
          </div>
          <div className="HeaderListItem">
            <CarRental />
            <span>Car Rentals</span>
          </div>
          <div className="HeaderListItem">
            <BedOutlined />
            <span>Attractions</span>
          </div>
          <div className="HeaderListItem">
            <AirlineSeatReclineExtra />
            <span>Airport Taxis</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
