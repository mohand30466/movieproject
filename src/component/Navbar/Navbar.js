import React from "react";
import "./Navbar.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
// import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [
    {
      title: " Home",
      url: "/",
      key: 1,
    },
    {
      title: "Search",
      url: "/search",
      key: 2,
    },
    {
      title: "Contact",
      url: "/contact",
      key: 3,
    },
    {
      title: "Movie",
      url: "/movie/latest/",
      key: 4,
    },
  ];

  return (
    <div className="navContainer">
       {/* <div className="logo"> 
         <img src="https://image.shutterstock.com/image-vector/dots-letter-c-logo-design-260nw-551769190.jpg"/>
        
        </div> */}
      
      {links.map((link) => {
        return (
         
          <div className="nav-links">
            <Link className="links" key={link.key} to={link.url}>{link.title}  </Link>
           
          </div>
        );
      })}
      <SearchBar/>
      
    </div>
  );
};
export default Navbar;