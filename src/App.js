import React from "react";
import Navbar from "./component/Navbar/Navbar";
import MovieList from "./component/MovieList/MovieList";
import Hero from "./component/hero/hero";
import Detail from "./component/Detail/Detail";
import Contact from './component/contact/contact'

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
     <Navbar />
      <Switch>
      <Route exact path="/">
            <Hero />
            
          </Route>

      <Route exact path="/about">
            <Hero />
          </Route>

          <Route exact path="/movie/latest/:id" >
            <Detail />
          </Route>
          <Route exact path="/movie/latest/">
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
