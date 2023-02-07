import React from "react";
import { Dialog, DialogTitle, ListItem, List } from "@mui/material";
import { MenuItemShop } from "../Dialog/MenuItemShop";
import styles from "./Dialog.module.css";
import Image from "next/image";

type DialogProps = {
  title: string;
  openDialog: boolean;
  onClose: any;
};

export const DialogShop = ({ title, openDialog, onClose }: DialogProps) => {
  const corals = [
    "seagrass2",
    "purple",
    "orange",
    "purpleTentacles",
    "Paleyellow",
    "pink",
    "seagrass1",
    "8",
    "9",
  ];
  return (
    <Dialog
      open={openDialog}
      fullWidth
      maxWidth="md"
      onClose={onClose}
      className={styles["dialog"]}>
      <DialogTitle className={styles["dialogContent"]}>{title}</DialogTitle>
      <List className={styles["dialogContent"]}>
        {corals.map((coral) => (
          <ListItem disableGutters key="key">
            <MenuItemShop item={coral} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
};
