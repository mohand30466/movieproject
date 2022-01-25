import React from "react";
import { Link } from "react-router-dom";
import { latestMovie } from "../../Api/Api";
import "./Latestmovie.css";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

class Latestmovie extends React.Component {
  state = { data: [] };

  async componentDidMount() {
    const moviedata = await latestMovie();
    this.setState({ data: moviedata.results });
  }

  render() {
    console.log(this.state.data);

    const url = "https://image.tmdb.org/t/p/w300/";

    return (
      <Container>
        <div style={{ textAlign: "center" }}>LATEST MOVIE</div>
        <Link style={{ marginLeft: "30", marginTop: "30" }} to="/">
          <FontAwesomeIcon icon={faArrowCircleLeft} />
        </Link>

        <div className="main-card">
          {this.state.data &&
            this.state.data.map((movie) => {
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
                      ></div>
                      <div
                        style={{
                          color: "white",
                          fontSize: "17px",
                          textAlign: "center",
                        }}
                      >
                        {movie.title.slice(0, 15)}
                      </div>
                      <div className="movieinfo">
                        <div>{movie.release_date.slice(0, 4)}</div>
                        <div>
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
  }
}
export default Latestmovie;
