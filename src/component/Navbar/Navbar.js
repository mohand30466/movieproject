import React from "react";
import "./Navbar.css";
import {
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
    // {
    //   title: "Search",
    //   url: "/search/",
    //   key: 2,
    // },
    // {
    //   title: "Contact",
    //   url: "/contact",
    //   key: 3,
    // },
    // {
    //   title: "Movie",
    //   url: "/movie/",
    //   key: 4,
    // },
   
  ];

  return (
    <div className="navContainer">
     
      
      {links.map((link) => {
        return (
         
          <div className="nav-links" key={link.key}>
            <Link className="links"  to={link.url}>{link.title}  </Link>
           
          </div>
        );
      })}
      <SearchBar/>
      
    </div>
  );
};
export default Navbar;