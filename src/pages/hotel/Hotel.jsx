import "./hotel.css";
import { LocationOn } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import { useAPI } from "../../hooks/useAPI";
import Loading from "../../components/loading/Loading";

function Hotel() {
  const [isOpenImage, setIsOpenImage] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [hotel, setHotel] = useState({});

  const { id: hotelId } = useParams();
  const { data, loading, error } = useAPI(`/hotels/find/${hotelId}`, "GET");

  useEffect(() => {
    setHotel(data);
  }, [data]);

  const handleImageView = (i) => {
    setModalImageIndex(i);
    setIsOpenImage(!isOpenImage);
  };

  const changeModalIndex = (type) => {
    if (type === "decrease") {
      if (modalImageIndex === 0) return;
      setModalImageIndex(modalImageIndex - 1);
      return;
    } else if (type === "increase") {
      if (modalImageIndex === hotel?.photos.length - 1) return;
      setModalImageIndex(modalImageIndex + 1);
      return;
    } else {
      console.log("invalid type");
    }
  };

  console.log(hotel);

  const ratingType = (rating) => {
    if (rating === 1) {
      return "Bad";
    } else if (rating === 2) {
      return "Better";
    } else if (rating === 3) {
      return "Medium";
    } else if (rating === 4) {
      return "Good";
    } else if (rating === 5) {
      return "Excellent";
    } else {
      return "";
    }
  };

  return (
    <div className="hotelContainer">
      {loading ? (
        <Loading />
      ) : (
        !error && (
          <>
            {isOpenImage && (
              <div className="imageModal">
                <div
                  className="closeModal"
                  onClick={() => setIsOpenImage(false)}
                >
                  ×
                </div>
                <ChevronLeft
                  className="symbol symbolLeft"
                  onClick={() => changeModalIndex("decrease")}
                />
                <img src={hotel?.photos[modalImageIndex].src} alt="" />
                <ChevronRight
                  className="symbol symbolRight"
                  onClick={() => changeModalIndex("increase")}
                />
              </div>
            )}
            <div className="hotelWrapper">
              <h1 className="hotelTitle">{hotel?.name}</h1>
              <div className="hotelAddresss">
                <LocationOn />
                <span>{hotel?.address}</span>
              </div>
              <span className="hotelDistance">
                {hotel?.distance || 0}m from center
              </span>
              <span className="hotelPriceHighlight">
                Book a stay over ${hotel?.cheapestPrice} at this property and
                get a free airport taxi
              </span>
              <button className="bookNow">Reserve or Book Now</button>
              <div className="hotelImages">
                {hotel?.photos?.map((photo, index) => (
                  <div
                    onClick={() => handleImageView(index)}
                    key={index}
                    className="hotelImgWrapper"
                  >
                    <img src={photo} alt="" className="hotelImg" />
                  </div>
                ))}
              </div>
              <div className="hotelDetails">
                <div className="hotelDetailsTexts">
                  <h1 className="hotelTitle">{hotel?.title}</h1>
                  <p className="hotelDesc">{hotel?.desc}</p>
                </div>
                <div className="hotelDetailsPrice">
                  <h1 className="hotelTitle">Perfect for a night stay!</h1>
                  <p>
                    located in {hotel?.address} {hotel?.city}, this property has
                    an {ratingType(hotel?.rating)} rating score of{" "}
                    {hotel?.rating}!
                  </p>
                  <h2>
                    <b>${hotel?.cheapestPrice}</b> (9 nights)
                  </h2>
                  <button>Reserve or Book Now!</button>
                </div>
              </div>
            </div>
          </>
        )
      )}
    </div>
  );
}

export default Hotel;
