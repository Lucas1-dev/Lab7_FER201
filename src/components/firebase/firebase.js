import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBbKlDiNhxZqFYxQ1wmIXsUcNnp1ST3smo",
    authDomain: "playerauth-380601.firebaseapp.com",
    projectId: "playerauth-380601",
    storageBucket: "playerauth-380601.appspot.com",
    messagingSenderId: "113465169398",
    appId: "1:113465169398:web:7b9a6fdd730d94dac023d7",
    measurementId: "G-DL5NFP8PB7"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();