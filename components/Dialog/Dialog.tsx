import React from "react";
import { Dialog, DialogTitle, ListItem, List } from "@mui/material";
import { MenuItemShop } from "../Dialog/MenuItemShop";
import styles from "./Dialog.module.css";
import Image from "next/image";
import { SandDollar } from "../SandDollar/SandDollar";

type DialogProps = {
  title: string;
  openDialog: boolean;
  onClose: any;
};

export const DialogShop = ({ title, openDialog, onClose }: DialogProps) => {
  // const corals = [
  //   "seagrass2",
  //   "purple",
  //   "orange",
  //   "purpleTentacles",
  //   "Paleyellow",
  //   "pink",
  //   "seagrass1",
  //   "8",
  //   "9",
  // ];
  const coralCatalog = [
    { name: "seagrass2", price: 2 },
    { name: "purple", price: 3 },
    { name: "orange", price: 8 },
    { name: "purpleTentacles", price: 4 },
    { name: "Paleyellow", price: 1 },
    { name: "pink", price: 3 },
    { name: "seagrass1", price: 2 },
    { name: "seagrass1", price: 9 },
    { name: "seagrass1", price: 7 },
  ];

  return (
    <Dialog
      open={openDialog}
      fullWidth
      maxWidth="md"
      onClose={onClose}
      className={styles["dialog"]}>
      <DialogTitle className={styles["dialogContent"]}>
        <SandDollar />
      </DialogTitle>
      <List className={styles["dialogContent"]}>
        {coralCatalog.map((coral) => (
          <ListItem disableGutters key="key">
            <MenuItemShop price={coral.price} item={coral.name} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
};
