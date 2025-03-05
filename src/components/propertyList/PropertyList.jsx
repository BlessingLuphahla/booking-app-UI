import "./propertyList.css";
import { propertyList } from "../../data/propertyList";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useScreen } from "../../hooks/useScreen";

function PropertyList() {
  const { isMobile } = useScreen();

  const [lowerLimit, setLowerLimit] = useState(0);
  const [upperLimit, setUpperLimit] = useState(isMobile ? 2 : 3);

  useEffect(() => {
    if (upperLimit > propertyList.length) {
      setUpperLimit(propertyList.length);
    }

    if (lowerLimit < 0) {
      setLowerLimit(0);
    }
  }, [lowerLimit, upperLimit]);

  const handlePrev = () => {
    if (lowerLimit > 0) {
      setLowerLimit(lowerLimit - 1);
      setUpperLimit(upperLimit - 1);
    }
  };

  const handleNext = () => {
    if (upperLimit < propertyList.length) {
      setLowerLimit(lowerLimit + 1);
      setUpperLimit(upperLimit + 1);
    }
  };

  return (
    <div className="propertyList">
      <ChevronLeft className="symbol" onClick={handlePrev} />
      {propertyList.slice(lowerLimit, upperLimit + 1).map((element, index) => {
        return (
          <div key={index} className="propertyListItem">
            <img className="propertyListImg" src={element.src} alt="" />
            <div className="propertyListTitles">
              <h1>{element.title1}</h1>
              <h2>{element.title2}</h2>
            </div>
          </div>
        );
      })}
      <ChevronRight className="symbol" onClick={handleNext} />
    </div>
  );
}

export default PropertyList;
