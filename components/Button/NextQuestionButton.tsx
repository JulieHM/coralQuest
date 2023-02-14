import React from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  title: string;
  onClick?: any | null;
};

export const NextQuestionButton = ({ onClick, title }: ButtonProps) => (
  <>
    <button onClick={onClick} className={styles["nextQuestionButton"]}>
      {title}
    </button>
  </>
);
