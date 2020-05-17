import React from "react";
import { Link } from "react-router-dom";
import {latestMovie} from '../../Api/Api'
import './Latestmovie.css'

class Latestmovie extends React.Component  {
  state ={data:[]}

  async componentDidMount(){
    const moviedata = await latestMovie()    
    this.setState({data: moviedata.results})
    

  }
 



  render(){
    console.log(this.state.data);

  
  const url = "https://image.tmdb.org/t/p/w300/";

 
  return (
    <div>
      <Link to ="/">back to home</Link>

      <div className="latest-title">Latest Movie</div>
      <div className="main-card">
      
      {this.state.data.map((movie) => {
        const id = movie.id;
       
       
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
export default Latestmovie;
