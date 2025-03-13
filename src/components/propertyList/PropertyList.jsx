import "./propertyList.css";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useScreen } from "../../hooks/useScreen";
import { useAPI } from "../../hooks/useAPI";
import Loading from "../loading/Loading";

function PropertyList() {
  const { isMobile } = useScreen();

  const [lowerLimit, setLowerLimit] = useState(0);
  const [upperLimit, setUpperLimit] = useState(isMobile ? 2 : 3);

  const { data, loading, error } = useAPI("/hotels/countByType", "GET");
 

  const propertyList = Array(5).fill(
    "http://localhost:4567/my%20pics/2/Dope%20images/0095242d4eafd215ef250b0fbc96cb5a.jpg"
  );

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
      <ChevronLeft className="symbol symbolLeft" onClick={handlePrev} />
      {loading
        ? <Loading/>
        : !error &&
          propertyList.slice(lowerLimit, upperLimit + 1).map((src, index) => {
            const originalIndex = lowerLimit + index;

            return (
              <div key={index} className="propertyListItem">
                <img className="propertyListImg" src={src} alt="" />
                <div className="propertyListTitles">
                  <h1> {data[originalIndex]?.type} </h1>
                  <h2>
                    {data[originalIndex]?.count} {data[originalIndex]?.type}
                  </h2>
                </div>
              </div>
            );
          })}
      <ChevronRight className="symbol symbolRight" onClick={handleNext} />
    </div>
  );
}

export default PropertyList;
