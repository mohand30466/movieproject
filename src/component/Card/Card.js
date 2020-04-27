// import {faHome}from '@fortawesome/fontawesome-free'
// import {FontAwesomeIcon}from '@fontawesome/react-fontawesome'

import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ data, odata,isloading}) => {
  // console.log(odata);

  return (
    
    <div className="main-card">
      
      {data.map((movie) => {
        const id = movie.id;
       
       
        return (
          
          <div key={movie.id}>
            <Link to={"/movie/" + id}>
              <div
                className="card"
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/w300/${movie.poster_path})`,
                }}
                key={movie.id}
              >
                <div className="title">{movie.title}</div>
                <div className="year">{movie.release_date.slice(0, 4)}</div>
                <div className="rating">
                  <div>
                    <img
                      style={{ width: "20px", height: "20px" }}
                      src="https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/13575076871557740374-64.png"
                    />
                  </div>
                  <div>{movie.vote_average}</div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default Card;
