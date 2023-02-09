import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthContextProvider } from "../context/AuthContext";
import React, { useContext, useEffect, useState } from "react";
import { SandDollar } from "../components/SandDollar/SandDollar";
import Avatar from "./avatar";
import { auth, writeUserData } from "../firebaseConfig";

export let context = React.createContext<any>(null);

export default function App({ Component, pageProps }: AppProps) {
  let [avatarName, setAvatarName] = useState("");
  let [sandDollarCount, setSandDollarCount] = useState(0);

  // useEffect(() => {
  //   writeUserData(
  //     avatarName,
  //     auth.currentUser?.displayName,
  //     auth.currentUser?.email,
  //     sandDollarCount
  //   );
  // }, [sandDollarCount, avatarName]);

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
            sandDollarCount,
            setSandDollarCount,
          }}>
          <Component {...pageProps} />
        </context.Provider>
      </AuthContextProvider>
    </>
  );
}
