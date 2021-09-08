

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaXaVRZpWLlFVwa0v9TyT93USx_o9ALl0",
  authDomain: "frelansir-6bfab.firebaseapp.com",
  projectId: "frelansir-6bfab",
  storageBucket: "frelansir-6bfab.appspot.com",
  messagingSenderId: "680844554478",
  appId: "1:680844554478:web:7c751551d48ccbb84783ff",
  measurementId: "G-FYDG4Q50TJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);