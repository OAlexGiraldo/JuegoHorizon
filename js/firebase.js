// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpWNCN9DNl8D7OrhHOjPtZICyyUfivKDs",
  authDomain: "videojuego-e832a.firebaseapp.com",
  projectId: "videojuego-e832a",
  storageBucket: "videojuego-e832a.appspot.com",
  messagingSenderId: "1023224143519",
  appId: "1:1023224143519:web:057a4762db95c2da9e0caa",
  measurementId: "G-VNS0PTEWRK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);