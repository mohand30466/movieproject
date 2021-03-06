import React from "react";
import { useParams } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { fetchMovieWithId } from "../../Api/Api";
import { omdbmoviesdata } from "../../Api/Api.js";
import { fetchtrailers } from "../../Api/Api";
import { actors } from "../../Api/Api";
import Showmovie from "../Showmovie/Showmovie";
// import Actor from "../actors/Actors"

import "./Detail.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

class Detail extends React.Component {
  state = { movieDetail: null, isLoading: false, vedioId: [] };

  async componentDidMount() {
    const obj = {};
    const { id } = this.props.match.params;
    // this.setState({ isLoading: true });

    const tmdbdata = await fetchMovieWithId(id);

    const tmdbid = tmdbdata.imdb_id;
    const omdbdata = await omdbmoviesdata(tmdbid);
    const actordata = await actors(tmdbid);
    console.log(actordata.cast);
    
    obj.actor = actordata.cast
    

    obj.title = tmdbdata.title;
    obj.runtime = tmdbdata.runtime;
    obj.rate = tmdbdata.vote_average;
    obj.year = tmdbdata.release_date.slice(0, 4);
    obj.type = omdbdata.Genre;
    obj.writer = omdbdata.Writer;
    obj.background = tmdbdata.backdrop_path;
    obj.poster = tmdbdata.poster_path;
    obj.id = tmdbdata.imdb_id;
    // console.log("id", obj.vedioid);
    const vedioId = await fetchtrailers(id);
    console.log("this is the data I get", vedioId);
    if (vedioId.results.length > 0) {
      obj.vedioPlayerId = vedioId.results[0].key;
    }
    this.setState({ movieDetail: obj });
    // console.log(tmdbdata);
    // console.log(omdbdata);
    // console.log(this.state.vedioId.results[0].id);
  }

  render() {
    // console.log(this.state.movieDetail);

    // const isloading = this.state.isLoading;
    const ur = "https://image.tmdb.org/t/p/w300/";

    return (
      <div className="detailComponent">
        <div className="backLink">
          <Link to="/movie/">Back to movies</Link>
          {/* <br/>
          <Link to="/toprating/">Top Rating</Link>
          <br/>
          <Link to="/latest/">Latest</Link> */}
        </div>
        <div className="detail-container">
        <div className="info">
          {this.state.movieDetail && (
            <div
              style={{
                backgroundImage: `url(${ur}${this.state.movieDetail.background})`,
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
                backgroundSize: "cover",
              }}
            >
              <div className="main">
              <div className="detail title">
                <h3>{this.state.movieDetail.title}</h3>
              </div>
              <div className="detail title">
                {" "}
                {this.state.movieDetail.type}{"||"}
                {this.state.movieDetail.year}{"||"}
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
    );
  }
}
export default withRouter(Detail);
