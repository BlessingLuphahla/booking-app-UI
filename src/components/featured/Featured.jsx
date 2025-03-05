import "./featured.css";
import { feauturedList } from "../../data/featured";

function Featured() {
  return (
    <div className="featured">
      {feauturedList.map((element, index) => {
        return (
          <div key={index} className="featuredItem">
            <img className="featuredImg" src={element.src} alt="" />
            <div className="featuredTitles">
              <h1>{element.title1}</h1>
              <h2>{element.title2}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Featured;
