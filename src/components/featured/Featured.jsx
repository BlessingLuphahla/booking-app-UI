import "./featured.css";

function Featured() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
        className="featuredImg"
          src="http://localhost:4567/my%20pics/3/IMG-20241229-WA0008.jpg"
          alt=""
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>
    </div>
  );
}

export default Featured;
