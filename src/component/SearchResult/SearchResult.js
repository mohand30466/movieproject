import React from "react";
import { fetchMovieWithId } from "../../Api/Api";
// import SearchBar from "../SearchBar/SearchBar";

class SearchResult extends React.Component {
  state = { post: [], term: " The Hunt" };
  async componentDidMount() {
    const data = await fetchMovieWithId();

    this.setState({ post: data.results });
  }
  onSearchSubmit= (e)=>{
      e.preventDefault()
      console.log(this.state.term);
     
  }


  render() {
    const result = this.state.post.map((el)=>{
        
        if(el.title == this.state.term){
            return(
                <div>{el.title == this.state.term}</div>
            )
        }
        if(el.title !==this.state.term){
            return(
            <div>{el.title == this.state.term}</div>
            )
        }
    })
    

   
      
    return (
      <div>
        {/* <SearchBar  onvalue={this.state.term} onSubmit={this.onSearchSubmit} onChange={(e)=>this.setState({term:e.target.value})}/> */}
        <div>
            {result}
        </div>
        SearchResult
      </div>
    );
  }
}
export default SearchResult;
