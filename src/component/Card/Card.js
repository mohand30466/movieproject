import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  

  return (
    <div className="main-card">
      {data.map((movie) => {
        
        
        const id = movie.id;
        return (
          <div
            className="card"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w300/${movie.poster_path})`,
            }}
            key={movie.id}
          >
            <Link to={"/movie/latest/" + id}>
              <div className="title">{movie.title}</div>
              <div className="year">{movie.release_date}</div>
              <div className="rating">{movie.vote_average}</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default Card;
