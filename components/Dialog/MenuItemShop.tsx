import React, { useContext } from "react";
import styles from "./Dialog.module.css";
import Image from "next/image";
import { RoundButton } from "../Button/RoundButton";
import { context } from "../../pages/_app";
import { logEvent } from "firebase/analytics";
import { analytics } from "../../firebaseConfig";
import { Dialog, DialogTitle, ListItem, List } from "@mui/material";
import Link from "next/link";

type ShopMenuProps = {
  item: any;
  price: number;
};

export const MenuItemShop = ({ item, price }: ShopMenuProps) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const {
    avatarName,
    sandDollarCount,
    setSandDollarCount,
    myCorals,
    setMyCorals,
  } = useContext(context);

  function buySandDollar() {
    setSandDollarCount(sandDollarCount - price);
    setMyCorals([...myCorals, item]);
    console.log(myCorals);
    handleClose;
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
              setOpen(true),
                logEvent(analytics, "spend_sand_dollar", {
                  value: sandDollarCount - price,
                  virtual_currency_name: "sand_dollar",
                  item_name: item,
                });
            }}></RoundButton>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle style={{ backgroundColor: "#A6E0E3" }}>
              Vil du kjøpe denne korallen?
            </DialogTitle>
            <ListItem
              style={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: "#A6E0E3",
              }}>
              <Image
                src={`/images/corals/display/${item}.svg`}
                alt={item}
                width={200}
                height={200}
              />
            </ListItem>
            <ListItem
              style={{
                display: "flex",
                justifyContent: "flex-end",
                backgroundColor: "#A6E0E3",
              }}>
              <button
                style={{
                  border: "none",
                  color: "#2DAFB8",
                  padding: "0.5rem 1rem 0.5rem 1rem",
                  margin: "0.5rem",
                  cursor: "pointer",
                }}
                onClick={() => handleClose()}>
                Avbryt
              </button>
              <button
                style={{
                  border: "none",
                  backgroundColor: "#2DAFB8",
                  padding: "0.5rem 1rem 0.5rem 1rem",
                  color: "#ffffff",
                  cursor: "pointer",
                }}
                onClick={() => {
                  buySandDollar(), handleClose();
                }}>
                Kjøp korall
              </button>
            </ListItem>
          </Dialog>
        </div>
      </div>
    </>
  );
};
