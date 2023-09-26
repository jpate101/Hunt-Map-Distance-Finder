import './App.css';
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Link } from 'react-router-dom';
import stillwaterMap from './images/Stillwater2.png'
import lawsonMap from './images/Lawson2.png'
import desalleMap from './images/DeSalle2.png'
import StillwaterRoute from './StillwaterRoute';
import DesalleRoute from './DesalleRoute';
import LawsonRoute from './LawsonRoute';
const Landing = () => {
  return (
    <div className="flex-container landing-style">
      <div className="image-container-landing">
        <Link to="/S">
          <img src={stillwaterMap} className="centered-image" alt="missing image"/>
         <h2>Stillwatter Bayou</h2>
        </Link>
      </div>
      <div className="image-container-landing">
        <Link to="/L">
        <img src={lawsonMap} className="centered-image" alt="missing image"/>
         <h2>Lawson Delta</h2>
        </Link>
      </div>
      <div className="image-container-landing">
        <Link to="/D">
        <img src={desalleMap} className="centered-image" alt="missing image"/>
         <h2>Desalle</h2>
        </Link>
      </div>
    </div>
  );
 };


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="flex-container">
          <Header />
          {/* the content */}
          <Routes className="">
            <Route path="/" element={<Landing />} />
            <Route path="/Hunt-Map-Distance-Finder" element={<Landing />} />
            <Route path="/S" element={<StillwaterRoute />} />
            <Route path="/L" element={<LawsonRoute />} />
            <Route path="/D" element={<DesalleRoute />} />
          </Routes>
          
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
