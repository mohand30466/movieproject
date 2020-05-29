import React from "react";
import { withRouter } from "react-router-dom";

import { Link } from "react-router-dom";
import { searchMovie } from "../../Api/Api";

// import './SearchResult.css'

class Latestmovie extends React.Component  {

    constructor(props){
        super(props);
        this.state = {
          data:[] 
        }

      }

 


  render(){
   
    const results = this.props.location.state.dataresult
    console.log(results);
   
    

  
  const url = "https://image.tmdb.org/t/p/w300/";

 
  return (
    <div>
      <Link to ="/">back to home</Link>

      <div className="main-card">
      {results.map((movie) => {
        const id = movie.id;
        if(!results){
            return<div> wrong data</div>
        }
       
       
        return (
          
          <div key={movie.id}>
            <Link to={"/movie/" + id}>
              <div
                className="card-latest"
                style={{
                  backgroundImage: `url(${url}${movie.poster_path})`,
                  backgroundSize:'cover',
                }}
                key={movie.id}
              >
                <div className="title">{" "}{movie.title}</div>
                <div className="year">
                
                  {movie.release_date.slice(0, 4)}</div>
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
 
    </div>
  );
   }
};
export default withRouter(Latestmovie);
