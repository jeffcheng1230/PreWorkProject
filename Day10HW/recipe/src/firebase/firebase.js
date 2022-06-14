// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYgb6c3JdW4gIjtgG5pGAtA7lwKKffMKE",
  authDomain: "recipe-a85e4.firebaseapp.com",
  projectId: "recipe-a85e4",
  storageBucket: "recipe-a85e4.appspot.com",
  messagingSenderId: "1028278477231",
  appId: "1:1028278477231:web:e406dac87192901beecf5a",
  measurementId: "G-HFKLX6WQG9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// Get authentication
const auth = getAuth(app);
export {db, auth};