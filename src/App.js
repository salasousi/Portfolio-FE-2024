import "./App.css"; 

// IMPORT COMPONENTS 
import Header from "./Components/Header"; 
import Footer from "./Components/Footer"; 
import { Route, Switch } from "react-router-dom"; 

// IMPORT PAGES 
import Home from "./Pages/Home"; 
import About from "./Pages/About"; 

function App() { 
  // URL should have YOUR HEROKU URL for your backend, make sure you include the trailing slash 
  const URL = "http://localhost:4000/";

  return ( 
    <div className="App"> 

    <Header /> 

    <Switch> 

      <Route exact path="/"> 
        <Home /> 
      </Route>

      <Route path="/projects"> 
        <Projects URL={URL} /> 
      </Route>

      <Route path="/about"> 
        <About URL={URL} /> 
      </Route>

    </Switch> 

    <Footer /> 
    </div> 
  ); 
} 
    
    
    export default App;
