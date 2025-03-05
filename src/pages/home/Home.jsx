import React from "react";
import "./home.css";
import Featured from "../../components/featured/Featured";

function Home() {
  return (
    <div className="homeContainer">
      <Featured />
      <Featured />
    </div>
  );
}

export default Home;
