import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Header = () => {
  return (
    <Navbar style={{backgroundColor: "rgb(32, 62, 79)"}} expand="lg">
      <Container fluid>
        <Navbar.Brand href="/" style={{ color: "white", fontSize: 25 }}>
          Movie DB!
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 mt-10"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link className="heaserLink" to="/toprating">
              <Nav.Link href="/toprating" style={{ color: "white" }}>
                Top Rate
              </Nav.Link>
            </Link>

            <Link className="heaserLink" to="/latest">
              <Nav.Link
                href="/latest"
                style={{ color: "white", marginRight: 50 }}
              >
                Latest
              </Nav.Link>
            </Link>
          </Nav>
          <SearchBar />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
