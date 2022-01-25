import React from "react";
import "./VedioPlayer.css";
import YouTube from "react-youtube";
import Actor from "../actors/Actors"
import { Container } from "react-bootstrap";

const VedioPlayer = ({ vedio,actor }) => {
  // console.log(vedio);
  if (!vedio) {
    return <div></div>;
  }

  const opts = {
    height: "625",
    width: "1116",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <Container>
    <div className="playerContainer">
      
      <YouTube className="vde" videoId={vedio} opts={opts} />
      <div>
        <Actor data={actor}/>
      </div>
     
    </div>
    </Container>
  );
};
export default VedioPlayer;
