

import React from 'react';
import './css/Login.css';
import {
    
    Link
  } from "react-router-dom";

function Login(){
    return (
        <center>
        <div>
            <h1>Login / SignIn</h1>
        <div id="loginUi">
   
        <input type="email" placeholder="Email" id="email"/>
        <input type="password" placeholder="Password" id="pass"/>
        <Link to="/Dashboard"> <button onclick="login()">Login</button>
        </Link>
        </div>
        
        
        </div>
        </center>
    );
};
export default Login;

/*<div id="user" class="user">
        <h3>Welcome</h3>
        <button>Log-Out</button>
        </div>*/








