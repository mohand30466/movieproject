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
    term: " "
  };

  async componentDidMount() {
    const data = await tmdbNewestMovies();
    this.setState({ data: data.results });
    console.log(data.results);
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
    console.log(cards);

    return (
      <div className="heroContainer">
        <div className="hero-line" style={{ padding: 50 , width: 600}}>
          <Slider {...setting}>
            {cards.map((el) => {
              const id = el.id;

              return (
                <div className ="Link">
                {/* <Link  to={"/movie/" + id}> */}
                  <div
                    className="cards"
                    style={{
                      backgroundImage: `url(https://image.tmdb.org/t/p/w300/${el.poster_path})`,
                      backgroundSize: "cover",
                    }}
                    key={el.id}
                  >
                    {/* <div className="title"> {el.title}</div> */}
                   
                    
                    <div className="details">
                      <div>{el.title}</div>
                      <div>{el.overview}</div>
                      <div className="ratings">
                      <div>
                        <img
                          style={{ width: "20px", height: "20px" }}
                          src="https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/13575076871557740374-64.png"
                        />
                      </div>
                      <div>{el.vote_average}</div>
                      <div className="years">{el.release_date.slice(0, 4)}</div>
                      <div className="btn"><Link  to={"/movie/" + id}> <button style={{backgroundColor:"blue"}}>Detail</button></Link></div>
                     
                    </div>

                      </div>
                  </div>
                {/* </Link> */}
                </div>
              );
            })}
          </Slider>
          <div>
            <h1>Wellcome to Movie App</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
