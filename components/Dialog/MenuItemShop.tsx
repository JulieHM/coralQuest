import React from "react";
import styles from "./Dialog.module.css";
import Image from "next/image";
import { RoundButton } from "../Button/RoundButton";
import { auth, writeUserData } from "../../firebaseConfig";
import { write } from "fs";

type ShopMenuProps = {
  item: any;
};

export const MenuItemShop = ({ item }: ShopMenuProps) => (
  <>
    <div className={styles["menuItem"]}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}>
        <Image src="/images/sanddollar.svg" alt={item} width={30} height={30} />
        &nbsp;<b>24</b>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}>
        <Image
          src={`/images/corals/display/${item}.svg`}
          alt={item}
          width={170}
          height={170}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <RoundButton href={"/"} title="+"></RoundButton>
      </div>
    </div>
  </>
);
