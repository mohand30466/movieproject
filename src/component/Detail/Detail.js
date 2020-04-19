import React from "react";
import { useParams } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { fetchMovieWithId } from "../../Api/Api";
import './Detail.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

class Detail extends React.Component {
  state = { post: [], data: [] };

  async componentDidMount() {
    const data = await fetchMovieWithId();

    this.setState({ post: data.results });
  }

  render() {
    const { id } = this.props.match.params;
    return (
      <div className="detailComponent">
         <div className='backLink'>
             <Link to="/movie">back to movie list</Link>
         </div>
        {this.state.post.map((el) => {
         
          if (el.id == id) {
            return (
              <div className= "info">
                <div className="detail"> title :{el.title} </div>
                <div className="detail">year :{el.release_date} </div>

               
             </div>
            );
          }
          if (el.id !== id) {
            return (
              <div>
                
              </div>
            );
          }
        })}
      </div>
    );
  }
}
export default withRouter(Detail);
