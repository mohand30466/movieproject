import React from "react";
import "./hero.css";
import Card from "../Card/Card";
import { tmdbNewestMovies } from "../../Api/Api";

class Hero extends React.Component {
  state = {
    data: [],
    currentpage: [1],
    cardPerpage: [5],
  };

  async componentDidMount() {
    const data = await tmdbNewestMovies();
    this.setState({ data: data.results });

    console.log(data);
  }

  render() {
      const startPoint = Math.floor((Math.random(this.state.currentpage) * 15));  
      const cards = this.state.data.slice(
        startPoint,
       startPoint + 4,
    );

    return (
      <div className="heroContainer">
         
        <div className="hero-line">
        <Card data={cards} />
        </div>
        <h1>Wellcome to Movie App </h1>
          <p>choose your movie and enjoy it</p>
     
      </div>
    );
  }
}

export default Hero;
