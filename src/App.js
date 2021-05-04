import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Navbar from "./components/navbar";
import Myfooter from "./components/footer";
// import Mycarousel from "./components/carousel";
import Mytitlemsg from "./components/titlemsg";

import MyAbout from "./pages/about/about";
import Skills from "./pages/skills/Skills";
import Timeline from "./pages/experiences/Timeline";
import Projects from "./pages/projects/projects";

import { HashRouter as Router, Route } from "react-router-dom";
import Contact from "./pages/contact/contact";
import Particles from "react-particles-js";

const App = () => {
  return (
    <>
      <Router basename="/">
        <Navbar />
        <Particles height="100vh" />
        <Route path="/" exact component={Mytitlemsg} />                 
        <Route path="/about" component={MyAbout} />      
        <Route path="/skills" component={Skills} />
        <Route path="/experience" component={Timeline} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />

      <Myfooter />
      </Router>

    </>
  );
};

export default App;
