import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBgt9VPtoVJ2gDJ1i_X_lIOhVWwZ0v0lko",
  authDomain: "netflix-ef3c7.firebaseapp.com",
  projectId: "netflix-ef3c7",
  storageBucket: "netflix-ef3c7.appspot.com",
  messagingSenderId: "630078159418",
  appId: "1:630078159418:web:6c8123e71dfef6e541d303",
  measurementId: "G-T0BZZ5P6MJ",
};

export default firebase.initializeApp(firebaseConfig);
