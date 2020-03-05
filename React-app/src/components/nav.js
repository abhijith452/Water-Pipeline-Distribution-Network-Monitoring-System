

import React from 'react';
import {
    Link
  } from "react-router-dom";
function Nav(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
 
  
  <div>
    <div className="navbar-nav">
        <Link to="/">
      <h6 className="nav-item nav-link active" >Home </h6>
      </Link>
      <Link to="/devices">
      <h6 className="nav-item nav-link" >Devices Details</h6>
      </Link>
      
    </div>
  </div>
</nav>
    );
};
export default Nav;










