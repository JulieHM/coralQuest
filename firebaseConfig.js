// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
export const database = getDatabase();

if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
  console.log(app);
}

// if (typeof window !== 'undefined') {
//   logEvent(analytics, "sand_dollar_count", "earn_virtual_currency", {
//   virtual_currency_name: "Sanddollar",
//   value: 5
// });
// }

export default app;

// export function writeUserData(userId, name, email, sandDollarCount) {
//   const db = getDatabase();
//   set(ref(db, 'users/' + userId), {
//     avatarName: avatarName,
//     email: email,
//     sandDollarCount: sandDollarCount
//   });
// }

/* export async function getUserData(userId) {
  const dbRef = ref(getDatabase());
  try {
    const snapshot = await get(child(dbRef, `users/${userId}`));
    if (snapshot.exists()) {
      const userData = snapshot.val();
      return userData;
    } else {
      console.log("No data available");
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}
 */
