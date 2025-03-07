import "./searchItem.css";

function SearchItem() {
  return (
    <div className="searchItem">
      <img
        src="http://localhost:4567/my%20pics/2/Dope%20images/0558fa333763efcf878f4ffb4e215480.jpg"
        alt=""
        className="searchItemImg"
      />
      <div className="searchItemDesc">
        <h1 className="searchItemTitle">Tower Street Apartments</h1>
        <span className="searchItemDistance">500m from center</span>
        <span className="searchItemTaxiOp">Free airpot taxi</span>
        <span className="searchItemSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="searchItemFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="CancelOp">Free Cancellation</span>
        <span className="CancelOpSubtitle">
          You can cancel later, so look in this great price today
        </span>
      </div>
      <div className="searchItemDetails">
        <div className="searchItemRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="searchItemText">
          <span className="searchItemPrice">$123</span>
          <span className="searchItemPrice">includes taxes and fees</span>
          <button className="searchItemCheckButton">See Availaibility</button>
        </div>
      </div>
    </div>
  );
}

export default SearchItem;
