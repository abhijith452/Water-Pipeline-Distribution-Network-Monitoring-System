

import React from 'react';
import {
    Link
  } from "react-router-dom";
  import './css/nav.css'
  import logo from "./assets/logo.png"
function Logininfo(){
    return (

        <div className="navbar">
                <Link to='/'>
                <h4>  <img src={logo} style={{width : 160+'px'}} className="logo"/></h4>
               </Link>
            <Link to='/'>
               <h4>Dashboard</h4>
               </Link>
               <Link to='/Devices'>
               <h4>Devices</h4>
               </Link>
               <Link to='/Location'>
               <h4>Location</h4>
               </Link>
               <Link to='/Report'>
               <h4>Generate report</h4>
               </Link>
        </div>
    );
};
export default Logininfo;










