import React, { Component } from "react";
import "./SearchBar.css";
import { searchMovie } from "../../Api/Api";
import Display from '../Display/display'

class SearchBar extends React.Component {
  state = { term: " ", data: [] };
  // if(this.state.term == ""){
  //   return(
  //     <div>enter something to search</div>
  //   )
  // }

  onClickHandler = async () => {
    //this prevented the default behaviour of the button on a form. Prevents the behaviour orefreshing the page.
    //But you really dont need a form element here. So you can just use a input without wrapped in a form. Then we dont need this preventdefault re because it is not wrapped inside a form.
    // e.preventDefault();
    
    const data = await searchMovie(this.state.term);
    this.setState({ data: data.results });
  
    
  };

  render() {
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
        />
        <button onClick={this.onClickHandler}>Submit</button>
        </div>
        
      </div>
      <Display data={this.state.data}/>
      </>
    );
     
}
}

export default SearchBar;
// 1/make div after the button Element call display
// 2/make another div && use the data inside the div and map on it and display the detail
// 3/display an image tag && and div for the title && rating&& year
/* <img className=" theimage" src={`${url}${el.poster_path}`}></img> */
