import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyBSnFTMSLUloSUm9LONGU4zy0MNL0Imfgk",
    authDomain: "videochat-abf09.firebaseapp.com",
    databaseURL: "https://videochat-abf09.firebaseio.com",
    projectId: "videochat-abf09",
    storageBucket: "videochat-abf09.appspot.com",
    messagingSenderId: "412861452256",
    appId: "1:412861452256:web:e5200709cf7b95d42b6585"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
 
  export default firebaseApp.firestore();
