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
import styles from "../Button/Button.module.css";

export const Navbar = () => {
  let { avatarName, selectedAvatar, myCorals, notification, setNotification } =
    useContext(Context);

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

  return (
    <>
      <div
        style={{
          backgroundColor: "#41C2CB",
          display: "flex",
          flexDirection: "column",
          width: "21rem",
          // maxWidth: "23rem",
          // minWidth: "23rem",
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
        <div className={styles["profil"]}>
          <h2 style={{ color: "#ffffff" }}>{avatarName}</h2>
          <Image
            src={"/images/icons8-edit-24.png"}
            alt="edit"
            width={22}
            height={22}
            onClick={() => {
              router.push("/avatar");
            }}
            className={styles["edit"]}></Image>
        </div>

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
            {notification && (
              <p
                style={{
                  backgroundColor: "#EE226D",
                  color: "#ffffff",
                  padding: "0.3rem 0.6rem",
                  fontSize: "small",
                  position: "absolute",
                  top: "22.5rem",
                  left: "13.5rem",
                  borderRadius: "50%",
                }}>
                3
              </p>
            )}

            <MenuButton
              title="Kjøp koraller"
              href={"/game"}
              onClick={() => (
                handleClickOpen(), setNotification(false)
              )}></MenuButton>

            <DialogShop
              onClose={handleClose}
              openDialog={open}
              title="Kjøp koraller"></DialogShop>
            <MenuButton title={"Ta quiz"} href={"/quest/1"}></MenuButton>

            <MenuButton
              title={"Dra på dykketur"}
              href={"/quest/2"}></MenuButton>
            <MenuButton title={"Ledertavle"} href={"/leaderboard"}></MenuButton>
          </>
        </div>
        <p
          className={styles["logOutButton"]}
          onClick={() => {
            logOut();
            //router.push("/");
            router.push("/postTest");
          }}>
          Logg ut
        </p>
      </div>
    </>
  );
};
