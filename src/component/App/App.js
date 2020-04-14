import React from "react";
import Navbar from "../Navbar/Navbar";
import MovieList from "../MovieList/MovieList";
import Hero from "../hero/hero";
import Detail from "../Card/Card";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <div>
       
      <Router>
        <Navbar />
        <Switch>
          
          <Route exact path="/about">
            <Hero />
          </Route>
          <Route exact path="/detail">
            <Detail />
          </Route>
          <Route exact path="/movie">
            <MovieList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default App;
