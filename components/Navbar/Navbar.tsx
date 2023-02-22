import React, { useContext, useEffect, useState } from "react";
import { MenuButton } from "../Button/MenuButton";
import Image from "next/image";
import { analytics } from "../../firebaseConfig";
import { context } from "../../pages/_app";
import { DialogShop } from "../Dialog/Dialog";
import { logEvent } from "firebase/analytics";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/router";
import { auth } from "../../firebaseConfig";
import { writeUserData } from "../../firebase/backend";
import { get, getDatabase, ref } from "firebase/database";

export const Navbar = () => {
  let {
    avatarName,
    selectedAvatar,
    sandDollarCount,
    setSandDollarCount,
    myCorals,
    setAvatarName,
    setSelectedAvatar,
    setMyCorals,
  } = useContext(context);

  const db = getDatabase();
  const dbRef = ref(db, "users/" + auth.currentUser?.uid);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
  };

  const { logOut } = useAuth();
  const router = useRouter();

  function countUnique(iterable: any) {
    return new Set(iterable).size;
  }

  let coralCount = countUnique(myCorals) - 1;
  let progressBarLength = coralCount * 16;

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

  useEffect(() => {
    if (auth.currentUser?.uid != null) {
      writeUserData(
        auth.currentUser?.uid,
        avatarName,
        selectedAvatar,
        auth.currentUser?.email,
        sandDollarCount,
        myCorals
      );
    }
  }, [sandDollarCount, myCorals]);

  console.log(auth.currentUser?.uid);

  return (
    <>
      <div
        style={{
          backgroundColor: "#41C2CB",
          display: "flex",
          flexDirection: "column",
          width: "20vw",
          maxWidth: "20vw",
          minWidth: "20vw",
          height: "100vh",
          alignItems: "center",
        }}>
        <Image
          src={`/images/scubadivers/scubadiver${selectedAvatar}.svg`}
          alt="Avatar"
          width={200}
          height={200}
          style={{ marginTop: "3rem" }}
        />
        <h2 style={{ color: "#ffffff" }}>{avatarName}</h2>
        <svg
          width="148"
          height="11"
          viewBox="0 0 148 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect width="144" height="11" rx="5.5" fill="#DFF9FB" />
          <rect
            width={progressBarLength}
            height="11"
            rx="5.5"
            fill="#FBD039"
          />{" "}
        </svg>
        <p style={{ color: "#ffffff", marginTop: "0.5rem" }}>
          {coralCount} / 9 koralltyper
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",

            width: "100%",
            alignItems: "center",
          }}>
          <MenuButton title={"Profil"} href={"/avatar"}></MenuButton>
          <MenuButton
            title="Kjøp koraller"
            href={"/game"}
            onClick={handleClickOpen}></MenuButton>

          <DialogShop
            onClose={handleClose}
            openDialog={open}
            title="Kjøp koraller"></DialogShop>
          <MenuButton title={"Quiz"} href={"/quest/1"}></MenuButton>

          <MenuButton title={"Dykketur"} href={"/quest/2"}></MenuButton>
          <MenuButton title={"Ledertavle"} href={"/leaderboard"}></MenuButton>

          <button
            onClick={() => {
              setSandDollarCount(sandDollarCount + 1),
                logEvent(analytics, "earn_sand_dollar", {
                  virtual_currency_name: "sand_dollar",
                  value: sandDollarCount,
                });
            }}>
            Velg
          </button>
          <button
            onClick={() => {
              logOut();
              router.push("/");
            }}>
            Logg ut
          </button>
        </div>
      </div>
    </>
  );
};

/* function writeUserData(
  uid: string | undefined,
  avatarName: any,
  selectedAvatar: any,
  email: string | null | undefined,
  sandDollarCount: any,
  myCorals: any
) {
  throw new Error("Function not implemented.");
} */
