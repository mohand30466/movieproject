import React from "react";
import { useParams } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { fetchMovieWithId } from "../../Api/Api";
import { omdbmoviesdata } from "../../Api/Api.js";

import "./Detail.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

class Detail extends React.Component {
  
  state = { movieDetail: null, isLoading: false };

  async componentDidMount() {
    const obj = {};
    const { id } = this.props.match.params;
    this.setState({ isLoading: true });
   
    const tmdbdata = await fetchMovieWithId(id);
  
    const tmdbid = tmdbdata.imdb_id;
    const omdbdata = await omdbmoviesdata(tmdbid);
    obj.title = tmdbdata.title;
    obj.runtime = tmdbdata.runtime;
    obj.rate = tmdbdata.vote_average;
    obj.year = tmdbdata.release_date.slice(0,4);
    obj.type = omdbdata.Genre
    obj.writer = omdbdata.Writer
    
    this.setState({ isLoading: false, movieDetail: obj });
    // console.log(this.state.movieDetail);
    
  }

  render() {
    const isloading = this.state.isLoading;
    
    return (
      <div className="detailComponent">
        {isloading && (
          <div>
            <h1>loading ... </h1>
          </div>
        )}

        <div className="backLink">
          <Link to="/movie/">back to movie list</Link>
        </div>
        <div className="info">

        {this.state.movieDetail && (
          <>
          <div className="detail"> <span className="subtitle">Title</span> :{this.state.movieDetail.title}</div>
          <div className="detail"><span className="subtitle">Year</span> :{this.state.movieDetail.year}</div>

          <div className="detail"><span className="subtitle">Runtime :</span>  {this.state.movieDetail.runtime} minutes</div>
          <div className="detail"> <span className="subtitle">Rating :</span>{this.state.movieDetail.rate}stars</div>
          <div className="detail"> <span className="subtitle">Tybe :</span>{this.state.movieDetail.type}</div>
          <div className="detail"> <span className="subtitle">Writer/s:</span>{this.state.movieDetail.writer}</div>



          </>
        )} 
        </div>
      </div>
    );
  }
}
export default withRouter(Detail);
