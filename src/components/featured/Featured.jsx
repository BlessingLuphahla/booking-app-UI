import "./featured.css";
import { useAPI } from "../../hooks/useAPI";
import { feauturedList } from "../../data/featured";

function Featured() {
  const { data, loading, error } = useAPI(
    "/hotels/countByCity?cities=berlin,madrid",
    "GET"
  );

  console.log(data);

  return (
    <div className="featured">
      {error && <div>{error}</div>}
      {!error && loading
        ? "Loading, Please wait..."
        : feauturedList.map((element, index) => {
            return (
              <div key={index} className="featuredItem">
                <img className="featuredImg" src={element.src} alt="" />
                <div className="featuredTitles">
                  <h1>{element.title1}</h1>
                  <h2>{data[index]} properties</h2>
                </div>
              </div>
            );
          })}
    </div>
  );
}

export default Featured;
