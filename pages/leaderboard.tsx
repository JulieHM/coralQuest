import Header from "../components/Navbar/Header";
import { getDatabase, ref, onValue } from "firebase/database";
import styles from "../styles/Home.module.css";
import stylesLeaderboard from "../components/Leaderboard/Leaderboard.module.css";
import React, { useEffect, useState } from "react";
import { auth } from "../firebaseConfig";
import UserCard from "../components/Leaderboard/UserCard";
import Image from "next/image";

export type User = {
  uid: string;
  email: string;
  avatarName: string;
  sandDollarCount: number;
  selectedAvatar: string;
  coralCollection: number;
  totalSandDollars: number;
};

const Leaderboard = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentUserIndex, setCurrentUserIndex] = useState<number | null>(null);

  useEffect(() => {
    const db = getDatabase();
    const dbRef = ref(db, "users/");

    onValue(dbRef, (snapshot) => {
      const usersData = snapshot.val();
      const usersArray = [];

      for (let userId in usersData) {
        const user = usersData[userId];
        const coralnumber = usersData[userId].myCorals?.length;
        usersArray.push({
          uid: userId,
          email: user.email,
          avatarName: user.avatarName,
          sandDollarCount: user.sandDollarCount,
          selectedAvatar: user.selectedAvatar,
          coralCollection: coralnumber,
          totalSandDollars: user.totalSandDollars,
        });
      }

      usersArray.sort((a, b) => b.totalSandDollars - a.totalSandDollars);
      setUsers(usersArray);

      // Find the index of the current user in the users array
      const currentUser = auth.currentUser?.uid;
      const currentUserIndex = usersArray.findIndex(
        (user) => user.uid === currentUser
      );
      setCurrentUserIndex(currentUserIndex);
    });
  }, []);

  return (
    <div className={styles["backgroundDiv"]}>
      <Header />
      <p className={stylesLeaderboard["leaderboard_title"]}>Ledertavle</p>
      <div className={stylesLeaderboard["leaderboard-container"]}>
        <div className={stylesLeaderboard["top5-container"]}>
          {users.slice(0, 5).map((user, index) => (
            <UserCard
              key={user.uid}
              user={user}
              index={index}
              currentUser={auth.currentUser?.uid}
            />
          ))}
        </div>
        {currentUserIndex !== null && currentUserIndex >= 5 && (
          <div className={stylesLeaderboard["under5-container"]}>
            <Image width={30} height={30} src={"/images/dots.png"} alt="dots" />
            <UserCard
              key={users[currentUserIndex].uid}
              user={users[currentUserIndex]}
              index={currentUserIndex}
              currentUser={auth.currentUser?.uid}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Leaderboard;
