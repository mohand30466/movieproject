import React from "react";
import MovieList from '../MovieList/MovieList'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";


const Detail = (props) => {
  console.log(props.id);
  
  
  
 
  // const post = this.props.match.patams.id;
  // if (!post){
  //   return <h>lodding</h>
  // }
  



  return (
    <div>
      <div><Link to = "/movie">back to movie list</Link></div>
      Detail
      <div> year : {props.id} </div>
    </div>
  );
};
export default Detail;
