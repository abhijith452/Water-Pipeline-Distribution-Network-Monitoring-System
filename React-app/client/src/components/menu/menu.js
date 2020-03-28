
// Importing libraries

import React from 'react';
import './menu.css';
import { Link } from "react-router-dom";
import fire from '../../config/fire';

function Menu() {
 


var user = fire.auth().currentUser;
var name;

if (user != null) {
  name = user.displayName;
 
}
  // var userUpdate = fire.auth().currentUser;

  // userUpdate.updateProfile({
  //   displayName: "Ashmy Shams",
   
  // }).then(function() {
  //   console.log("Done")
  // }).catch(function(error) {
  //   console.log(error)
  // });

 
    // Returning the line chart


    return (
        <div className="menu">
            <div className="nav">
           
            <ul className="ul">
              <div className = "user">
               <i className="fas fa-user fa-5x"  style={{color:'rgb(151, 151, 151)'}}></i>
               <h3 style={{color:'rgb(151, 151, 151)', marginTop : 10+"px"}}>Welcome</h3>
    <h6  style={{color:'rgb(151, 151, 151)'}}>{name}</h6>
               </div>
            <li>
              <Link to="/">  <i className="fas fa-chart-bar"></i> Dashboard</Link>
            </li>
            <li>
              <Link to="/about">  <i className="fas fa-map-marked-alt"></i> Map View</Link>
            </li>
            <li>
              <Link to="/login">  <i className="fas fa-cog"></i> Settings</Link>
            </li>
            <li>
              <Link to="/">  <i className="fas fa-chart-line"></i> Generate Report</Link>
            </li>  
            </ul>
            </div>
            <Link to="/"> <p><i className="fas fa-question-circle"></i> Report a problem </p> </Link>
        </div>

    );
}

export default Menu;
