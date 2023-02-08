import React from "react";
import styles from "./MenuButton.module.css";

type ButtonProps = {
  title: string;
  href?: any;
  onClick?: any | null;
};

export const StartQuizButton = ({ title, href, onClick }: ButtonProps) => (
  <>
    <button ref={href} onClick={onClick} className={styles["startButton"]}>
      {title}
    </button>
  </>
);
