import React from 'react';
import './App.css';

import Dashboard from './components/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Devices from './components/Devices';
import Nav from './components/nav'
import Logininfo from './components/Logininfo'

function App() {
  return (
    <Router>
   <Logininfo/>
      <Switch>
      <div className="wrapper">
    <div className="menu">
    <Nav/>
      
    </div>
    <div className="contents">
    <Route exact path="/">
        <Dashboard/>
           </Route>
           
        
           
        <Route path="/Devices">
          <Devices/>
           
           
             </Route>
    
    </div>
    
    </div>
        
      </Switch>
    </Router>
  
   
  );
}

export default App;
