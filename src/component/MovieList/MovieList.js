import React from "react";
import { tmdbNewestMovies } from "../../Api/Api.js";
import "./MovieList.css";
import { Link } from "react-router-dom";

class MovieList extends React.Component {
  state = {
    data: [],
   
  };

  async componentDidMount() {
    const data = await tmdbNewestMovies();
    this.setState({ data: data.results });
  }

  // onClick = (e) => {
  //   const detail = this.state.data;
  //   detail.map((el) => {

  //when i click on the button I want to get redirected to the detail component and I want to attach the relevant data to my react router which in my detail component ill fetch the data from my react router and display it on the screen

  //props.history.push(`/movie/${el.id}`)
  //find a way to pass the movie props (el.release.date) to the to the router. And then in detail component you can get the props with the help of the router.
  //google:"how to pass props to react router and fetch it from a component"

  //   });
  // };

  render() {
    return (
      <div className="movieContainer">
        {this.state.data.map((movie) => {
          console.log(movie);

          const id = movie.id;
          return (
            <div
              className="card"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w300/${movie.poster_path})`,
              }}
              key={movie.id}
            >
              <Link to={"/movie/" + id}>
                <div className="title">{movie.title}</div>
                <div className="year">{movie.release_date}</div>
                <div className="rating">{movie.vote_average}</div>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default MovieList;
