import React from "react";
import { useParams } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { fetchMovieWithId } from "../../Api/Api";
import "./Detail.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

class Detail extends React.Component {
  state = { post: [], isLoading:false,odata:[] };

  async componentDidMount() {
    this.setState({isLoading:true})
    const data = await fetchMovieWithId();
    this.setState({ post: data.results });
    this.setState({isLoading:false})
  }

  render() {
    const isloading = this.state.isLoading
    // const spinner = ()=>{
    //   return(
    //     <div><h1>loading ... </h1></div>
    //   )
    // }
    const { id } = this.props.match.params;

    const moreData  =  async()=> {
      const response = await fetch(`http://www.omdbapi.com/?apikey='eb26ffd2'&?t=${id}`);
      const odata = await response.json()
      this.setState({odata:this.state.odata})
      return odata;
     
      
  }
  // console.log(this.state.odata);
    return (
      <div className="detailComponent">
         {isloading && <div><h1>loading ... </h1></div>}

        <div className="backLink">
          <Link to="/movie/">back to movie list</Link>
        </div>
       
        {this.state.post.map((el) => {
          if (el.id == id) {
            return(
          
              
                <div className="info">
                  <div className="detail"> Title :{el.title} </div>
                  <div className="detail">Year :{el.release_date.slice(0,4)} </div>
                  <div className="detail"> Tybe :{moreData.release_date} </div>
                </div>
               
            )
            
          }
          if (el.id !== id) {
            return <div></div>;
          }
        })}
       
       
      </div>
    );
  }
}
export default withRouter(Detail);
