import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import Header from "../components/Navbar/Header";
import { auth } from "../firebaseConfig";
import { writeUserData } from "../firebaseConfig";
import { context } from "./_app";
import styles from "../styles/Home.module.css";

const Avatar = () => {
  //const [avatarName, setAvatarName] = React.useState("");
  const {
    avatarName,
    selectedAvatar,
    sandDollarCount,
    setAvatarName,
    myCorals,
    setSelectedAvatar,
  } = useContext(context);

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
          value={avatarName}
          onChange={(e) => {
            setAvatarName(e.target.value);
          }}></input>
        <Link href={"/game"}>
          <button
            onClick={() =>
              writeUserData(
                avatarName,
                selectedAvatar,
                auth.currentUser?.displayName,
                auth.currentUser?.email,
                sandDollarCount,
                myCorals
              )
            }>
            Velg
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Avatar;
