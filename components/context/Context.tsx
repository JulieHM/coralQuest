import React, { useEffect } from "react";
import { createContext, useState } from "react";

// const initGame = {
//   data: [
//     { avatarName: "" },
//     { selectedAvatar: "" },
//     { sandDollarCount: 0 },
//     { totalSandDollarCount: 0 },
//     { myCorals: [] },
//   ], //prøv med liste
// };

const initGame = {
  avatarName: "heipådef",
  selectedAvatar: "",
  sandDollarCount: 0,
  totalSandDollarCount: 0,
  myCorals: [],
};

const getInitialState = () => {
  const data = localStorage.getItem("data");
  return data ? JSON.parse(data) : initGame;
};

export const Context = React.createContext<any>({});

const ContextProvider = (props: any) => {
  const storedData = JSON.parse(
    localStorage.getItem("data") || initGame.avatarName
  );
  console.log(storedData);

  const [avatarName, setAvatarName] = useState<string>(
    storedData.avatarName || initGame.avatarName
  );

  // || {
  //   defaultValue: initGame,
  // };

  const [selectedAvatar, setSelectedAvatar] = useState<string>(
    storedData.selectedAvatar || initGame.selectedAvatar
  );
  let [sandDollarCount, setSandDollarCount] = useState<number>(
    storedData.sandDollarCount || initGame.sandDollarCount
  );
  let [totalSandDollars, setTotalSandDollars] = useState<number>(
    storedData.totalSandDollars || initGame.totalSandDollarCount
  );
  let [myCorals, setMyCorals] = useState(
    storedData.myCorals || initGame.myCorals
  );
  let [data, setData] = useState(initGame);

  useEffect(() => {
    //const myValue = localStorage.getItem("data");
    if (storedData !== null) {
      //console.log("lagret", storedData);
      setAvatarName(storedData.avatarName);
    }
  }, []);

  useEffect(() => {
    //localStorage.setItem("AVATAR_NAME", JSON.stringify(avatarName));
    localStorage.setItem(
      "data",
      JSON.stringify({
        avatarName,
        selectedAvatar,
        sandDollarCount,
        totalSandDollars,
        myCorals,
      })
    );
  }, [avatarName, myCorals, sandDollarCount, selectedAvatar, totalSandDollars]);

  const addAvatarName = (avatarName: string) => {
    setAvatarName(avatarName);
  };

  //   const addAvatarName = (name:string) => {

  //   }

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
