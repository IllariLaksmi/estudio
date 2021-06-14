import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase/app";

// Use your config values here.
firebase.initializeApp({
  apiKey: "AIzaSyClwkui-ICA8ZByZ0S63bqYV2CkpXzYNaM",
  authDomain: "landing-page-ccad0.firebaseapp.com",
  databaseURL: "https://landing-page-ccad0-default-rtdb.firebaseio.com",
  projectId: "landing-page-ccad0",
  storageBucket: "landing-page-ccad0.appspot.com",
  messagingSenderId: "367154421808",
  appId: "1:367154421808:web:91f7a6e2d72ede1f134df5",
  measurementId: "G-0TVZ32NHCV"
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);