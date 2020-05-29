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
    height: "600",
    width: "1010.4",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
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
