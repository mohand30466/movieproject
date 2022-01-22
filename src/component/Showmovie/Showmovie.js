import React, { Component } from "react";
import "./Showmovie.css";
import Vedioplayer from "../VedioPlayer/VedioPlayer";

const Showmovie = ({ data }) => {
  const ur = "https://image.tmdb.org/t/p/w300/";

  const  vedioId = "KWxJXZ3S3-g"
  

  return (
    <>
      <div className="show-card">
        {data && <img className="show" src={`${ur}${data.poster}`}></img>}
      
      </div>
      <div>{data && <Vedioplayer vedio={data.vedioPlayerId} actor={data}/>}</div>
    </>
  );
};
export default Showmovie;
