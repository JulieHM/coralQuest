import React, { useEffect } from "react";
import { createContext, useState } from "react";

import { auth, writeUserData } from "../../firebaseConfig";
import { ref, getDatabase, get } from "firebase/database";

const initGame = {
  avatarName: "",
  selectedAvatar: "",
  sandDollarCount: 0,
  myCorals: [],
  totalSandDollars: 0,
};

const getInitialState = () => {
  const data = localStorage.getItem("data");
  return data ? JSON.parse(data) : initGame;
};

export const Context = React.createContext<any>({});

const ContextProvider = (props: any) => {
  const minData = localStorage.getItem("data");
  const storedData = minData ? JSON.parse(minData) : initGame;
  console.log(storedData);

  const [avatarName, setAvatarName] = useState<string>(
    storedData.avatarName || initGame.avatarName
  );

  const [selectedAvatar, setSelectedAvatar] = useState<string>(
    storedData.selectedAvatar || initGame.selectedAvatar
  );
  const [sandDollarCount, setSandDollarCount] = useState<number>(
    storedData.sandDollarCount || initGame.sandDollarCount
  );
  let [totalSandDollars, setTotalSandDollars] = useState<number>(
    //storedData.totalSandDollars || initGame.totalSandDollars
    10
  );
  let [myCorals, setMyCorals] = useState(
    storedData.myCorals || initGame.myCorals
  );
  let [data, setData] = useState(initGame);
  console.log("total", totalSandDollars);
  const db = getDatabase();
  //const dbRef = ref(db, "users/" + auth.currentUser?.uid);

  useEffect(() => {
    //const myValue = localStorage.getItem("data");
    if (storedData !== null) {
      //console.log("lagret", storedData);
      setAvatarName(storedData.avatarName);
      setSelectedAvatar(storedData.selectedAvatar);
      setSandDollarCount(storedData.sandDollarCount);
      setMyCorals(storedData.myCorals);
      setTotalSandDollars(storedData.totalSandDollars);
    }
  }, []);

  useEffect(() => {
    //const myValue = localStorage.getItem("data");
    if (storedData !== null) {
      //console.log("lagret", storedData);
      if (auth.currentUser?.uid != null) {
        writeUserData(
          auth.currentUser?.uid,
          storedData.avatarName,
          storedData.selectedAvatar,
          auth.currentUser?.email,
          storedData.sandDollarCount,
          storedData.myCorals,
          storedData.totalSandDollars
        );
      }
    }
  }, [avatarName, selectedAvatar, myCorals, totalSandDollars, storedData]);

  //DENNE FUNKER: setter localhost verdi til det staten er
  useEffect(() => {
    localStorage.setItem(
      "data",
      JSON.stringify({
        avatarName,
        selectedAvatar,
        sandDollarCount,
        myCorals,
        totalSandDollars,
      })
    );
  }, [avatarName, myCorals, sandDollarCount, selectedAvatar, totalSandDollars]);

  const addAvatarName = (avatarName: string) => {
    setAvatarName(avatarName);
  };

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
        totalSandDollars,
        setTotalSandDollars,
        data,
        addAvatarName,
        setData,
      }}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
