import React, { useEffect } from "react";
import { useState } from "react";

import { analytics, auth, writeUserData } from "../firebaseConfig";
import { ref, getDatabase, get } from "firebase/database";
import { logEvent } from "firebase/analytics";

const initGame = {
  avatarName: "",
  selectedAvatar: 1,
  sandDollarCount: 0,
  myCorals: [],
  XP: 0,
  level: 1,
  divingText: [],
  unlockedQuizzes: [1],
  classID: 1,
};

export const Context = React.createContext<any>({});

const ContextProvider = (props: any) => {
  const minData = localStorage.getItem("data");
  const storedData = minData ? JSON.parse(minData) : initGame;

  const [avatarName, setAvatarName] = useState<string>(
    storedData.avatarName || initGame.avatarName
  );

  const [selectedAvatar, setSelectedAvatar] = useState<number>(
    storedData.selectedAvatar || initGame.selectedAvatar
  );
  const [sandDollarCount, setSandDollarCount] = useState<number>(
    storedData.sandDollarCount || initGame.sandDollarCount
  );
  const [XP, setXP] = useState<number>(storedData.XP || initGame.XP);
  const [myCorals, setMyCorals] = useState(
    storedData.myCorals || initGame.myCorals
  );
  const [data, setData] = useState(initGame);

  const [level, setLevel] = useState(storedData.level || initGame.level);
  const [divingText, setDivingText] = useState(
    storedData.divingText || initGame.divingText
  );
  const [notification, setNotification] = useState(false);

  const [unlockedQuizzes, setUnlockedQuizzes] = React.useState<number[]>(
    storedData.unlockedQuizzes || initGame.unlockedQuizzes
  );

  const db = getDatabase();
  const dbRef = ref(db, "users/" + auth.currentUser?.uid);

  useEffect(() => {
    get(dbRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const dataFromDb = snapshot.val();
          setAvatarName(dataFromDb.avatarName || initGame.avatarName);
          setMyCorals(dataFromDb.myCorals || initGame.myCorals);
          setSandDollarCount(
            dataFromDb.sandDollarCount || initGame.sandDollarCount
          );
          setSelectedAvatar(
            dataFromDb.selectedAvatar || initGame.selectedAvatar
          );
          setXP(dataFromDb.XP || initGame.XP);
          setLevel(dataFromDb.level || initGame.level);
          setDivingText(dataFromDb.divingText || initGame.divingText);
          setUnlockedQuizzes(dataFromDb.unlockedQuizzes);
        } else {
          setAvatarName(initGame.avatarName);
          setMyCorals(initGame.myCorals);
          setSandDollarCount(initGame.sandDollarCount);
          setSelectedAvatar(initGame.selectedAvatar);
          setXP(initGame.XP);
          setLevel(initGame.level);
          setDivingText(initGame.divingText);
          setUnlockedQuizzes(initGame.unlockedQuizzes);
        }

        localStorage.setItem(
          "data",
          JSON.stringify({
            avatarName,
            selectedAvatar,
            sandDollarCount,
            myCorals,
            XP,
            level,
            divingText,
            unlockedQuizzes,
          })
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }, [auth.currentUser?.uid]);

  useEffect(() => {
    setNotification(true);
  }, [level]);

  useEffect(() => {
    setAvatarName(avatarName);
    setSelectedAvatar(selectedAvatar);
    setSandDollarCount(sandDollarCount);
    setMyCorals(myCorals);
    setXP(XP);
    setDivingText(divingText);
    setUnlockedQuizzes(unlockedQuizzes);
  }, [
    avatarName,
    sandDollarCount,
    myCorals,
    selectedAvatar,
    storedData,
    XP,
    divingText,
    unlockedQuizzes,
  ]);

  useEffect(() => {
    if (storedData !== null) {
      if (auth.currentUser?.uid != null) {
        writeUserData(
          auth.currentUser?.uid,
          avatarName,
          selectedAvatar,
          auth.currentUser?.email,
          sandDollarCount,
          myCorals,
          XP,
          level,
          divingText,
          unlockedQuizzes
        );
      }
    }
  }, [
    avatarName,
    sandDollarCount,
    myCorals,
    selectedAvatar,
    storedData,
    XP,
    level,
    divingText,
    unlockedQuizzes,
  ]);

  useEffect(() => {
    localStorage.setItem(
      "data",
      JSON.stringify({
        avatarName,
        selectedAvatar,
        sandDollarCount,
        myCorals,
        XP,
        level,
        divingText,
        unlockedQuizzes,
      })
    );
  }, [
    avatarName,
    myCorals,
    sandDollarCount,
    selectedAvatar,
    XP,
    level,
    divingText,
    unlockedQuizzes,
  ]);

  const [prevLevel, setPrevLevel] = useState(0);

  useEffect(() => {
    if (XP < 100) {
      setLevel(1);
      //setPrevLevel(0);
    } else if (XP < 300) {
      setLevel(2);
      //setPrevLevel(1);
    } else {
      setLevel(3);
      //setPrevLevel(2);
    }
  }, [XP]);

  useEffect(() => {
    if (level !== prevLevel) {
      logEvent(analytics, "level_start", {
        level_name: level,
      });
      logEvent(analytics, "level_end", {
        level_name: prevLevel + 1,
        success: true,
      });
      if (level > 1) {
        logEvent(analytics, "level_up", {
          level: level,
          character: avatarName,
        });
      }
      setPrevLevel(level);
    }
  }, [level]);

  return (
    <Context.Provider
      value={{
        avatarName,
        setAvatarName,
        selectedAvatar,
        setSelectedAvatar,
        sandDollarCount,
        setSandDollarCount,
        myCorals,
        setMyCorals,
        XP,
        setXP,
        data,
        setData,
        level,
        setLevel,
        divingText,
        setDivingText,
        notification,
        setNotification,
        unlockedQuizzes,
        setUnlockedQuizzes,
      }}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
