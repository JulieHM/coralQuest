import React, { useContext } from "react";
import styles from "./Dialog.module.css";
import Image from "next/image";
import { RoundButton } from "../Button/RoundButton";
import { logEvent } from "firebase/analytics";
import { analytics } from "../../firebaseConfig";
import { Context } from "../context/Context";

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
  } = useContext(Context);

  function buySandDollar() {
    setSandDollarCount(sandDollarCount - price);
    setMyCorals([...myCorals, item]);
    //console.log(myCorals);
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
            onClick={() => {
              buySandDollar(),
                logEvent(analytics, "spend_sand_dollar", {
                  value: sandDollarCount - price,
                  virtual_currency_name: "sand_dollar",
                  item_name: item,
                });
            }}></RoundButton>
        </div>
      </div>
    </>
  );
};
