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

  render() {
    return (
      <div>
        {this.state.data.map((movie) => {
          console.log(movie);
          return (
            <div className="card" key={movie.id}>
              <div>title:{movie.title}</div>
              <div>year:{movie.year}</div>
              <div>rating:{movie.vote_count}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default MovieList;
