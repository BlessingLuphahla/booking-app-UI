import "./propertyList.css";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useScreen } from "../../hooks/useScreen";
import { useAPI } from "../../hooks/useAPI";

function PropertyList() {
  const { isMobile } = useScreen();

  const [lowerLimit, setLowerLimit] = useState(0);
  const [upperLimit, setUpperLimit] = useState(isMobile ? 2 : 3);

  const { data, loading, error } = useAPI("/hotels/countByType", "GET");

  console.log(data.length);

  const propertyList = Array(5).fill(
    "http://localhost:4567/my%20pics/2/Dope%20images/0095242d4eafd215ef250b0fbc96cb5a.jpg"
  );

  console.log(propertyList);

  useEffect(() => {
    if (upperLimit > propertyList.length) {
      setUpperLimit(propertyList.length);
    }

    if (lowerLimit < 0) {
      setLowerLimit(0);
    }
  }, [lowerLimit, propertyList.length, upperLimit]);

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
      {loading
        ? "Loading, Please wait..."
        : !error &&
          propertyList.slice(lowerLimit, upperLimit + 1).map((src, index) => {
            const originalIndex = lowerLimit + index;

            return (
              <div key={index} className="propertyListItem">
                <img className="propertyListImg" src={src} alt="" />
                <div className="propertyListTitles">
                  <h1> {data[index]?.type} </h1>
                  <h2>
                    {data[index]?.count} {data[index]?.type} {originalIndex} ||
                    
                    {index}
                  </h2>
                </div>
              </div>
            );
          })}
      <ChevronRight className="symbol" onClick={handleNext} />
    </div>
  );
}

export default PropertyList;
