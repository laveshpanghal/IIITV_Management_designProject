import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Login/Login';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebase from "firebase/compat";
import {getDatabase} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9IBjp9UqZ8yrODdw49DzvS0ANM6etF-g",
  authDomain: "iiitv-198b6.firebaseapp.com",
  databaseURL: "https://iiitv-198b6-default-rtdb.firebaseio.com",
  projectId: "iiitv-198b6",
  storageBucket: "iiitv-198b6.appspot.com",
  messagingSenderId: "793166621376",
  appId: "1:793166621376:web:588bf4ace5c804efb91b25",
  measurementId: "G-DK80WMEJLC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const realDb = getDatabase();



const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  // if (user) {
  //   const uid = user.uid;
    //alert(uid)

    
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );

    // ...
  // } else {
  //   ReactDOM.render(
  //     <React.StrictMode>
  //       <Login />
  //     </React.StrictMode>,
  //     document.getElementById('root')
  //   );
  // }
});

     
    




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
export default realDb;