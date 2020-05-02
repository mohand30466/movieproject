import React from "react";
import { tmdbimages } from "../../Api/Api.js";

import { tmdbNewestMovies } from "../../Api/Api.js";
import "./MovieList.css";
import Pagination from "../pagination/Pagination";
import Card from "../Card/Card";
import SearchBar from "../SearchBar/SearchBar";

class MovieList extends React.Component {
  state = {
    img:[],
    data: [],
    term: " ",
    isLoading: false,
    curentPage: [1],
    postperPage: [5],
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    const data = await tmdbNewestMovies();
    const dbImg= await tmdbimages();

    this.setState({ data: data.results });
    this.setState({ isLoading: false,img:dbImg.images });
    console.log(this.state.img);
    
    
  }

  render() {
    const isloading = this.state.isLoading;

    const index0flastpage = this.state.curentPage * this.state.postperPage;
    const index0ffirstpage = index0flastpage - this.state.postperPage;
    const currentpost = this.state.data.slice(
      index0ffirstpage,
      index0flastpage
    );
    const paginate = (num) => {
      this.setState({ curentPage: num });
    };

    return (
      <div>
        <div className="movieContainer">
          {isloading && <h1>please wait isLoading...</h1>}

          <Card
            data={currentpost}
            odata={this.state.odata}
            isloading={this.state.isLoading}
            // imagepath={this.state.img}
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
