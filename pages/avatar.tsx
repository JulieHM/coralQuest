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
  const handleInputChange = (event: any) => {
    setAvatarName(event.target.value);
  };
  return (
    <>
      <input
        type="text"
        placeholder="Avatar navn"
        value={avatarName}
        onChange={handleInputChange}></input>
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
    </>
  );
};

export default Avatar;
