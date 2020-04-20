import React from "react";
import "./Navbar.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About",
      url: "/movie/",
    },
    {
      title: "Contact",
      url: "/contact",
    },
    {
      title: "Movie",
      url: "/movie",
    },
  ];

  return (
    <div className="navContainer">
      {links.map((link) => {
        return (
          <div className="nav-links">
            <Link className="links" to={link.url}>{link.title}</Link>{" "}
          </div>
        );
      })}
    </div>
  );
};
export default Navbar;