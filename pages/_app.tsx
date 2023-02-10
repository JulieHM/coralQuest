import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthContextProvider } from "../context/AuthContext";
import React, { useState } from "react";

export let context = React.createContext<any>(null);

export default function App({ Component, pageProps }: AppProps) {
  let [avatarName, setAvatarName] = useState("");
  let [sandDollarCount, setSandDollarCount] = useState(0);
  let [myCorals, setMyCorals] = useState<[string]>([""]);

  // useEffect(() => {
  //   writeUserData(
  //     avatarName,
  //     auth.currentUser?.displayName,
  //     auth.currentUser?.email,
  //     sandDollarCount,
  //     myCorals
  //   );
  // }, [sandDollarCount, myCorals]);

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
            myCorals,
            setMyCorals,
          }}>
          <Component {...pageProps} />
        </context.Provider>
      </AuthContextProvider>
    </>
  );
}
