import Link from "next/link";
import Image from "next/image";
import { useContext, useEffect } from "react";
import Header from "../components/Navbar/Header";
import { auth } from "../firebaseConfig";
//import { context } from "./_app";
import styles from "../styles/Home.module.css";
import "animate.css";
import React from "react";
import { ref, getDatabase, get } from "firebase/database";
import { useRouter } from "next/router";
import { Context } from "../context/Context";

const Avatar = () => {
  const [inputValue, setInputValue] = React.useState(true);
  const router = useRouter();
  let { avatarName, setAvatarName, selectedAvatar, setSelectedAvatar } =
    useContext(Context);

  const db = getDatabase();
  const dbRef = ref(db, "users/" + auth.currentUser?.uid);
  const scubadivers = ["scubadiver0", "scubadiver1", "scubadiver2"];
  const [className, setClassName] = React.useState("");
  const [originalAvatar, setOriginalAvatar] = React.useState(1);

  useEffect(() => {
    setOriginalAvatar(selectedAvatar);
  }, []);

  window.addEventListener("beforeunload", function (e) {
    var inputField = document.getElementById("nameinput");
    if (avatarName != "") {
      //e.preventDefault();
      //e.returnValue = "";
      setInputValue(false);
    } else {
      setInputValue(true);
    }
  });

  const handleSetName = () => {
    if (avatarName == "") {
      setInputValue(false);
    } else {
      setInputValue(true);
    }
  };

  return (
    <form className={styles["backgroundDiv"]}>
      <Header />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <div className={styles["avatarRadioList"]}>
          <h1
            style={{
              color: "#0B5D63",
            }}>
            Velg din avatar:
          </h1>
          {scubadivers.map((scubadiver: string, index: number) => (
            <label key={index}>
              <input
                type="radio"
                name="scuba"
                value={index}
                onChange={(e) => {
                  setSelectedAvatar(e.target.value);
                }}
                className={`${styles.avatarRadio}`}
                style={{
                  margin: "0rem",
                }}></input>
              <Image
                src={`/images/scubadivers/${scubadiver}.svg`}
                width="200"
                className={`${styles.avatarImg} ${
                  selectedAvatar >= 0 && "animate__animated animate__pulse"
                }`}
                style={{
                  border:
                    selectedAvatar == index ? "20px solid #fbd039" : "none",
                  margin: "0rem",
                  borderRadius: "50%",
                  filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                }}
                alt={"scubadiver avatar"}
                height="200"
              />
            </label>
          ))}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}>
        {inputValue == false && (
          <p style={{ margin: 0, color: "darkred" }}>Skriv et avatar navn*</p>
        )}
        <input
          type="text"
          id="nameinput"
          style={{}}
          placeholder="Skriv ditt avatar navn"
          className={styles["avatarNameInput"]}
          value={avatarName}
          required
          onChange={(e) => {
            setAvatarName(e.target.value), setInputValue(true);
          }}></input>

        <Link href={avatarName != "" ? "/game" : ""}>
          <button
            type="submit"
            className={styles["button"]}
            onClick={handleSetName}>
            Gå videre
          </button>
        </Link>
      </div>
    </form>
  );
};

export default Avatar;
