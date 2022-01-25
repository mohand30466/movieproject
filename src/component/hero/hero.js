import React from "react";
import "./hero.css";
import { tmdbNewestMovies } from "../../Api/Api";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";

class Hero extends React.Component {
  state = {
    data: [],
    isloading: false,
    currentpage: [1],
    cardPerpage: [5],
    term: " ",
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const data = await tmdbNewestMovies();
    this.setState({ data: data.results });
    // console.log(data.results);
  }

  render() {
    const setting = {
      dost: true,
      fade: false,
      infinite: true,
      speed: 500,
      slidestoshow: 1,
      arrows: true,
      slidetoscroll: 1,
      className: "slide",
    };

    const startPoint = Math.floor(Math.random(1) * 15);
    const cards = this.state.data.slice(startPoint, startPoint + 4);
   
    const url = "https://image.tmdb.org/t/p/w300/";

    return (
      <div className="heroContainer">
        <h3 style={{paddingTop:"30px" , color:"white"}}>Welcome To Movie DB Enjoy Your Fouvorite Movie</h3>
        <div className="hero-line">
          <Slider {...setting}>
            {cards.map((el) => {
              const id = el.id;
              if (el.poster_path) {
                return (
                  <div className="Link">
                    <Link to={"/movie/" + id}>
                      <div className="cards"
                       key={el.id}>
                        <div className="heroBackground"
                          style={{  
                            backgroundImage: `url(${url}${el.poster_path})`,
                            width: "75vw",
                            height: "70vh",
                            backgroundSize: "60vw 71vh",
                            
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundPosition:"fixed",
                            borderRadius:"3px"
                          }}
                        ></div>
                      </div>
                    </Link>
                  </div>
                );
              }
            })}
          </Slider>
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(Hero);
