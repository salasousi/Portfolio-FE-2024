import "./App.css"; 
import "./Nav.css";
import "./Header.css";


// IMPORT COMPONENTS 
import Header from "./Components/Header"; 
import Footer from "./Components/Footer"; 

import { Route, Routes } from "react-router-dom"; 

// IMPORT PAGES 
import Home from "./Pages/Home"; 
import About from "./Pages/About";
import Projects from "./Pages/Projects"; 

function App() { 
  // URL should have YOUR HEROKU URL for your backend, make sure you include the trailing slash 
  const URL = "http://localhost:4000/";

  return ( 
    <div className="App"> 

    <Header /> 

    {/* <Nav/> */}
    

    <Routes> 
      <Route path="/" element={<Home />} /> 
      <Route path="/projects" element={<Projects URL={URL} />} /> 
      <Route path="/about" element={<About URL={URL} />} /> 
    </Routes> 

    <Footer /> 
    </div> 
  ); 
}
    
export default App;
