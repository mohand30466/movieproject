import React from "react";
import { tmdbNewestMovies } from "../../Api/Api.js";
import "./MovieList.css";
import { Link } from "react-router-dom";
import Pagination from "../pagination/Pagination";
import Card from "../Card/Card";
import SearchBar from "../SearchBar/SearchBar";

class MovieList extends React.Component {
  state = {
    data: [],
    term: " ",
    isLoading: false,
    curentPage: [1],
    postperPage: [5],
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    const data = await tmdbNewestMovies();
    this.setState({ data: data.results });
    this.setState({ isLoading: false });
  }



  render() {
    if (this.state.isloading) {
      return <di>isloding ...</di>;
    }
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
      <>
     
        <div className="movieContainer">
          <Card data={currentpost} />
        </div>
        <Pagination
          postperpage={this.state.postperPage}
          totalpost={this.state.data.length}
          paginate={paginate}
        />
      </>
    );
  }
}

export default MovieList;
