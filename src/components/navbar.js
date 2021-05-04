import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../../src/logo1.png";
import "../../src/App.css";
import { NavLink } from "react-router-dom";

const navbar = () => {
  return (
    <Navbar fixed='top' expand="lg" bg="dark" variant="dark"  collapseOnSelect>
     
      <Navbar.Brand href="/">
         <img className="logo" src={logo} alt=""/>
           </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/" className="main-nav"  activeClassName=" main-nav-active">Hme</Nav.Link>
          <Nav.Link href="#about" className="main-nav"  activeClassName=" main-nav-active">About</Nav.Link>
          <Nav.Link href="#skills" className="main-nav"  activeClassName=" main-nav-active">Skills</Nav.Link>
          <Nav.Link href="#experience" className="main-nav"  activeClassName=" main-nav-active">Experience</Nav.Link>
          <Nav.Link href="#projects" className="main-nav"  activeClassName=" main-nav-active">Projects</Nav.Link>
          <Nav.Link href="#contact" className="main-nav"  activeClassName=" main-nav-active">Contact Me</Nav.Link>
        </Nav>
     
      </Navbar.Collapse>
    </Navbar>

    // <>
    //   <Navbar fixed='top' expand="lg" bg="dark" variant="dark" collapseOnSelect  >
    //      {/* <Navbar.Brand href="#home">Ninu V.V</Navbar.Brand> */}
    //     <Navbar.Brand href="/">
    //       <img className="logo" src={logo} alt=""/>
    //       </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //     <Navbar.Collapse id="responsive-navbar-nav">
    //       <Nav  className="ml-auto">

    //         <NavLink exact to="/" className="main-nav"  activeClassName="active main-nav-active">Home</NavLink>
    //         <NavLink exact to="/about" className="main-nav" activeClassName="main-nav-active">About Me</NavLink>
    //         <NavLink exact to="/skills" className="main-nav" activeClassName="main-nav-active">Skills</NavLink>
    //         <NavLink exact to="/experience" className="main-nav" activeClassName="main-nav-active">Experience</NavLink>
    //         <NavLink exact to="/projects" className="main-nav" activeClassName="main-nav-active">Projects</NavLink>
    //         <NavLink exact to="/contact" className="main-nav" activeClassName="main-nav-active">Contact Me</NavLink>
    //       </Nav>

    //     </Navbar.Collapse>
    //   </Navbar>

    // </>
  );
};

export default navbar;
