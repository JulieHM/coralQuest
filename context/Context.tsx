import { getDatabase, onValue, ref } from "firebase/database";
import React, { useEffect } from "react";
import { useState } from "react";
import { auth, writeUserData, db } from "../firebaseConfig";

const initState = {
  avatarName: "",
  selectedAvatar: "",
  sandDollarCount: 0,
  myCorals: [],
  totalSandDollars: 0,
};

export const Context = React.createContext<any>({});

const ContextProvider = (props: any) => {
  const local = localStorage.getItem("data");
  const storedData = local == null ? initState : JSON.parse(local);

  const [avatarName, setAvatarName] = useState<string>(
    storedData.avatarName || initState.avatarName
  );

  const [selectedAvatar, setSelectedAvatar] = useState<string>(
    storedData.selectedAvatar || initState.selectedAvatar
  );
  const [sandDollarCount, setSandDollarCount] = useState<number>(
    storedData.sandDollarCount || initState.sandDollarCount
  );
  const [totalSandDollars, setTotalSandDollars] = useState<number>(
    storedData.totalSandDollars || initState.totalSandDollars
  );
  const [myCorals, setMyCorals] = useState(
    storedData.myCorals || initState.myCorals
  );

  const [state, setState] = useState(initState);

  /*   
  console.log("context: ", avatarName);
  console.log("localstorage: ", storedData.avatarName); */

  //setter local storage til det staten er, hver gang staten endres
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

  //skriver til databasen fra staten når state oppdaterer seg
  useEffect(() => {
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
  }, [avatarName, myCorals, sandDollarCount, selectedAvatar, totalSandDollars]);

  const userID = auth.currentUser?.uid;

  //TODO: finne en måte å sette context fra databasen om det finnes noe der, hvis ikke, sette til initGame
  console.log("locals", storedData.avatarName);

  /*  useEffect(() => {
    const dbRef = ref(getDatabase(), "users/" + userID); // replace userID with the user ID of the current user
    const unsubscribe = onValue(dbRef, (snapshot) => {
      const data = snapshot.val(); // get the data from the snapshot

      if (storedData.avatarName == initState.avatarName) {
        setAvatarName(data.avatarName);
      }
      setAvatarName(storedData.avatarName);
      console.log("a", avatarName);
    }); */

  /*  
      setAvatarName(storedData.avatarName);
      if ((storedData.selectedAvatar = "")) {
        setSelectedAvatar(data.selectedAvatar);
      }
      setSelectedAvatar(storedData.selectedAvatar);
      if ((storedData.sandDollarCount = 0)) {
        setSandDollarCount(data.sandDollarCount);
      }
      setSandDollarCount(storedData.sandDollarCount);
      if ((storedData.myCorals = [])) {
        setMyCorals(data.myCorals);
      }
      setMyCorals(storedData.myCorals);
      if ((storedData.totalSandDollars = 0)) {
        setTotalSandDollars(data.totalSandDollars);
      }
      setTotalSandDollars(storedData.totalSandDollars);
    });
  }, []);
 */
  useEffect(() => {
    const dbRef = ref(getDatabase(), "users/" + userID); // replace userID with the user ID of the current user
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val(); // get the data from the snapshot

      console.log("data:", data);

      if (storedData.avatarName == initState.avatarName) {
        setAvatarName(data.avatarName);
      }
      setAvatarName(storedData.avatarName);
      console.log("a", avatarName);
    });

    //sjekke om auth har endret seg:
    //ja: get fra database og sett state fra det,
    //else:

    setAvatarName(storedData.avatarName);
    setSelectedAvatar(storedData.selectedAvatar);
    setSandDollarCount(storedData.sandDollarCount);
    setMyCorals(storedData.myCorals);
    setTotalSandDollars(storedData.totalSandDollars);
  }, []);

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
        state,
        setState,
      }}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
