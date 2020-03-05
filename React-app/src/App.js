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

function App() {
  return (
  <div>
    
    <Router>
    <Nav/>
      <Switch>
        <Route exact path="/"><h2>Dashboard</h2>
        <Dashboard/>
           </Route>
           
        <Route path="/Devices">
          <Devices/>
           
           
             </Route>
      </Switch>
    </Router>
   </div>
   
  );
}

export default App;
