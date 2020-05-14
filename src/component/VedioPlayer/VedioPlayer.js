import React from "react";
import "./VedioPlayer.css";
import YouTube from "react-youtube";

const VedioPlayer = ({ vedio }) => {
  // console.log(vedio);
  if (!vedio) {
    return <div>loding...</div>;
  }

  const opts = {
    height: "200",
    width: "300",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <div className="playerContainer">
      
      <YouTube videoId={vedio} opts={opts} />;
     
    </div>
  );
};
export default VedioPlayer;
