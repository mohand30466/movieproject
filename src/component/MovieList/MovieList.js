import React from "react";
import { tmdbNewestMovies } from "../../Api/Api.js";
import {latestMovie} from '../../Api/Api'
import "./MovieList.css";
import Pagination from "../pagination/Pagination";
import Card from "../Card/Card";
import { Link } from "react-router-dom";

class MovieList extends React.Component {
  state = {
    latestMovie:[],
    data: [],
    term: " ",
    isLoading: false,
    curentPage: [1],
    postperPage: [10],
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    const data = await tmdbNewestMovies();
    const lmovie = await latestMovie()
    // const dbImg= await tmdbimages();

    this.setState({ data: data.results,latestMovie: lmovie});
    this.setState({ isLoading: false });
  }

  render() {
    const id = this.state.data.id
    const isloading = this.state.isLoading;

    const index0flastpage = this.state.curentPage * this.state.postperPage;
    const index0ffirstpage = index0flastpage - this.state.postperPage;
    const currentpost = this.state.data.slice(
      index0ffirstpage,
      index0flastpage
    );

    //  this.state.data = (num) => {
    //   this.setState({ curentPage: num });
    // };

    const paginate = (num) => {
      this.setState({ curentPage: num });
    };

    return (
      <div>
       
        <div className="movie-link">
          <Link  className="link" to={"/latest/"}>
          <div  >LatestMovie</div>
          </Link>
          <Link className="link"   to={"/latest/"}>
          <div >TopMovie</div>
          </Link>
        </div>
        
        <div className="movieContainer">
          {isloading && <h1>please wait isLoading...</h1>}
          {/* <Latestmovie data={this.state.latestMovie}/> */}

          <Card
            data={currentpost}
           
            isloading={this.state.isLoading}
           
          />
        </div>
        <Pagination
          postperpage={this.state.postperPage}
          totalpost={this.state.data.length}
          paginate={paginate}
        />
      </div>
    );
  }
}

export default MovieList;
