import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../../src/logo1.png";
import "../../src/App.css";
import { HashRouter, NavLink } from "react-router-dom";

const navbar = (props) => {
  return (

        <>

 
          <Navbar fixed='top' expand="lg" bg="dark" variant="dark" collapseOnSelect  >
             {/* <Navbar.Brand href="#home">Ninu V.V</Navbar.Brand> */}
            <Navbar.Brand href="/">
              <img className="logo" src={logo} alt=""/>
              </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav  className="ml-auto">

                <NavLink exact to="/" className="main-nav"  activeClassName="active main-nav-active">Home</NavLink>
                <NavLink exact to="/about" className="main-nav" activeClassName="main-nav-active">About Me</NavLink>
                <NavLink exact to="/skills" className="main-nav" activeClassName="main-nav-active">Skills</NavLink>
                <NavLink exact to="/experience" className="main-nav" activeClassName="main-nav-active">Experience</NavLink>
                <NavLink exact to="/projects" className="main-nav" activeClassName="main-nav-active">Projects</NavLink>
                <NavLink exact to="/contact" className="main-nav" activeClassName="main-nav-active">Contact Me</NavLink>
              </Nav>

            </Navbar.Collapse>
          </Navbar>
         
        </>
  );
};

export default navbar;
