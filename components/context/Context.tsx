import React, { useEffect } from "react";
import { useState } from "react";

import { auth, writeUserData } from "../../firebaseConfig";
import { ref, getDatabase, get } from "firebase/database";

const initGame = {
  avatarName: "",
  selectedAvatar: 1,
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
  //console.log(storedData);

  const [avatarName, setAvatarName] = useState<string>(
    storedData.avatarName || initGame.avatarName
  );

  const [selectedAvatar, setSelectedAvatar] = useState<number>(
    storedData.selectedAvatar || initGame.selectedAvatar
  );
  const [sandDollarCount, setSandDollarCount] = useState<number>(
    storedData.sandDollarCount || initGame.sandDollarCount
  );
  const [totalSandDollars, setTotalSandDollars] = useState<number>(
    storedData.totalSandDollars || initGame.totalSandDollars
    //10
  );
  const [myCorals, setMyCorals] = useState(
    storedData.myCorals || initGame.myCorals
  );
  const [data, setData] = useState(initGame);

  const db = getDatabase();
  const dbRef = ref(db, "users/" + auth.currentUser?.uid);

  //når ny bruker logger inn: henter fra databasen og setter verdiene til til context og state
  useEffect(() => {
    get(dbRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const dataFromDb = snapshot.val();
          console.log(dataFromDb);
          setAvatarName(dataFromDb.avatarName || initGame.avatarName);
          setMyCorals(dataFromDb.myCorals || initGame.myCorals);
          setSandDollarCount(
            dataFromDb.sandDollarCount || initGame.sandDollarCount
          );
          setSelectedAvatar(
            dataFromDb.selectedAvatar || initGame.selectedAvatar
          );
          setTotalSandDollars(
            dataFromDb.totalSandDollars || initGame.totalSandDollars
          );
        } else {
          setAvatarName(initGame.avatarName);
          setMyCorals(initGame.myCorals);
          setSandDollarCount(initGame.sandDollarCount);
          setSelectedAvatar(initGame.selectedAvatar);
          setTotalSandDollars(initGame.totalSandDollars);
        }

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

        console.log("fra db avatarnavn", avatarName);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [auth.currentUser?.uid]);

  useEffect(() => {
    //if (storedData !== null) {
    setAvatarName(avatarName);
    setSelectedAvatar(selectedAvatar);
    setSandDollarCount(sandDollarCount);
    setMyCorals(myCorals);
    setTotalSandDollars(totalSandDollars);
    //}
  }, [
    avatarName,
    sandDollarCount,
    myCorals,
    selectedAvatar,
    storedData,
    totalSandDollars,
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
          totalSandDollars
        );
      }
    }
  }, [
    avatarName,
    sandDollarCount,
    myCorals,
    selectedAvatar,
    storedData,
    totalSandDollars,
  ]);

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
        setData,
      }}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
