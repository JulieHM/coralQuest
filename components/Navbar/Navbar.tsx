import React, { useContext, useEffect } from "react";
import { MenuButton } from "../Button/MenuButton";
import Image from "next/image";
import { analytics, auth, writeUserData } from "../../firebaseConfig";
import { context } from "../../pages/_app";
import { DialogShop } from "../Dialog/Dialog";
import { logEvent } from "firebase/analytics";

export const Navbar = () => {
  let {
    avatarName,
    selectedAvatar,
    sandDollarCount,
    setSandDollarCount,
    myCorals,
  } = useContext(context);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
  };

  function countUnique(iterable: any) {
    return new Set(iterable).size;
  }

  let coralCount = countUnique(myCorals) - 1;
  let progressBarLength = coralCount * 16;

  useEffect(() => {
    writeUserData(
      auth.currentUser?.uid,
      avatarName,
      selectedAvatar,
      auth.currentUser?.email,
      sandDollarCount,
      myCorals
    );
  }, [sandDollarCount, myCorals, avatarName, selectedAvatar]);
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
            width: "100%",
            alignItems: "flex-start",
          }}>
          <MenuButton
            title="Kjøp koraller"
            href={"/game"}
            onClick={handleClickOpen}></MenuButton>

          <DialogShop
            onClose={handleClose}
            openDialog={open}
            title="Kjøp koraller"></DialogShop>
          <MenuButton title={"Quiz"} href={"/quest/1"}></MenuButton>
          <MenuButton title={"Profil"} href={"/avatar"}></MenuButton>
          <MenuButton title={"Dykketur"} href={"/quest/2"}></MenuButton>
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
        </div>
      </div>
    </>
  );
};
