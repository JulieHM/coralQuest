import * as React from "react";
import Image from "next/image";
import styles from "./Leaderboard.module.css";
import { User } from "../../pages/leaderboard";

interface UserCardProps {
  user: User;
  index: number;
  currentUser?: string;
}

const UserCard = ({ user, index, currentUser }: UserCardProps) => {
  const isCurrentUser = user.uid === currentUser;

  const place = index + 1;
  console.log(place);

  return (
    <div
      className={`${
        isCurrentUser ? styles["active-user-row"] : styles["user-row"]
      }`}>
      <div
        className={`${
          place == 1
            ? styles["first"]
            : place == 2
            ? styles["second"]
            : place == 3
            ? styles["third"]
            : place > 3
            ? styles["top"]
            : ""
        }`}>
        <p
          className={`${
            place == 1 || place == 2 || place == 3
              ? styles["podium"]
              : place > 3
              ? styles["not"]
              : ""
          }`}>
          {place}
        </p>
      </div>
      <div className={styles["user-avatar-name"]}>
        <Image
          width={50}
          height={50}
          className={styles["user-avatar"]}
          src={`/images/scubadivers/scubadiver${user.selectedAvatar}.svg`}
          alt="Avatar"
        />
        <p>{user.avatarName}</p>
      </div>
      <div className={styles["user-xp"]}>
        <p>XP: {user.XP}</p>
      </div>
    </div>
  );
};
export default UserCard;
