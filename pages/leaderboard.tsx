import { useContext } from "react";
import Header from "../components/Navbar/Header";
import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth } from "firebase/auth";
import { context } from "./_app";
import styles from "../styles/Home.module.css";
import "animate.css";
import React from "react";

const Leaderboard = () => {
  const {
    avatarName,
    selectedAvatar,
    sandDollarCount,
    setAvatarName,
    myCorals,
    setSelectedAvatar,
  } = useContext(context);

  const db = getDatabase();
  const auth = getAuth();

  const userId = auth.currentUser?.uid;
  return onValue(
    ref(db, "/users/" + userId),
    (snapshot) => {
      const username =
        (snapshot.val() && snapshot.val().username) || "Anonymous";
      // ...
    },
    {
      onlyOnce: true,
    }
  );

  return (
    <div className={styles["backgroundDiv"]}>
      <Header />
    </div>
  );
};

export default Leaderboard;
