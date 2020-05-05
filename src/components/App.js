import React from 'react';
import './../css/App.css';
import Nav from './Nav';
import Footer from './Footer';
import Dieuhuongurl from '../router/Dieuhuongurl';
import {
  BrowserRouter as Router,
} from "react-router-dom";
function App() {
  return (
      <Router>
          <div>
            
                <Nav/>
                <Dieuhuongurl/>
                <Footer/>
            
          </div>
      </Router>
  );
}

export default App;
