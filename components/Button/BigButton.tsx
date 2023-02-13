import Link from "next/link";
import React from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  title: string;
  href?: any;
  onClick?: any | null;
};

export const BigButton = ({ href, onClick, title }: ButtonProps) => (
  <>
    <Link href={href} onClick={onClick} className={styles["bigButton"]}>
      {title}
    </Link>
  </>
);
