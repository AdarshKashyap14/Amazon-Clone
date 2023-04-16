// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1w-lHtoP_MRBJk9f66MSCIFxKp2IWPgM",
  authDomain: "clone-e8fb4.firebaseapp.com",
  projectId: "clone-e8fb4",
  storageBucket: "clone-e8fb4.appspot.com",
  messagingSenderId: "67226111335",
  appId: "1:67226111335:web:4d96ebdf8c7a390b95f3c2",
  measurementId: "G-E0VSJS015G"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();





export {auth} ;