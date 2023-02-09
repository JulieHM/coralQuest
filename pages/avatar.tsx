import { write } from "fs";
import Link from "next/link";
import { useContext } from "react";
import { Url } from "url";
import { auth } from "../firebaseConfig";
import { writeUserData } from "../firebaseConfig";
import styles from "./MenuButton.module.css";
import { context } from "./_app";

const Avatar = () => {
  //const [avatarName, setAvatarName] = React.useState("");
  const { avatarName, sandDollarCount, setAvatarName } = useContext(context);
  return (
    <>
      <input
        type="text"
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
              auth.currentUser?.displayName,
              auth.currentUser?.email,
              sandDollarCount
            )
          }>
          Velg
        </button>
      </Link>
    </>
  );
};

export default Avatar;
