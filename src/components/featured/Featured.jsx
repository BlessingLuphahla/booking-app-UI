import "./featured.css";
import { useAPI } from "../../hooks/useAPI";
import { feauturedList } from "../../data/featured";
import Loading from "../loading/Loading";
import Error from "../error/Error";

function Featured() {
  const { data, loading, error } = useAPI(
    "/hotels/countByCity?cities=berlin,madrid",
    "GET"
  );

  return (
    <div className="featured">
      {error && <Error error={error} />}
      {loading ? (
        <Loading />
      ) : (
        !error &&
        feauturedList.map((element, index) => {
          return (
            <div key={index} className="featuredItem">
              <img className="featuredImg" src={element.src} alt="" />
              <div className="featuredTitles">
                <h1>{element.title1}</h1>
                <h2>{data[index]} properties</h2>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Featured;
