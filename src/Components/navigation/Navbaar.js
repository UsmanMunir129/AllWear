import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navbaar() {
  const [navbar, setNavbar] = useState(false);
  const [color, setColor] = useState("white");
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };

  const changeTextColor = () => {
    if (window.scrollY >= 400) {
      setColor("black");
    } else {
      setColor("white");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeTextColor, true);
    return () => window.removeEventListener("scroll", changeTextColor);
  }, []);

  const changeBackground = () => {
    if (window.scrollY >= 400) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <Navbar
      // onScroll={changeNavBg}
      expand="lg"
      className={navbar ? "navbar navbar-background" : "navbar"}
      fixed="top"
    >
      <Container fluid>
        <Navbar.Brand href="#" style={{ color: color }}>
          Navbar scroll
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll " className="border-0 " />
        <Navbar.Collapse id="navbarScroll" className="border-0">
          <Nav
            className="me-4 my-2 my-lg-0 d-flex align-items-center ms-auto "
            navbarScroll
          >
            <Nav.Link href="/" style={{ color: color }}>
              About
            </Nav.Link>
            {/* <NavDropdown
              title="Products"
              id="navbarScrollingDropdown"
              show={show}
              className="dropdown"
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
            >
              <NavDropdown.Item href="#action3">Purpose</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link style={{ color: color }} href="#">
              Purpose
            </Nav.Link>
            <Nav.Link href="#action2" style={{ color: color }}>
              Culture
            </Nav.Link>
            <Nav.Link href="#" style={{ color: color }}>
              Stories
            </Nav.Link>
            <Nav.Link href="#" style={{ color: color }}>
              Investors
            </Nav.Link>
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbaar;
