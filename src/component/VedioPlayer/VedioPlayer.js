import React from "react";
import "./VedioPlayer.css";
import YouTube from "react-youtube";
import Actor from "../actors/Actors"

const VedioPlayer = ({ vedio,actor }) => {
  // console.log(vedio);
  if (!vedio) {
    return <div></div>;
  }

  const opts = {
    height: "625",
    width: "1114.4",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <div className="playerContainer">
      
      <YouTube videoId={vedio} opts={opts} />
      <div>
        <Actor data={actor}/>
      </div>
     
    </div>
  );
};
export default VedioPlayer;
