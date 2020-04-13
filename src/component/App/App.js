import React from "react";
import Navbar from '../Navbar/Navbar'
import MovieList from '../MovieList/MovieList';
import Hero from '../hero/hero'
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <MovieList/>
     
    </div>
  );
};
export default App;
