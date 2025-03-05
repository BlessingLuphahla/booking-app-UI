import "./featuredProperties.css";
import { feauturedProperties } from "../../data/featuredProperties";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

function FeaturedProperties() {
  const [lowerLimit, setLowerLimit] = useState(0);
  const [upperLimit, setUpperLimit] = useState(2);

  useEffect(() => {
    if (upperLimit > feauturedProperties.length) {
      setUpperLimit(feauturedProperties.length);
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
    if (upperLimit < feauturedProperties.length) {
      setLowerLimit(lowerLimit + 1);
      setUpperLimit(upperLimit + 1);
    }
  };

  return (
    <div className="fp">
      <ChevronLeft className="symbol" onClick={handlePrev} />
      {feauturedProperties
        .slice(lowerLimit, upperLimit + 1)
        .map((element, index) => {
          const randomRating = Math.floor(Math.random() * 10);

          return (
            <div key={index} className="fpItem">
              <img className="fpImg" src={element.src} alt="" />
              <span className="fpName">{element.name}</span>
              <span className="fpCity">{element.city}</span>
              <div className="fpRating">
                <button>{randomRating}</button>
                <span>{element.ratingType}</span>
              </div>
            </div>
          );
        })}
      <ChevronRight className="symbol" onClick={handleNext} />
    </div>
  );
}

export default FeaturedProperties;
