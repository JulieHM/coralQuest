import Link from "next/link";
import Image from "next/image";
import React from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  title: string;
  href?: any;
  onClick?: any | null;
};

export const BackButton = ({ title, href, onClick }: ButtonProps) => (
  <>
    <Link href={href} onClick={onClick} className={styles["backButton"]}>
      <Image
        src={"/images/icons8-left-arrow-100.png"}
        alt="pil"
        width={25}
        height={25}></Image>
      {title}
    </Link>
  </>
);
