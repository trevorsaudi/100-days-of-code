import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyC1LLT3L_Am1EH3rVUyKWZHlVx6tTcafPk",
    authDomain: "react-planner-fbf8c.firebaseapp.com",
    databaseURL: "https://react-planner-fbf8c.firebaseio.com",
    projectId: "react-planner-fbf8c",
    storageBucket: "react-planner-fbf8c.appspot.com",
    messagingSenderId: "999866869494",
    appId: "1:999866869494:web:a81e59d0d83418439e6ed7",
    measurementId: "G-MVX85KFW1X"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase