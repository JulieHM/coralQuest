import React from "react";
import styles from "./Button.module.css";
import "animate.css";
import Link from "next/link";

type ButtonProps = {
  title: string;
  href?: any;
  onClick?: any | null;
};

export const RoundButton = ({ title, href, onClick }: ButtonProps) => (
  <>
    <button
      onClick={onClick}
      className={`animate__animated animate__pulse ${styles.roundButton}`}>
      {title}
    </button>
  </>
);
