import React, { useContext, useEffect, useState } from "react";
import { MenuButton } from "../Button/MenuButton";
import Image from "next/image";
import { analytics } from "../../firebaseConfig";
import { DialogShop } from "../Dialog/Dialog";
import { logEvent } from "firebase/analytics";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/router";
import { auth } from "../../firebaseConfig";
import { get, getDatabase, ref } from "firebase/database";
import { Context } from "../context/Context";

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
    XP,
    setXP,
  } = useContext(Context);

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
          width="51"
          height="48"
          viewBox="0 0 51 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M22.6511 2.63308C23.5574 -0.113417 27.4426 -0.113416 28.3489 2.63309L32.117 14.0516C32.5226 15.281 33.6712 16.1115 34.9658 16.1115H47.0594C49.9768 16.1115 51.1777 19.854 48.8049 21.5514L39.1014 28.4929C38.0336 29.2568 37.5865 30.6263 37.998 31.873L41.7232 43.1617C42.6326 45.9175 39.489 48.2302 37.1288 46.5418L27.2455 39.4716C26.2016 38.7248 24.7984 38.7248 23.7545 39.4716L13.8712 46.5418C11.511 48.2302 8.36741 45.9175 9.27681 43.1617L13.002 31.873C13.4135 30.6263 12.9664 29.2568 11.8986 28.4929L2.19512 21.5514C-0.177676 19.854 1.02314 16.1115 3.94057 16.1115H16.0342C17.3288 16.1115 18.4773 15.281 18.883 14.0516L22.6511 2.63308Z"
            fill="url(#paint0_radial_362_5843)"
          />
          {/* Legg inn level, kan trekkes ut i egen komponent */}
          <text x="20" y="30" fill="#73B218">
            1
          </text>
          <defs>
            <radialGradient
              id="paint0_radial_362_5843"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(25.5 26) rotate(90) scale(32 32.5)">
              <stop stop-color="#EFFFD8" />
              <stop offset="1" stop-color="#82DD00" />
            </radialGradient>
          </defs>
        </svg>
        {/* Legg inn progressbar her, og trekk ut i egen komponent  */}

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
          {coralCount + 1} / 9 koralltyper
        </p>

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
