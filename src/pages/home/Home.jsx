import React from "react";
import "./home.css";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";

function Home() {
  return (
    <div className="homeContainer">
      <h1 className="homeTitle">Browser by property type</h1>
      <PropertyList />
      <h1 className="homeTitle">Browser by Featured</h1>
      <Featured />
      <h2 className="homeTitle">Homes Guests Love</h2>
      <FeaturedProperties />
    </div>
  );
}

export default Home;
