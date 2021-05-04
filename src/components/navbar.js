import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../../src/logo1.png";
import "../../src/App.css";


const navbar = () => {
  return (
    <Navbar fixed='top' expand="lg" bg="dark" variant="dark"  collapseOnSelect>
     
      <Navbar.Brand href="#">
         <img className="logo" src={logo} alt=""/>
           </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#" className="main-nav"  activeClassName=" main-nav-active">Home</Nav.Link>
          <Nav.Link href="#about" className="main-nav"  activeClassName=" main-nav-active">About</Nav.Link>
          <Nav.Link href="#skills" className="main-nav"  activeClassName=" main-nav-active">Skills</Nav.Link>
          <Nav.Link href="#experience" className="main-nav"  activeClassName=" main-nav-active">Experience</Nav.Link>
          <Nav.Link href="#projects" className="main-nav"  activeClassName=" main-nav-active">Projects</Nav.Link>
          <Nav.Link href="#contact" className="main-nav"  activeClassName=" main-nav-active">Contact Me</Nav.Link>
        </Nav>
     
      </Navbar.Collapse>
    </Navbar>

  );
};

export default navbar;
