import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthContextProvider } from "../context/AuthContext";
import React, { createContext, useEffect, useState } from "react";
import { writeUserData } from "../firebase/backend";
import { auth } from "../firebaseConfig";
import { get, getDatabase, ref } from "firebase/database";
import ContextProvider from "../components/context/Context";

//export let context = React.createContext<any>({});

export default function App({ Component, pageProps }: AppProps) {
  //let [avatarName, setAvatarName] = useState<string>("");
  // let [selectedAvatar, setSelectedAvatar] = useState<string>("");
  // let [sandDollarCount, setSandDollarCount] = useState<number>(0);
  // let [totalSandDollars, setTotalSandDollars] = useState<number>(0);
  // let [myCorals, setMyCorals] = useState<[string]>([""]);

  const db = getDatabase();
  const dbRef = ref(db, "users/" + auth.currentUser?.uid);

  // useEffect(() => {
  //   const data = window.localStorage.getItem("MY_AVATAR_NAME");
  //   console.log("data", data);
  // }, []);

  // useEffect(() => {
  //   window.localStorage.setItem("MY_AVATAR_NAME", JSON.stringify(avatarName));
  // }, [avatarName]);

  // useEffect(() => {
  //   if (auth.currentUser?.uid != undefined)
  //     get(dbRef).then((snapshot) => {
  //       const data = snapshot.val();

  //       setAvatarName(data.avatarName);
  //       localStorage.setItem("avatarName", avatarName);
  //       setSelectedAvatar(data.selectedAvatar);
  //       localStorage.setItem("selectedAvatar", selectedAvatar);
  //       setSandDollarCount(data.sandDollarCount);
  //       setMyCorals(data.myCorals);
  //       setTotalSandDollars(data.totalSandDollars);

  //       setData(data);
  //       // if (typeof window !== "undefined") {
  //       //   localStorage.setItem("avatarName", avatarName);
  //       //   const avatar = localStorage.getItem("avatarName");
  //       //   console.log("lokalt", avatar);
  //       // }
  //     });
  // }, [auth.currentUser?.uid]);

  // useEffect(() => {
  //   if (auth.currentUser?.uid != null) {
  //     writeUserData(
  //       auth.currentUser?.uid,
  //       avatarName,
  //       selectedAvatar,
  //       auth.currentUser?.email,
  //       sandDollarCount,
  //       myCorals,
  //       totalSandDollars
  //     );
  //     if (typeof window !== "undefined") {
  //     }
  //   }
  // }, [sandDollarCount, myCorals, avatarName, selectedAvatar, totalSandDollars]);

  // if (typeof window !== "undefined") {
  //   localStorage.setItem("avatarName", avatarName);
  //   const avatar = localStorage.getItem("avatarName");
  //   console.log("lokalt", avatar);
  // }

  // Set data in local storage when it changes

  return (
    <>
      <link
        href="https://fonts.cdnfonts.com/css/mulish"
        rel="stylesheet"></link>
      <AuthContextProvider>
        <ContextProvider>
          <Component {...pageProps} />
        </ContextProvider>
      </AuthContextProvider>
    </>
  );
}
