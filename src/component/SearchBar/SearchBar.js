import React from "react";
import './SearchBar.css'
// import { withRouter } from "react-router-dom";
// import { fetchMovieWithId } from "../../Api/Api";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   BrowserRouter,
// } from "react-router-dom";


const SearchBar = ({onvalue,onSubmit,onChange})=> {
  onSubmit= (e)=>{
    e.preventDefault()
    

  }

 


  
  return (
    <div className="searchcontainer">
    
      <form onSubmit = {onSubmit}>
        <input className="input" type="text" placeholder="Search"  value={onvalue} onChange={onChange } />
      </form>
    </div>
  );
};

export default SearchBar;
