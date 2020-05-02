import React from "react";
import { withRouter } from "react-router-dom";
import { tmdbNewestMovies } from "../../Api/Api";
import SearchBar from "../SearchBar/SearchBar";
import "./searchbarResult.css";

class SearchResult extends React.Component {
  state = { post: [], term: " " };

  async componentDidMount() {
    const data = await tmdbNewestMovies();
    
    this.setState({ post: data.results });
    
  }

  onSearchSubmit = (e) => {
    e.preventDefault();
    const results = this.state.post.map((el) => {
      if (el.title == this.state.term) {
        return <div>{el.title}</div>;
      }
      if (el.title !== this.state.title) {
        return <div>wrong data plese try again</div>;
      }
    });
   
    
    console.log(this.state.term);
  };

  render() {
    
     

    return (
      <div className="searchcontainer">
        <div>
          <h2> Here you can search for any movies by name</h2>
        </div>
        <div>
          <SearchBar
            onvalue={this.state.term}
            onSubmit={this.onSearchSubmit}
            onChange={(e) => this.setState({ term: e.target.value })}
          />
        </div>
    {/* <div>{results}</div> */}
      </div>
    );
  }
}
export default withRouter(SearchResult);
