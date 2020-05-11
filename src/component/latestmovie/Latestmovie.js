import React from "react";
import { Link } from "react-router-dom";
import {latestMovie} from '../../Api/Api'

class Latestmovie extends React.Component  {
  state ={data:null}

  async componentDidMount(){
    const moviedata = latestMovie()    
    this.setState({data: moviedata})
    

  }
 



  render(){
    console.log(this.state.data);

  
  const url = "https://image.tmdb.org/t/p/w300/";

 
  return (
    <div>
    {/* {this.state.data.map((el)=>{
      return(
      <div>{el.title}</div>
      )
    })} */}
   
          
     
    </div>
  );
   }
};
export default Latestmovie;
