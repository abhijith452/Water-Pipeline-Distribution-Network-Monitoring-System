
// Importing libraries

import React, {useState, useEffect} from 'react';
import Login from './components/login/login'
import Dashboard from './components/dashboard/dashboard'
import './App.css'
import {BrowserRouter as Router} from "react-router-dom";
import fire from './config/fire'



function App() {

const [user,setUser] = useState({})  

function authListener() {
  fire.auth().onAuthStateChanged((user) => {
   
    if (user) {
      setUser({ user });
     
   
    } else {
      setUser({ user: null });
     
    }
  });
}

useEffect(()=>{
  
  authListener();
},[])


// Returning the line chart

return(
  
  <Router>

<div style={{height: 100+"%"}}>{user.user ?  ( <Dashboard/>) : (<Login />)}</div>
  </Router>
 
  )
}

export default App;
