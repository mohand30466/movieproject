import React from "react";
import { Link } from "react-router-dom";
import { topRating } from "../../Api/Api";
import "./TopRating.css";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

class Latestmovie extends React.Component {
  state = { data: [] };

  async componentDidMount() {
    const moviedata = await topRating();
    this.setState({ data: moviedata.results });
  }

  render() {
    // console.log(this.state.data);

    const url = "https://image.tmdb.org/t/p/w300/";

    return (
      <Container>
        <div style={{ textAlign: "center" }}>TOP RATING</div>
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
                        className="information"
                        style={{
                          color: "white",
                          fontSize: "15px",
                          height: "33px",
                          textAlign: "center",
                        }}
                      >
                        {movie.title.slice(0, 20)}
                      </div>
                      <div className="movieinfo information">
                        <div>{movie.release_date.slice(0, 4)}</div>
                        <div>{`|| ${movie.original_language} ||`}</div>
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
