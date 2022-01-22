import React from "react";
import "./Actors.css";
const Actor = ({ data }) => {
  if (!data) {
    return <div>loading</div>;
  }
  const ur = "https://image.tmdb.org/t/p/w300/";

  const actors = data.actor;
  if (!actors) {
    return <div></div>;
  }

  return (
    <div className="actor-container">
      {actors.map((el) => {
        if(el.profile_path){
        return (
          <div className="act">
            <img src={ur + el.profile_path} />
            <h4>{el.name.slice(0, 10)}</h4>
          </div>
        )}
      })}
    </div>
  );
};
export default Actor;
