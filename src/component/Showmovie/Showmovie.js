import React, { Component } from "react";
import "./Showmovie.css";
import Vedioplayer from "../VedioPlayer/VedioPlayer";

const Showmovie = ({ data }) => {
  const ur = "https://image.tmdb.org/t/p/w300/";

  const handelonClick = () => {};
  // console.log(object);

  return (
    <>
      <div className="show-card">
        {data && <img className="show" src={`${ur}${data.poster}`}></img>}
        <div className="play">
          <button onClick={handelonClick}>Play</button>
        </div>
      </div>
      <div>{data && <Vedioplayer vedio={data.vedioPlayerId} />}</div>
    </>
  );
};
export default Showmovie;
