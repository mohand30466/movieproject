import React from "react";
import Navbar from "./component/Navbar/Navbar";
import MovieList from "./component/MovieList/MovieList";
import Hero from "./component/hero/hero";
import Detail from "./component/Detail/Detail";
// import SearchResult from "./component/SearchResult/SearchResult";
// import SearchBar from './component/SearchBar/SearchBar'
import Latestmovie from './component/latestmovie/Latestmovie'
import TopRating from './component/TopRating/TopRating'
import SearchResult from './component/SearchResult/SearchResult'
import {Redirect} from  'react-router-dom'



import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import { topRating } from "./Api/Api";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          {/* <Redirect from='' to='/' /> */}
          <Route exact path="/">
            <Hero />
            <MovieList />
          </Route>

          <Route exact path="/latest">
          <Latestmovie/>
          </Route>

          <Route exact path="/about">
            <Hero />
          </Route>

          <Route exact path="/movie/:id">
            <Detail />
          </Route>
          <Route exact path="/movie/">
            <MovieList />
          </Route>
          <Route exact path="/toprating">
            <TopRating/>
          </Route>
        
        <Route exact path="/searchresult">
            <SearchResult/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default App;
