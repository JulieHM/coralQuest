import Header from "../components/Navbar/Header";
import { getDatabase, ref, child, get, onValue } from "firebase/database";
import styles from "../styles/Home.module.css";
import Image from "next/image";

import React, { useEffect, useState } from "react";

type User = {
  uid: string;
  email: string;
  avatarName: string;
  sandDollarCount: number;
  selectedAvatar: string;
  coralCollection: number;
};

const Leaderboard = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const db = getDatabase();
    const dbRef = ref(db, "users/");

    onValue(dbRef, (snapshot) => {
      const usersData = snapshot.val();
      const usersArray = [];

      for (let userId in usersData) {
        const user = usersData[userId];
        const coralnumber = usersData[userId].myCorals.length;
        usersArray.push({
          uid: user.uid,
          email: user.email,
          avatarName: user.avatarName,
          sandDollarCount: user.sandDollarCount,
          selectedAvatar: user.selectedAvatar,
          coralCollection: coralnumber,
        });
      }

      setUsers(usersArray);
    });
  }, []);

  return (
    <div className={styles["backgroundDiv"]}>
      <Header />

      <div className={styles["leaderboard-container"]}>
        {users.map((user, index) => (
          <div className={styles["user-row"]} key={index}>
            <div className={styles["user-avatar-name"]}>
              <Image
                width={50}
                height={50}
                className={styles["user-avatar"]}
                src={`/images/scubadivers/scubadiver${user.selectedAvatar}.svg`}
                alt="Avatar"
              />
              <p>{user.avatarName}</p>
            </div>
            <div>
              <p className={styles["user-property"]}>
                Sanddollars: {user.sandDollarCount}
              </p>
              <p className={styles["user-property"]}>
                Corals: {user.coralCollection}
              </p>
              {/* Render any other properties of a user here */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
