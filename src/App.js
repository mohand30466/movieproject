import React from "react";
import Navbar from "./component/Navbar/Navbar";
import MovieList from "./component/MovieList/MovieList";
import Hero from "./component/hero/hero";
import Detail from "./component/Detail/Detail";
import Contact from './component/contact/contact';
import SearchResult from './component/SearchResult/SearchResult'


import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

const App = () => {
  
  return (
    
       
     <BrowserRouter>
     <div>
     <Navbar />
     {/* <SearchBar/> */}
      <Switch>
      <Route exact path="/">
            <Hero />
           {/* <MovieList /> */}
            
          </Route>
          
      <Route exact path="/search">
            <SearchResult/>
          </Route>

      <Route exact path="/about">
            <Hero />
          </Route>

          <Route exact path="/movie/:id" >
            <Detail />
          </Route>
          <Route exact path="/movie/">
            <MovieList />
          </Route>
          <Route exact path="/contact">
          <Contact> </Contact>
          </Route>
         
          </Switch>
     </div>
     </BrowserRouter>
   
  );
};
export default App;
