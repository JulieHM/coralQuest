import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthContextProvider } from "../context/AuthContext";
import React, { useContext, useState } from "react";
import { SandDollar } from "../components/SandDollar/SandDollar";
import Avatar from "./avatar";

export let context = React.createContext<any>(null);

export default function App({ Component, pageProps }: AppProps) {
  const [avatarName, setAvatarName] = useState("");
  const [sandDollarCount, setSandDollarCount] = useState(0);
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
