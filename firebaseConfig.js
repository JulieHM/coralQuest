// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set, get, update, onValue } from "firebase/database";
import { getAnalytics, logEvent } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from "firebase/app";
import "firebase/database";
import { getSandDollarValue } from "./components/SandDollar/SandDollar";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJgPT9N4sw0k05GaTF71XcFRzaLsv5-r8",
  authDomain: "coral-reef-awareness.firebaseapp.com",
  databaseURL:
    "https://coral-reef-awareness-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "coral-reef-awareness",
  storageBucket: "coral-reef-awareness.appspot.com",
  messagingSenderId: "998272556243",
  appId: "1:998272556243:web:776a998a9d4950ede8c826",
  measurementId: "G-N2W7T6R3SM",
};

export let analytics;

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getDatabase();

if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
  console.log(app);
}

export default app;

export async function writeUserData(
  userId,
  avatarname,
  selectedavatar,
  email,
  sandDollarCount,
  myCorals,
  totalSandDollars
) {
  update(ref(db, "users/" + userId), {
    avatarName: avatarname,
    selectedAvatar: selectedavatar,
    email: email,
    sandDollarCount: sandDollarCount,
    myCorals: myCorals,
    totalSandDollars: totalSandDollars,
  });
}

export async function getUserData(userId) {
  const dbRef = ref(getDatabase());
  try {
    const snapshot = await get(child(dbRef, `users/${userId}`));
    if (snapshot.exists()) {
      const user = snapshot.val();
      return user;
    } else {
      console.log("No data available");
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}
