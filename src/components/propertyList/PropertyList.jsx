import "./propertyList.css";
import { propertyList } from "../../data/propertyList";

function PropertyList() {
  return (
    <div className="propertyList">
      {propertyList.map((element, index) => {
        return (
          <div key={index} className="propertyListItem">
            <img className="propertyListImg" src={element.src} alt="" />
            <div className="propertyListTitles">
              <h1>
                {element.title1} {index}
              </h1>
              <h2>
                {element.title2} {index}
              </h2>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PropertyList;
