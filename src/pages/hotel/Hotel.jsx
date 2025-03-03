import React from "react";
import { useParams } from "react-router-dom";

function Hotel() {
  const { id } = useParams();

  return <div>Hotel: {id}</div>;
}

export default Hotel;
