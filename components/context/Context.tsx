import React, { useEffect } from "react";
import { useState } from "react";

import { auth, writeUserData } from "../../firebaseConfig";
import { ref, getDatabase, get } from "firebase/database";

const initGame = {
  avatarName: "",
  selectedAvatar: 1,
  sandDollarCount: 0,
  myCorals: [],
  XP: 0,
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
        } else {
          setAvatarName(initGame.avatarName);
          setMyCorals(initGame.myCorals);
          setSandDollarCount(initGame.sandDollarCount);
          setSelectedAvatar(initGame.selectedAvatar);
          setXP(initGame.XP);
        }

        localStorage.setItem(
          "data",
          JSON.stringify({
            avatarName,
            selectedAvatar,
            sandDollarCount,
            myCorals,
            XP,
          })
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }, [auth.currentUser?.uid]);

  useEffect(() => {
    setAvatarName(avatarName);
    setSelectedAvatar(selectedAvatar);
    setSandDollarCount(sandDollarCount);
    setMyCorals(myCorals);
    setXP(XP);
  }, [avatarName, sandDollarCount, myCorals, selectedAvatar, storedData, XP]);

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
          XP
        );
      }
    }
  }, [avatarName, sandDollarCount, myCorals, selectedAvatar, storedData, XP]);

  useEffect(() => {
    localStorage.setItem(
      "data",
      JSON.stringify({
        avatarName,
        selectedAvatar,
        sandDollarCount,
        myCorals,
        XP,
      })
    );
  }, [avatarName, myCorals, sandDollarCount, selectedAvatar, XP]);

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
      }}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
