import * as firebase from "firebase";


const config = {
    apiKey: "AIzaSyBMqHXxPV0IiCqygxmiTvZz-3qiZhfT5sA",
    authDomain:"expensemanager-2128d.firebaseapp.com",
    databaseURL:"https://expensemanager-2128d.firebaseio.com",
    projectId: "expensemanager-2128d",
    storageBucket:"expensemanager-2128d.appspot.com",
    messagingSenderId:"543477263595"
  };

  firebase.initializeApp(config);

  const database = firebase.database()
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {firebase, googleAuthProvider, database as default}


  


  