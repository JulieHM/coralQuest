import Header from "../components/Navbar/Header";
import { getDatabase, ref, child, get } from "firebase/database";
import styles from "../styles/Home.module.css";

import React, { useEffect, useState } from "react";

const Leaderboard = () => {
  const [avatarList, setAvatarNameList] = useState<string[]>([]);

  useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, "users")).then((snapshot) => {
      const avatarList: string[] = [];
      snapshot.forEach((child) => {
        avatarList.push(child.val().email + ":" + child.val().sandDollarCount);
      });
      setAvatarNameList(avatarList);
    });
  }, []);

  return (
    <div className={styles["backgroundDiv"]}>
      <Header />
      <div>
        {avatarList.map((avatarName) => (
          <p key={avatarName}>{avatarName}</p>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
