
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBOXqs66aBAn5z_BCKtG1N8hS4hpAHY9Tg",
    authDomain: "reboot-hackathon.firebaseapp.com",
    databaseURL: "https://reboot-hackathon.firebaseio.com",
    projectId: "reboot-hackathon",
    storageBucket: "reboot-hackathon.appspot.com",
    messagingSenderId: "357071411578",
    appId: "1:357071411578:web:678f6c5a6a38e87bf25ec3",
    measurementId: "G-8GBLFCF9KV"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;