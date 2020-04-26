import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";



const Card = ({ data }) => {
  

  return (
    <div className="main-card">
      {data.map((movie) => {
        
        console.log(movie);
        
        const id = movie.id;
        
        return (
          <div>
          <Link to={"/movie/latest/" + id}>
          <div
            className="card"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w300/${movie.poster_path})`,
            }}
            key={movie.id}
          >
           
              <div className="title">{movie.title}</div>
              <div className="year">{movie.release_date.slice(0,4)}</div>
              <div className="rating">
              
                {movie.vote_average}</div>
                {/* <FontAwesomeIcon icon={faSmile}/> */}
            
          </div>
          </Link>
          </div>
        );
      })}
    </div>
  );
};
export default Card;
