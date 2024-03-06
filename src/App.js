import "./App.css"; 
import "./Nav.css";
import "./Header.css";


// IMPORT COMPONENTS 
import Header from "./Components/Header"; 
// import Footer from "./Components/Footer"; 

import { Route, Routes } from "react-router-dom"; 

// IMPORT PAGES 
import Home from "./Pages/Home"; 
import About from "./Pages/About";
import Projects from "./Pages/Projects"; 
import Resume from "./Pages/Resume";

function App() { 
  // URL should have YOUR HEROKU URL for your backend, make sure you include the trailing slash 
  const URL = "https://sarahalasousi-7cd0e1a912de.herokuapp.com/";

  return ( 
    <div className="App"> 

    <Header /> 
    {/* {window.location.pathname !== "/" ? ( <Header /> ) : null} */}

    <Routes> 
      <Route path="/" element={<Home />} /> 
      <Route path="/projects" element={<Projects URL={URL} />} /> 
      <Route path="/about" element={<About URL={URL} />} /> 
      <Route path="/resume" element={<Resume />} /> 
    </Routes> 

    {/* <Footer />  */}
    </div> 
  ); 
}
    
export default App;
