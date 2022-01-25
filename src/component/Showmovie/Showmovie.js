import React, { Component } from "react";
import "./Showmovie.css";
import Vedioplayer from "../VedioPlayer/VedioPlayer";
import { Container } from "react-bootstrap";

const Showmovie = ({ data }) => {
  const ur = "https://image.tmdb.org/t/p/w300/";

  const  vedioId = "KWxJXZ3S3-g"
  

  return (
    <Container>
      <div className="show-card">
        {data && <img className="show" src={`${ur}${data.poster}`}></img>}
      
      </div>
      <div>{data && <Vedioplayer vedio={data.vedioPlayerId} actor={data}/>}</div>
    </Container>
  );
};
export default Showmovie;
