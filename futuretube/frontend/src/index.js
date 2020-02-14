import * as firebase from "firebase";
import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";

var firebaseConfig = {
    apiKey: "AIzaSyDAAQWbGRhl17WP63VZamGBIJuvDs3Mcpo",
    authDomain: "future-tube.firebaseapp.com",
    databaseURL: "https://future-tube.firebaseio.com",
    projectId: "future-tube",
    storageBucket: "future-tube.appspot.com",
    messagingSenderId: "801849879380",
    appId: "1:801849879380:web:7b6abfd46b124466f9b6c1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
