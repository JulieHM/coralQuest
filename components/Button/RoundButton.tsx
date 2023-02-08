import React from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  title: string;
  href?: any;
  onClick?: any | null;
};

export const RoundButton = ({ title, href, onClick }: ButtonProps) => (
  <>
    <button href={href} onClick={onClick} className={styles["roundButton"]}>
      {title}
    </button>
  </>
);
