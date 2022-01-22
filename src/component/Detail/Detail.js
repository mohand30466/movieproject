import React from "react";
import { useParams } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { fetchMovieWithId } from "../../Api/Api";
import { omdbmoviesdata } from "../../Api/Api.js";
import { fetchtrailers } from "../../Api/Api";
import { actors } from "../../Api/Api";
import Showmovie from "../Showmovie/Showmovie";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

import "./Detail.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Detail extends React.Component {
  state = { movieDetail: null, isLoading: false, vedioId: [] };

  async componentDidMount() {
    const obj = {};
    const { id } = this.props.match.params;
    // this.setState({ isLoading: true });

    const tmdbdata = await fetchMovieWithId(id);

    const tmdbid = tmdbdata.imdb_id;
    console.log(id);
console.log(tmdbid);
    const omdbdata = await omdbmoviesdata(tmdbid);
    const actordata = await actors(tmdbid);
    // console.log(actordata);

    obj.actor = actordata.cast;

    obj.title = tmdbdata.title;
    obj.runtime = tmdbdata.runtime;
    obj.rate = tmdbdata.vote_average;
    obj.year = tmdbdata.release_date.slice(0, 4);
    obj.type = omdbdata.Genre;
    obj.writer = omdbdata.Writer;
    obj.background = tmdbdata.backdrop_path;
    obj.poster = tmdbdata.poster_path;
    obj.id = tmdbdata.imdb_id;
    // here i am fetching the thriller
    const vedioId = await fetchtrailers(tmdbid?tmdbid:id);
    console.log("thirller id",vedioId);

    if (vedioId.results.length > 0) {
      obj.vedioPlayerId = vedioId.results[0].key;
    }
    this.setState({ movieDetail: obj });
  }

  render() {
    const ur = "https://image.tmdb.org/t/p/w300/";

    return (
      <Container>
        <div className="detailComponent">
          <div className="backLink">
            <Link to="/movie/">
              <FontAwesomeIcon icon={faArrowCircleLeft} />
            </Link>
          </div>
          <div className="detail-container">
            <div className="info">
              {this.state.movieDetail && (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor:"rgb(36, 57, 63)"
                  }}
                >
                  <div className="main">
                    <div className="detail title">
                      <h4>{this.state.movieDetail.title.slice(0,25)}</h4>
                    </div>
                    <div className="detail title">
                      {" "}
                      {this.state.movieDetail.type}
                      {"||"}
                      {this.state.movieDetail.year}
                      {"||"}
                      {this.state.movieDetail.runtime} {"minutes"}
                    </div>

                    <div className="detail title">
                      {" "}
                      <span className="subtitle">Writer/s:</span>
                      {this.state.movieDetail.writer}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Showmovie data={this.state.movieDetail}></Showmovie>
          </div>
        </div>
      </Container>
    );
  }
}
export default withRouter(Detail);
