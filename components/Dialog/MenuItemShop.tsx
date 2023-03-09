import React, { useContext } from "react";
import styles from "./Dialog.module.css";
import Image from "next/image";
import { RoundButton } from "../Button/RoundButton";
import { logEvent } from "firebase/analytics";
import { analytics } from "../../firebaseConfig";
import { Dialog, DialogTitle, ListItem } from "@mui/material";
import { Context } from "../../context/Context";
import { UnlockedItem } from "./UnlockedItem";
import { LockedItem } from "./LockedItem";

type ShopMenuProps = {
  item: any;
  price: number;
  coralLevel: number;
};

export const MenuItemShop = ({ item, price, coralLevel }: ShopMenuProps) => {
  let { level } = useContext(Context);

  return (
    <>
      <div
        className={
          coralLevel > level ? styles["menuItemLocked"] : styles["menuItem"]
        }>
        {coralLevel > level ? (
          <>
            <LockedItem></LockedItem>
            <p style={{ color: "#ffffff" }}>
              Lås opp i <b style={{ color: "#BEFF61" }}>level {coralLevel}</b>
            </p>
          </>
        ) : (
          <UnlockedItem
            item={item}
            price={price}
            coralLevel={coralLevel}></UnlockedItem>
        )}
      </div>
    </>
  );
};
