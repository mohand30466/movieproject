import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navContainer">
      
      <ul>
        <li className="link">Logo</li>
        <li className="link">Home</li>
        <li className="link">About</li>
        <li className="link"> Contact</li>
        <li className="link">Movie</li>
        <li className="link">Papular</li>
      </ul>
    </div>
  );
};
export default Navbar;
