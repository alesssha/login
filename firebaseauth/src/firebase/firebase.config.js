// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhvTC9DsNi2fr3Y9YkkCy6uxYeYLcHHi4",
  authDomain: "aless-71171.firebaseapp.com",
  projectId: "aless-71171",
  storageBucket: "aless-71171.appspot.com",
  messagingSenderId: "807689134387",
  appId: "1:807689134387:web:72469fdc84837c97451e46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)