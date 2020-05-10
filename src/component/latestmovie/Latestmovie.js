import React from "react";
import { Link } from "react-router-dom";

const Latestmovie = ({ data }) => {
  const url = "https://image.tmdb.org/t/p/w300/";

  return (
    <div>
      <button></button>
      {data && (
        <div>
          <div>{data.title}</div>
          
        </div>
      )}
    </div>
  );
};
export default Latestmovie;
