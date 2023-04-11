import Header from "../components/Navbar/Header";
import { getDatabase, ref, onValue } from "firebase/database";
import styles from "../styles/Home.module.css";
import stylesLeaderboard from "../components/Leaderboard/Leaderboard.module.css";
import React, { useEffect, useState } from "react";
import { auth } from "../firebaseConfig";
import UserCard from "../components/Leaderboard/UserCard";
import Image from "next/image";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export type User = {
  uid: string;
  email: string;
  avatarName: string;
  sandDollarCount: number;
  selectedAvatar: string;
  coralCollection: number;
  XP: number;
  level: number;
  classID: number;
};

const Leaderboard = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentUserIndex, setCurrentUserIndex] = useState<number | null>(null);
  const [currentTab, setCurrentTab] = useState<"all" | "sameClass">("all");
  const [currentUserClassID, setCurrentUserClassID] = useState<number | null>(
    null
  );

  useEffect(() => {
    const db = getDatabase();
    const dbRef = ref(db, "users/");
    const dbRefUser = ref(db, "users/" + auth.currentUser?.uid);

    onValue(dbRefUser, (snapshot) => {
      const userData = snapshot.val();
      setCurrentUserClassID(userData.classID);
    });

    onValue(dbRef, (snapshot) => {
      const usersData = snapshot.val();
      const allUsersArray = [];
      const currentClassArray = [];

      for (let userId in usersData) {
        const user = usersData[userId];
        const coralnumber = usersData[userId].myCorals?.length;

        allUsersArray.push({
          uid: userId,
          email: user.email,
          avatarName: user.avatarName,
          sandDollarCount: user.sandDollarCount,
          selectedAvatar: user.selectedAvatar,
          coralCollection: coralnumber,
          XP: user.XP,
          level: user.Level,
          classID: user.classID,
        });

        if (user.classID === currentUserClassID) {
          currentClassArray.push({
            uid: userId,
            email: user.email,
            avatarName: user.avatarName,
            sandDollarCount: user.sandDollarCount,
            selectedAvatar: user.selectedAvatar,
            coralCollection: coralnumber,
            XP: user.XP,
            level: user.Level,
            classID: user.classID,
          });
        }
      }

      allUsersArray.sort((a, b) => b.XP - a.XP);
      currentClassArray.sort((a, b) => b.XP - a.XP);

      if (currentTab === "all") {
        setUsers(allUsersArray);
      } else {
        setUsers(currentClassArray);
      }

      // Find the index of the current user in the users array
      const currentUser = auth.currentUser?.uid;
      const currentUserIndex = allUsersArray.findIndex(
        (user) => user.uid === currentUser
      );

      setCurrentUserIndex(currentUserIndex);
    });
  }, [currentTab]);

  console.log(currentUserClassID);

  return (
    <div className={styles["backgroundDiv"]}>
      <Header />
      <p className={stylesLeaderboard["leaderboard_title"]}>Ledertavle</p>
      <div className={stylesLeaderboard["leaderboard-container"]}>
        <Tabs
          className={stylesLeaderboard["tabs"]}
          selectedTabClassName={stylesLeaderboard["selectedTab"]}
          selectedTabPanelClassName={stylesLeaderboard["selectedTabPanel"]}
          onSelect={(index) =>
            setCurrentTab(index === 0 ? "all" : "sameClass")
          }>
          <TabList className={stylesLeaderboard["tabslist"]}>
            <Tab>Alle</Tab>
            <Tab>Bare min klasse</Tab>
          </TabList>

          <TabPanel>
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
                <Image
                  width={25}
                  height={25}
                  src={"/images/dots.png"}
                  alt="dots"
                />
                <UserCard
                  key={users[currentUserIndex].uid}
                  user={users[currentUserIndex]}
                  index={currentUserIndex}
                  currentUser={auth.currentUser?.uid}
                />
              </div>
            )}
          </TabPanel>

          <TabPanel>
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
                <Image
                  width={25}
                  height={25}
                  src={"/images/dots.png"}
                  alt="dots"
                />
                <UserCard
                  key={users[currentUserIndex].uid}
                  user={users[currentUserIndex]}
                  index={currentUserIndex}
                  currentUser={auth.currentUser?.uid}
                />
              </div>
            )}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Leaderboard;
