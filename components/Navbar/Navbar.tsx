import React, { useContext, useEffect, useState } from "react";
import { MenuButton } from "../Button/MenuButton";
import Image from "next/image";
import { analytics } from "../../firebaseConfig";
import { DialogShop } from "../Dialog/Dialog";
import { logEvent } from "firebase/analytics";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/router";
import { auth } from "../../firebaseConfig";
import { getDatabase, ref } from "firebase/database";
import { Context } from "../../context/Context";
import { Progressbar } from "./../Progressbar";

export const Navbar = () => {
  let {
    avatarName,
    selectedAvatar,
    sandDollarCount,
    setSandDollarCount,
    myCorals,
    level,
    XP,
    setXP,
  } = useContext(Context);

  const db = getDatabase();
  const dbRef = ref(db, "users/" + auth.currentUser?.uid);

  const [open, setOpen] = React.useState(false);
  const [visible, setVisible] = React.useState(false);

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
  //let progressBarLength = coralCount * 16;

  useEffect(() => {
    setVisible(true);
  }, [level]);

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

        <Progressbar></Progressbar>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            alignItems: "center",
          }}>
          <>
            <MenuButton title={"Profil"} href={"/avatar"}></MenuButton>
            {visible && (
              <p
                style={{
                  backgroundColor: "#EE378D",
                  color: "#ffffff",
                  padding: "0.3rem",
                  fontSize: "small",
                  position: "absolute",
                  top: "26.5rem",
                  right: "84rem",
                  borderRadius: "50%",
                }}>
                ny
              </p>
            )}
            <MenuButton
              title="Kjøp koraller"
              href={"/game"}
              onClick={() => (
                handleClickOpen(), setVisible(false)
              )}></MenuButton>

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
                  setXP(XP + 1),
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
          </>
        </div>
      </div>
    </>
  );
};
