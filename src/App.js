import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from"./components/navbar";
import Myfooter from"./components/footer";
import Mycarousel from "./components/carousel";
import Mytitlemsg from './components/titlemsg';
import Myscrolldown from "./components/scrolldown";
import MyAbout  from "./pages/about/about"
import Skills from "./pages/skills/Skills";
import Timeline from "./pages/experiences/Timeline";
import {BrowserRouter as Router,Route} from "react-router-dom"


const App = () => {
  return (
    
      <Router>
        <Navbar/>
        <Route path="/"  exact component={Mycarousel} />
        <Route path="/" exact component={Mytitlemsg} />
        <Route path="/about" component={MyAbout} />
        <Route path="/skills" component={Skills} />
        <Route path="/experience" component={Timeline} />
        <Route path="/projects" component={MyAbout} />
        <Route path="/contact" component={MyAbout} />


        < Myfooter/>
      </Router>
      // <div>

      // {/* <Navbar/>
      //     <Mycarousel/>
      //     <Mytitlemsg/> */}
      //    {/* < Myscrolldown/> */}
      //    {/* < MyAbout/>
         
      //    < Skills/>
      //    <Timeline/>
      //    < Myfooter/> */}
      // </div>
    
   


  )
};

export default App;
