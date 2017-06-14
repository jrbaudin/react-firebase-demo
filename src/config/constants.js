import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCZsbkrxbGHstiGCO1Q8XEt8vH27XcfyHE",
    authDomain: "react-firebase-demo-e951e.firebaseapp.com",
    databaseURL: "https://react-firebase-demo-e951e.firebaseio.com",
    projectId: "react-firebase-demo-e951e",
    storageBucket: "react-firebase-demo-e951e.appspot.com",
    messagingSenderId: "96895214567"
  };

firebase.initializeApp(config)

export const ref = firebase.database().ref()