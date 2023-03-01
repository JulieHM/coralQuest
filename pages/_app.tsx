import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthContextProvider } from "../context/AuthContext";
import React, { useEffect, useState } from "react";
import { auth } from "../firebaseConfig";
import { get, getDatabase, ref } from "firebase/database";
import { writeUserData } from "../firebase/backend";

export let context = React.createContext<any>(null);

export default function App({ Component, pageProps }: AppProps) {
  let [avatarName, setAvatarName] = useState("");
  let [selectedAvatar, setSelectedAvatar] = useState("");
  let [sandDollarCount, setSandDollarCount] = useState(0);
  let [totalSandDollars, setTotalSandDollars] = useState(0);
  let [myCorals, setMyCorals] = useState<[string]>([""]);

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
            totalSandDollars,
            setTotalSandDollars,
          }}>
          <Component {...pageProps} />
        </context.Provider>
      </AuthContextProvider>
    </>
  );
}
