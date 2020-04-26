import React from "react";
import { fetchMovieWithId } from "../../Api/Api";
import SearchBar from "../SearchBar/SearchBar";
import './searchbarResult.css'

class SearchResult extends React.Component {
  state = { post: [], term: " " };

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
      <div className="searchcontainer">
          <div>
             <h2> Here you can search for any movies by name</h2>
          </div>
            <div>
            <SearchBar  onvalue={this.state.term} onSubmit={this.onSearchSubmit} onChange={(e)=>this.setState({term:e.target.value})}/>

                {result}
            </div>
             <div> length.</div>
            
      </div>
    );
  }
}
export default SearchResult;
