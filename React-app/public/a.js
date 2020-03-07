
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      document.getElementById("loginUi").style.display="block";
      document.getElementById("user").style.display="none";
    } else {
      // No user is signed in.
      document.getElementById("loginUi").style.display="none";
      document.getElementById("user").style.display="block";
    }
  });

function login(){
    let userId= document.getElementById("email").value;
    let userPass= document.getElementById("pass").value;
    alert(userId+""+userPass)



}
var myHeaders = new Headers();
myHeaders.append("Accept", "application/json;");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://iotdata23.table.core.windows.net/Iotdata?sv=2019-02-02&ss=bfqt&srt=sco&sp=rwdlacup&se=2020-02-27T09:07:30Z&st=2020-02-27T01:07:30Z&spr=https&sig=Xdrm8hPhuhfaJSkHBwTBSZsARIaTYlFy%2BNoJOqDyaHU%3D", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  Console.log(response);