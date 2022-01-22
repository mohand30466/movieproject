import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";

const Card = ({ data }) => {
 

  const url = "https://image.tmdb.org/t/p/w300/";

  return (
    <Container> 
    <div className="main-card">
      {data &&
        data.map((movie) => {
          const id = movie.id;
          if (movie.poster_path) {
            return (
              <div className="cardPoster" key={movie.id}>
                <Link className="movieCardLink" to={"/movie/" + id}>
                  <div
                    className="backgroundMovieCard"
                    style={{
                      backgroundImage: `url(${url}${movie.poster_path})`,
                      backgroundSize: "cover",
                    }}
                    key={movie.id}
                  >
                    
                   
                  
                  </div>
                  <div style={{color:"white", fontSize:"17px", textAlign:"center"}} >{movie.title.slice(0,30)}</div>
                  <div className="movieinfo">
                   <div >{movie.release_date.slice(0, 4)}</div>
                    <div >
                      <FontAwesomeIcon icon={faStar} />
                      <span>{movie.vote_average}</span>
                    </div>
                      
                    </div>
                </Link>
              </div>
            );
          }
        })}
    </div>
    </Container>
  );
};
export default Card;
