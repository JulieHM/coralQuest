import Link from "next/link";
import React from "react";
import { Url } from "url";
import styles from "./MenuButton.module.css";

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
