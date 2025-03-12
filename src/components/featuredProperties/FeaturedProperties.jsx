import "./featuredProperties.css";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useAPI } from "../../hooks/useAPI";
import Loading from "../loading/Loading";

function FeaturedProperties() {
  const {
    data: hotels,
    loading,
    error,
  } = useAPI("/hotels?featured=true", "GET");

  const [lowerLimit, setLowerLimit] = useState(0);
  const [upperLimit, setUpperLimit] = useState(2);
  const [feauturedProperties, setFeauturedProperties] = useState([]);

  useEffect(() => {
    setFeauturedProperties(hotels);
  }, [hotels]);

  useEffect(() => {
    if (feauturedProperties.length === 0) return;
    if (upperLimit > feauturedProperties.length) {
      setUpperLimit(feauturedProperties.length);
    }

    if (lowerLimit < 0) {
      setLowerLimit(0);
    }
  }, [feauturedProperties.length, lowerLimit, upperLimit]);

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
      {loading ? (
        <Loading />
      ) : (
        !error &&
        feauturedProperties
          ?.slice(lowerLimit, upperLimit + 1)
          .map((hotel, index) => {
            return (
              <div key={index} className="fpItem">
                <img className="fpImg" src={hotel.photos[0]} alt="" />
                <span className="fpName">{hotel.name}</span>
                <span className="fpCity">{hotel.city}</span>
                <span className="fpPrice" Starting from>
                  {" "}
                  ${hotel.cheapestPrice}
                </span>
                {hotel.rating && (
                  <div className="fpRating">
                    <button>{hotel.rating}</button>
                    <span>{hotel.ratingType}</span>
                  </div>
                )}
              </div>
            );
          })
      )}
      <ChevronRight className="symbol" onClick={handleNext} />
    </div>
  );
}

export default FeaturedProperties;
