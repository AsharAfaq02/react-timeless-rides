import 'bootstrap/dist/css/bootstrap.min.css';
import react, { Component } from 'react';
import NavBar from "./Components/NavBar.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from "./Pages/Gallery.js";
import Forum from "./Pages/Forum.js";
import MyGarage from "./Pages/MyGarage.js";
import "./App.css";

class App extends Component {
 
  render() {
  
    return(
      
      <body>
      <Router>
      <NavBar />
      <Routes>
        <Route path = '/' exact />
        <Route path = '/Gallery' element = {<Gallery />} />
        <Route path = '/Forum' element = {<Forum />} />
        <Route path = '/MyGarage' element = {<MyGarage />} />
      </Routes>
      </Router>
      </body>
      
        
    )
  }
}

export default App;
