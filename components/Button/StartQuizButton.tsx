import React from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  title: string;
  onClick?: any | null;
};

export const StartQuizButton = ({ onClick, title }: ButtonProps) => (
  <>
    <button onClick={onClick} className={styles["bigButton"]}>
      {title}
    </button>
  </>
);
