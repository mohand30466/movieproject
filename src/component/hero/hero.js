import React from "react";
import "./hero.css";
import Card from "../Card/Card";
import { tmdbNewestMovies } from "../../Api/Api";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

class Hero extends React.Component {
  state = {
    data: [],
    isloading: false,
    currentpage: [1],
    cardPerpage: [5],
    term: " ",
  };

  async componentDidMount() {
    const data = await tmdbNewestMovies();
    this.setState({ data: data.results });
    console.log(data.results);

    this.onSearchSubmit = (e) => {
      e.preventDefault();
     this.state.data.map((el)=>{
      if(this.state.term == el.title ){
        console.log(el.title);
        
        return(
        this.setState({data: el})
        )
      }
      if( this.state.term !== el.title){
      
        
        return(
        this.setState({data: this.state.data})
        )
      }
    })
    // console.log(this.state.term);
    
   
    
  };
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
        <div className="hero-line" style={{ padding: 50 }}>
          <div className="searchbar">
            <SearchBar
              onvalue={this.state.term}
              onSubmit={this.onSearchSubmit}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>

          <Slider {...setting}>
            {cards.map((el) => {
              const id = el.id;

              return (
                <Link to={"/movie/" + id}>
                  <div
                    className="cards"
                    style={{
                      backgroundImage: `url(https://image.tmdb.org/t/p/w300/${el.poster_path})`,
                      backgroundSize: "cover",
                    }}
                    key={el.id}
                  >
                    <div className="title">latest> {el.title}</div>
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
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}

export default Hero;
