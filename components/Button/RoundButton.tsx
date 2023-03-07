import React from "react";
import styles from "./Button.module.css";
import "animate.css";
import Link from "next/link";

type ButtonProps = {
  href?: any;
  onClick?: any | null;
  typeGreen?: boolean;
};

export const RoundButton = ({ href, onClick, typeGreen }: ButtonProps) => (
  <>
    {typeGreen ? (
      <button className={styles.roundButtonGreen}>
        <span>&#10003;</span>
      </button>
    ) : (
      <button
        onClick={onClick}
        className={`animate__animated animate__pulse ${styles.roundButton}`}>
        +
      </button>
    )}
  </>
);
