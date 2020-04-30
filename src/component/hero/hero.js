import React from "react";
import "./hero.css";
import Card from "../Card/Card";
import { tmdbNewestMovies } from "../../Api/Api";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";


class Hero extends React.Component {
  state = {
    data: [],
    isloading: false,
    currentpage: [1],
    cardPerpage: [5],
  };

  async componentDidMount() {
    this.setState({ isloading: true });
    const data = await tmdbNewestMovies();
    this.setState({ data: data.results });
    this.setState({ isloading: false });
    console.log(data.results);
    

  
  }

  render() {
    const setting = {
      dost: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidestoshow: 1,
      arrows: true,
      slidetoscroll: 1,
      className: "slide",
    };
    const isloading = this.state.isloading;

    const startPoint = Math.floor(Math.random(this.state.currentpage) * 15);
    const cards = this.state.data.slice(startPoint, startPoint + 1);
    console.log(cards);
    return (
      <div className="heroContainer">
        {isloading && <h1>loading...</h1>}

        <div className="hero-line" style={{padding:50}}>
          <Slider {...setting}>
            {this.state.data.map((el)=>{
               const id = el.id;
               
              return(
                <Link to={"/movie/" + id}>
                <div
                className="cards" 
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/w300/${el.poster_path})`,
                  backgroundSize:'cover',
                }}
                key={el.id}
              >
                <div className="title">latest>{" "}{el.title}</div>
                <div className="years">{el.release_date.slice(0, 4)}</div>
                <div className="ratings">
                  <div>
                    <img
                      style={{ width: "20px", height: "20px" }}
                      src="https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/13575076871557740374-64.png"
                    />
                  </div>
                  <div>{el.vote_average}</div>
                </div>
              </div>
              </Link>
              )
             
            })}
            
           
          </Slider>
        </div>
      </div>
    );
  }
}

export default Hero;
