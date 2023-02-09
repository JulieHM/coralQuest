import React, { useContext } from "react";
import styles from "./Dialog.module.css";
import Image from "next/image";
import { RoundButton } from "../Button/RoundButton";
import { context } from "../../pages/_app";

type ShopMenuProps = {
  item: any;
  price: number;
};

export const MenuItemShop = ({ item, price }: ShopMenuProps) => {
  const {
    avatarName,
    sandDollarCount,
    setSandDollarCount,
    myCorals,
    setMyCorals,
  } = useContext(context);

  function buySandDollar() {
    setSandDollarCount(sandDollarCount - price);
    setMyCorals[item];
  }

  return (
    <>
      <div className={styles["menuItem"]}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}>
          <Image
            src="/images/sanddollar.svg"
            alt={item}
            width={30}
            height={30}
          />
          &nbsp;<b>{price}</b>
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
          <RoundButton
            href={"/game"}
            title="+"
            onClick={() => buySandDollar()}></RoundButton>
        </div>
      </div>
    </>
  );
};
