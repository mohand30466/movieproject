import React, { Component } from "react";
import "./SearchBar.css";
import { searchMovie } from "../../Api/Api";
import Display from '../Display/display'
// import SearchResult from '../SearchResult/SearchResult'
import { Link } from "react-router-dom";
import axios from "axios";
import { Redirect } from "react-router-dom"

class SearchBar extends React.Component {
  // state = { term: " ", data: [] };
  constructor(props){
    super(props);
      this.state = {
        term: '',
        data:[],
        dataresult:[],
        displaydata:[]
      }
  }

  async componentDidMount(){
    const moviedata = await searchMovie(this.state.term)    
    this.setState({displaydata: moviedata.results})
    
  }
  
  

  onClickHandler = async () => {
   
    
    const data = await searchMovie(this.state.term);
    this.setState({ data: data.results ,term:""});
  
  };
  handleKeyPress = (e) => {
    let searchParam = e.target.value;
    if (e.key === 'Enter'){
      axios
        .get(URL+searchParam)
        .then((response) => {
          this.setState({dataresult: response.data});
        });
    }
  };
 

  render() {
   
    console.log(this.state.term);

    
    console.log(this.state.data);
    


    return (
      <>
      <div className="searchcontainer">
        <div    className="input">
        <input
       
          type="text"
          placeholder="Search"
          value={this.state.term}
          onChange={(e) => this.setState({ term: e.target.value })}
          onKeyPress={this.handleKeyPress.bind(this)}
        />
        <button onClick={this.onClickHandler}>Submit</button>
        </div>
        {this.state.data &&
          <Redirect to={{
            pathname: '/searchresult',
            state: { dataresult: this.state.data }
          }} />
        }
        
      </div>
      <Display data={this.state.data} handelclick={(e)=>this.setState({data:""})}/>
      {/* <SearchResult data={this.state.data}/> */}
      </>
    );
     
}
}

export default SearchBar;
// 1/make div after the button Element call display
// 2/make another div && use the data inside the div and map on it and display the detail
// 3/display an image tag && and div for the title && rating&& year
/* <img className=" theimage" src={`${url}${el.poster_path}`}></img> */
