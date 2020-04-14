import React from "react";
import { tmdbNewestMovies } from "../../Api/Api.js";
import "./MovieList.css";


class MovieList extends React.Component {
  state = {
    data: [],
  };

  async componentDidMount() {
    const data = await tmdbNewestMovies();
    this.setState({ data: data.results });
  }

  showingDetail = (e) => {
    const detail = this.state.data;
       detail.filter((el) => {
      return (
        (el.title === this.state.data.title)
        
  
      )
      
    });

    
  };

  render() {
    return (
      <div className="movieContainer">
        {this.state.data.map((movie) => {
          console.log(movie);
          return (
            <div
              className="card"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w300/${movie.poster_path})`,
              }}
              key={movie.id}
              onClick={(e) => this.showingDetail(e)}
            >
              
                <div className="title">{movie.title}</div>
                <div className="year">{movie.release_date}</div>
                <div className="rating">{movie.vote_average}</div>
              
            </div>
          );
        })}
      </div>
    );
  }
}

export default MovieList;
