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
      title: "Detail",
      url: "/detail",
    },
    {
      title: "Contact",
      url: "/about",
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

// import { faSmile } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import CustomButton from "../custom-button/CustomButton";
// import { Link } from "react-router-dom";
// import Mainpage from "../Mainpage/Mainpage"

  // return (
  //   <>
  //     <div className="navbar-container ">
  //       <div className="navbar-logo">
  //         <Link to="/">
  //           <FontAwesomeIcon icon={faSmile} />
  //         </Link>
  //       </div>

        
  //         <Link to="/signin">
  //           <CustomButton
  //             marginTop="8px"
  //             fontSize="13px"
  //             width="5rem"
  //             padding="4px 10px"
  //             name="sign in"
  //           ></CustomButton>
  //         </Link>
  //       </div>
  //     <