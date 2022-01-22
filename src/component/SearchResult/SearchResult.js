import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import "./SearchResult.css";
import { Container } from "react-bootstrap";
class Latestmovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  render() {
    const results = this.props.location.state.dataresult;
    console.log(results);
    const url = "https://image.tmdb.org/t/p/w300/";

    return (
      <>
        <Link style={{ marginLeft: "30", marginTop: "30" }} to="/">
          <FontAwesomeIcon icon={faArrowCircleLeft} />
        </Link>

        <Container className="cont">
          {results &&
            results.map((movie) => {
              if(movie.poster_path){
              return (
                <Link className="searchMovieLink" to={`/movie/${movie.id}`}> 
                <div className="movdata" key={movie.id}>
                  <div
                    className="bgMovie"
                    style={{
                      backgroundImage: `url(${url}${movie.poster_path})`,
                      backgroundSize: "cover",
                    }}
                    key={movie.id}
                  ></div>
                  <div className="info">
                    <div className="movieTitle"> {movie.title}</div>
                    <div style={{ fontSize: "13px", color: "white" }}>
                      {" "}
                      {`${movie.overview.slice(0, 45)}   ...`}
                    </div>
                    <div className="yearAndRateContainer">
                      <div>{movie.release_date.slice(0, 4)}</div>
                      <div>
                        
                        <FontAwesomeIcon
                          style={{
                            width: "20px",
                            height: "20px",
                            color: "yellow",
                          }}
                          icon={faStar}
                        />
                        <span>{movie.vote_average}</span>

                      </div>
                    </div>
                  </div>
                </div>
                </Link>
              );}
            })}
            
        </Container>
      </>
    );
  }
}
export default withRouter(Latestmovie);

