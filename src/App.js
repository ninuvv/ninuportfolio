import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from"./components/navbar";
import Myfooter from"./components/footer";
import Mycarousel from "./components/carousel";
import Mytitlemsg from './components/titlemsg';
import Myscrolldown from "./components/scrolldown";
import MyAbout  from "./pages/about/about"

const App = () => {
  return (
    <div>
          <Navbar/>
          <Mycarousel/>
          <Mytitlemsg/>
         < Myscrolldown/>
         < MyAbout/>
         < Myfooter/>
    </div>


  )
};

export default App;
