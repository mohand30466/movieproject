import React from "react";
import "./display.css";
import { Link } from "react-router-dom";


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Display = ({ data }) => {
  if(!data){
    return <div className="search">please enter title to search</div>
  }
  const url = "https://image.tmdb.org/t/p/w300/";
  const results = data.slice(0,5)

  return (
    <div className="main-container">
      <div className="display-card">
          
        {results.map((movie) => {
          const id = movie.id;
         
          

          return (
            
              <div
                
                // style={{
                //   backgroundImage: `url()`,
                //   backgroundSize: "cover",
                // }}
                key={movie.id}
              >
                 <Link className="cardd" to={"/movie/" + id}>
                  <img src={`${url}${movie.poster_path}`}/>
                  <div style={{marginLeft:"10px"}}>
                    <div className="titled"> {movie.title.slice(0,12)}</div>
                    <div className="yeard">
                          {/* <FontAwesomeIcon icon = {faCoffee}/> */}
                        
                        {movie.release_date.slice(0, 4)}</div>
                    <div className="ratingd">    
                    <img
                      style={{ width: "15px", height: "15px" }}
                      src="https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/13575076871557740374-64.png"
                    />
                
                         {movie.vote_average} 
                         </div>
                        
                 </div>
                 </Link>
            </div>
          );
        })}
        
      </div>
      </div>
   
  );
};
export default Display;
                  