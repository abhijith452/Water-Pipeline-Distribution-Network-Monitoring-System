
// Importing libraries

import React, { useState } from 'react';
import './login.css';
import fire from '../../config/fire';
function Login() {

    const [email, setEmail] = useState({});
    const [password, setPassword] = useState({});


    // Returning the line chart


    const login = (e) => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(email, password).then((u) => {
        }).catch((error) => {
            console.log(error);
        });
    }

    return (<div className="loginpage">
        <div className="login">
        <h3>Login</h3>
            <form onSubmit={login}>
              
                
              
                    <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} s/>
                     <div className="tbot"></div>
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}  />
                    <div className="tbot"></div>
                    <p><a href="https://www.youtube.com/">Forgot password ?</a></p>
                

                <button type="submit" className="btn btn-primary">Login</button>
                <p>Don't have a account ? <a href="https://www.youtube.com/">Sign up here</a></p>
            </form>

        </div>
    </div>
    );
}

export default Login;
