import "./hotel.css";
import { LocationOn } from "@mui/icons-material";
import { photos } from "../../data/photos";

function Hotel() {
  return (
    <div className="hotelContainer">
      <div className="hotelWrapper">
        <h1 className="hotelTitle">Grand Hotel</h1>
        <div className="hotelAddresss">
          <LocationOn />
          <span>4517 Magwegwe North</span>
        </div>
        <span className="hotelDistance">
          Excellent location - 500m from center
        </span>
        <span className="hotelPriceHighlight">
          Book a stay over $114 at this property and get a free airport taxi
        </span>
        <button className="bookNow">Reserve or Book Now</button>
        <div className="hotelImages">
          {photos.map((photo, index) => (
            <div key={index} className="hotelImgWrapper">
              <img src={photo.src} alt="" className="hotelImg" />
            </div>
          ))}
        </div>
        <div className="hotelDetails">
          <div className="hotelDetailsTexts">
            <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
            <p className="hotelDesc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
              repudiandae labore voluptas nihil, aut debitis cum officiis,
              quisquam suscipit minus inventore accusamus est libero dolore,
              quia voluptatibus rerum! Officia, optio? Cumque aut, enim
              expedita, doloribus incidunt animi non fugit cupiditate dolore
              provident dignissimos. Expedita nihil explicabo debitis! Animi,
              sint expedita. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Sed deleniti debitis repellendus possimus quisquam ab quam
              atque cumque dolores at.
            </p>
          </div>
          <div className="hotelDetailsPrice">
            <h1 className="hotelTitle">Perfect for a night stay!</h1>
            <p>
              located in the real heart of Kravow, this property has an
              excellent location score of 9.8!
            </p>
            <h2>
              <b>$945</b> (9 nights)
            </h2>
            <button>Reserve or Book Now!</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hotel;
