import React from "react";
import styles from "./Dialog.module.css";
import Image from "next/image";

type ShopMenuProps = {
  item: any;
};

export const MenuItemShop = ({ item }: ShopMenuProps) => (
  <>
    <div className={styles["menuItem"]}>
      <p>{item}</p> {/** legge inn svg tag her, hvert item er en svg url */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Image
          src={`/images/corals/display/${item}.svg`}
          alt={item}
          width={150}
          height={150}
        />
      </div>
    </div>
  </>
);
