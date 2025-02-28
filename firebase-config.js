import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


//login authentification
const firebaseConfig = {
    apiKey: "AIzaSyByNd2I5pPDqJcs94JmVntQ39YRDesCPtM",
    authDomain: "mdesigns-45ff9.firebaseapp.com",
    projectId: "mdesigns-45ff9",
    storageBucket: "mdesigns-45ff9.firebasestorage.app",
    messagingSenderId: "561823508868",
    appId: "1:561823508868:android:f708f90619e31d23c195d1"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const firestore = firebase.firestore();