import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import Header from "../components/Navbar/Header";
import { auth } from "../firebaseConfig";
import { writeUserData } from "../firebaseConfig";
import { context } from "./_app";
import styles from "../styles/Home.module.css";
import "animate.css";
import React from "react";
import { useRouter } from "next/router";

const Avatar = () => {
  //const [avatarName, setAvatarName] = React.useState("");
  const router = useRouter();

  const {
    avatarName,
    selectedAvatar,
    sandDollarCount,
    setAvatarName,
    myCorals,
    setSelectedAvatar,
  } = useContext(context);

  console.log("navn:", avatarName);
  console.log("nr:", selectedAvatar);

  return (
    <div className={styles["backgroundDiv"]}>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
        className={styles["avatarRadioList"]}>
        <label>
          <input
            type="radio"
            name="scuba1"
            value="1"
            onChange={(e) => {
              setSelectedAvatar(e.target.value);
            }}
            className={styles["avatarRadio"]}></input>
          <Image
            src={`/images/scubadivers/scubadiver1.svg`}
            width="200"
            height="200"
            alt="Button"
          />
        </label>
        <label>
          <input
            type="radio"
            name="scuba1"
            value="2"
            onChange={(e) => {
              setSelectedAvatar(e.target.value);
            }}
            className={styles["avatarRadio"]}></input>
          <Image
            src={`/images/scubadivers/scubadiver2.svg`}
            width="200"
            height="200"
            alt="Button"
          />
        </label>
        <label>
          <input
            type="radio"
            name="scuba1"
            value="3"
            onChange={(e) => {
              setSelectedAvatar(e.target.value);
            }}
            className={styles["avatarRadio"]}></input>
          <Image
            src={`/images/scubadivers/scubadiver3.svg`}
            width="200"
            height="200"
            alt="Button"
          />
        </label>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <input
          type="text"
          style={{}}
          placeholder="Skriv ditt avatar navn"
          className={styles["avatarNameInput"]}
          value={avatarName}
          onChange={(e) => {
            setAvatarName(e.target.value);
          }}></input>
        <Link href={"/game"}>
          <button
            className={styles["button"]}
            onClick={() =>
              writeUserData(
                auth.currentUser?.uid,
                avatarName,
                selectedAvatar,
                //auth.currentUser?.displayName,
                auth.currentUser?.email,
                sandDollarCount,
                myCorals
              )
            }>
            Gå videre
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Avatar;
