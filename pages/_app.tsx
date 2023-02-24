import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthContextProvider } from "../context/AuthContext";
import React, { useEffect, useState } from "react";
import { auth } from "../firebaseConfig";
import { get, getDatabase, ref } from "firebase/database";

export let context = React.createContext<any>(null);

export default function App({ Component, pageProps }: AppProps) {
  let [avatarName, setAvatarName] = useState("");
  let [selectedAvatar, setSelectedAvatar] = useState("");
  let [sandDollarCount, setSandDollarCount] = useState(0);
  let [myCorals, setMyCorals] = useState<[string]>([""]);

  const db = getDatabase();
  const dbRef = ref(db, "users/" + auth.currentUser?.uid);

  useEffect(() => {
    if (auth.currentUser?.uid != null) {
      get(dbRef).then((snapshot) => {
        const data = snapshot.val();

        setAvatarName(data.avatarName);
        setSelectedAvatar(data.selectedAvatar);
        setSandDollarCount(data.sandDollarCount);
        setMyCorals(data.myCorals);
      });
    }
  }, [auth.currentUser?.uid]);

  return (
    <>
      <link
        href="https://fonts.cdnfonts.com/css/mulish"
        rel="stylesheet"></link>
      <AuthContextProvider>
        <context.Provider
          value={{
            avatarName,
            setAvatarName,
            selectedAvatar,
            setSelectedAvatar,
            sandDollarCount,
            setSandDollarCount,
            myCorals,
            setMyCorals,
          }}>
          <Component {...pageProps} />
        </context.Provider>
      </AuthContextProvider>
    </>
  );
}
