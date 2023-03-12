import { Dialog, DialogTitle, ListItem } from "@mui/material";
import { logEvent } from "firebase/analytics";
import Image from "next/image";
import React from "react";
import { useContext } from "react";
import { analytics } from "../../firebaseConfig";
import styles from "../../styles/Home.module.css";
import { RoundButton } from "../Button/RoundButton";
import { Context } from "../../context/Context";

type ShopMenuProps = {
  item: any;
  price: number;
  coralLevel: number;
};

export const UnlockedItem = ({ item, price, coralLevel }: ShopMenuProps) => {
  const [open, setOpen] = React.useState(false);
  let {
    myCorals,
    XP,
    setXP,
    sandDollarCount,
    setSandDollarCount,
    setMyCorals,
  } = useContext(Context);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function buySandDollar() {
    setXP(XP + 10);
    setSandDollarCount(sandDollarCount - price);
    setMyCorals([...myCorals, item]);
    handleClose;
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingTop: "5px",
        }}>
        <Image src="/images/sanddollar.svg" alt={item} width={30} height={30} />
        &nbsp;
        <b>{price}</b>
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
          typeGreen={myCorals.includes(item) ? true : false}
          onClick={() => {
            setOpen(true),
              logEvent(analytics, "spend_sand_dollar", {
                value: sandDollarCount - price,
                virtual_currency_name: "sand_dollar",
                item_name: item,
              });
          }}></RoundButton>
        <Dialog open={open} onClose={handleClose}>
          {sandDollarCount >= price ? (
            <>
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
                    borderRadius: "0.5rem",
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
                    borderRadius: "0.5rem",
                  }}
                  onClick={() => {
                    buySandDollar(), handleClose();
                  }}>
                  Kjøp korall
                </button>
              </ListItem>
            </>
          ) : (
            <>
              <DialogTitle style={{ backgroundColor: "#A6E0E3" }}>
                <p
                  style={{ padding: 0, margin: 0 }}
                  className="animate__animated animate__headShake">
                  Ikke nok sand dollar!
                </p>
              </DialogTitle>
              <ListItem
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                  flexDirection: "column",
                  backgroundColor: "#A6E0E3",
                }}>
                Ta en quiz eller dra på dykketur for å tjene sand dollar
                <button
                  style={{
                    border: "none",
                    backgroundColor: "#2DAFB8",
                    padding: "0.5rem 1rem 0.5rem 1rem",
                    color: "#ffffff",
                    cursor: "pointer",
                    margin: "1rem",
                    borderRadius: "0.5rem",
                  }}
                  onClick={() => {
                    handleClose();
                  }}>
                  Lukk
                </button>
              </ListItem>
            </>
          )}
        </Dialog>
      </div>
    </>
  );
};
