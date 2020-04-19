import React from "react";
import Navbar from "../Navbar/Navbar";
import MovieList from "../MovieList/MovieList";
import Hero from "../hero/hero";
import Detail from "../Detail/Detail";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

const App = (props) => {
  return (
    
       
     <BrowserRouter>
     <div>
       
      <Switch>

          <Route exact path="/about">
            <Hero />
          </Route>

          <Route exact path="/movie/:id/" >
            <Detail />
          </Route>
          <Route exact path="/movie">
            <MovieList />
          </Route>
          <Route exact path="/contact">
           mohand30466@gmail.com
          </Route>
          </Switch>
     </div>
     </BrowserRouter>
   
  );
};
export default App;
