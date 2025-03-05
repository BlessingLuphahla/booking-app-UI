import "./propertyList.css";
import { propertyList } from "../../data/propertyList";
import { useEffect, useState } from "react";

function PropertyList() {
  const [lowerLimit, setLowerLimit] = useState(0);
  const [upperLimit, setUpperLimit] = useState(4);

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
      <div className="symbol" onClick={handlePrev}>
        &lt;
      </div>
      {propertyList.slice(lowerLimit, upperLimit).map((element, index) => {
        return (
          <div key={index} className="propertyListItem">
            <img className="propertyListImg" src={element.src} alt="" />
            <div className="propertyListTitles">
              <h1>
                {element.title1}
              </h1>
              <h2>
                {element.title2}
              </h2>
            </div>
          </div>
        );
      })}
      <div className="symbol" onClick={handleNext}>
        &gt;
      </div>
    </div>
  );
}

export default PropertyList;
