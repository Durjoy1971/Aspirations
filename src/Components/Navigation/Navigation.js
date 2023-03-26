import React from "react";
import "./Navigation.css";
import { Container, Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <div>
      <Navbar className="navbar" collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/AdminLogin">
            <img
              className="image"
              src="https://i.ibb.co/TqTRGBq/Logo-01.png"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link className="nav-point" href="/home">
                Home
              </Nav.Link>
              <Nav.Link className="nav-point" href="/home">
                Class 1-5
              </Nav.Link>
              <Nav.Link className="nav-point" href="/home">
                Skills
              </Nav.Link>
              <Nav.Link className="nav-point" href="/home">
                Admission
              </Nav.Link>
              <Nav.Link className="nav-point" href="/home">
                Kid's Corner
              </Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link className="nav-point log-in-link" href="/logIn">
                Log In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
