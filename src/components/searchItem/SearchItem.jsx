import { Link } from "react-router-dom";
import "./searchItem.css";

function SearchItem({ hotel }) {
  return (
    <div className="searchItem">
      <img src={hotel?.photos[0]} alt="" className="searchItemImg" />
      <div className="searchItemDesc">
        <h1 className="searchItemTitle">{hotel?.title} </h1>
        <span className="searchItemDistance">
          {hotel?.distance || 0}m from center{" "}
        </span>
        <span className="searchItemTaxiOp">Free airpot taxi</span>
        <span className="searchItemSubtitle">{hotel?.address}</span>
        <span className="searchItemFeatures">{hotel?.desc}</span>
        <span className="CancelOp">Free Cancellation</span>
        <span className="CancelOpSubtitle">
          You can cancel later, so look in this great price today
        </span>
      </div>
      <div className="searchItemDetails">
        <div className="searchItemRating">
          <span>Excellent</span>
          <button>{hotel?.rating} </button>
        </div>
        <div className="searchItemText">
          <span className="searchItemPrice">${hotel?.cheapestPrice} </span>
          <span className="searchItemPrice">includes taxes and fees</span>
          <Link to={`/hotels/${hotel._id}`}>
            <button className="searchItemCheckButton">See Availaibility</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SearchItem;
