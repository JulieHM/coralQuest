// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJgPT9N4sw0k05GaTF71XcFRzaLsv5-r8",
  authDomain: "coral-reef-awareness.firebaseapp.com",
  projectId: "coral-reef-awareness",
  storageBucket: "coral-reef-awareness.appspot.com",
  messagingSenderId: "998272556243",
  appId: "1:998272556243:web:776a998a9d4950ede8c826",
  measurementId: "G-N2W7T6R3SM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
/*const analytics = getAnalytics(app);*/
export const auth = getAuth(app);