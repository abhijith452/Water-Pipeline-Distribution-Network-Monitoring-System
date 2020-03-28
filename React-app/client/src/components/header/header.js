
// Importing libraries

import React from 'react';
import './header.css';

import fire from '../../config/fire';

function Header() {

const LogOut = ()=>{
  fire.auth().signOut();
}
  // var userUpdate = fire.auth().currentUser;

  // userUpdate.updateProfile({
  //   displayName: "Abhijith",
  //   photoURL: "https://example.com/jane-q-user/profile.jpg"
  // }).then(function() {
  //   console.log("Done")
  // }).catch(function(error) {
  //   console.log(error)
  // });



// Returning the line chart

return (
  
  <div className="header">
    <i className="fas fa-bars fa-2x" style={{margin: 20}}></i>
	<div className="settings">
	<i className="fas fa-bell"></i>
 <button className="btn-primary" align="right" onClick={LogOut}>LogOut</button>
	</div>

  </div>
  
  );
}

export default Header;
