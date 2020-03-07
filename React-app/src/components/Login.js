

import React from 'react';
import './css/dashboard.css'
function Dashboard(){
    return (
        <div>
        <div id="loginUi">
   
        <input type="email" placeholder="Email" id="email"/>
        <input type="password" placeholder="Password" id="pass"/>
        <button onclick="login()">Login</button>
        
        </div>
        
        <div id="user" class="user">
        <h3>Welcome</h3>
        <button>Log-Out</button>
        </div>
        </div>
          
    );
};
export default Dashboard;










