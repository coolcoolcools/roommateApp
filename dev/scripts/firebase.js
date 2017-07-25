import firebase from 'firebase';
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA0JKSCVLHLH9RAgPxw3edrBzYndem3kXc",
    authDomain: "roommateapp-409ce.firebaseapp.com",
    databaseURL: "https://roommateapp-409ce.firebaseio.com",
    projectId: "roommateapp-409ce",
    storageBucket: "roommateapp-409ce.appspot.com",
    messagingSenderId: "640364942565"
  };
firebase.initializeApp(config);

export const auth = firebase.auth();
export const database = firebase.database();
export const dbRef = database.ref("/");
export const provider = new firebase.auth.GoogleAuthProvider;
export default firebase;