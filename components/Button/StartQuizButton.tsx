import React from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  title: string;
  onClick?: any | null;
  style?: any;
};

export const StartQuizButton = ({ onClick, title, style }: ButtonProps) => (
  <>
    <button
      style={style}
      onClick={onClick}
      className={styles["startQuizButton"]}>
      {title}
    </button>
  </>
);
