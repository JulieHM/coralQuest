import React from "react";
import { Dialog, DialogTitle, ListItem, List, Button } from "@mui/material";
import { MenuItemShop } from "../Dialog/MenuItemShop";
import styles from "./Dialog.module.css";
import { SandDollar } from "../SandDollar/SandDollar";

type DialogProps = {
  title: string;
  openDialog: boolean;
  onClose: any;
};

export const DialogShop = ({ title, openDialog, onClose }: DialogProps) => {
  const coralCatalog = [
    { name: "seagrass2", price: 2, level: 1 },
    { name: "purple", price: 3, level: 1 },
    { name: "orange", price: 8, level: 1 },
    { name: "purpleTentacles", price: 4, level: 2 },
    { name: "Paleyellow", price: 1, level: 2 },
    { name: "pink", price: 3, level: 2 },
    { name: "blue", price: 2, level: 3 },
    { name: "seagrass1", price: 9, level: 3 },
    { name: "seagrass1", price: 7, level: 3 },
  ];

  return (
    <Dialog
      open={openDialog}
      fullWidth
      maxWidth="md"
      onClose={onClose}
      className={styles["dialog"]}>
      <DialogTitle className={(styles.dialogContent, styles.dialogHeader)}>
        <SandDollar />
        <Button
          style={{
            fontSize: "large",
            margin: "0rem",
            color: "#ffffff",
            backgroundColor: "#2DAFB8",
            padding: "0rem",
          }}
          onClick={onClose}>
          <p style={{ margin: "0rem", padding: "0rem" }}>x</p>
        </Button>
      </DialogTitle>

      <div>
        <List className={styles["dialogContent"]}>
          {coralCatalog.map((coral) => (
            <ListItem disableGutters key="key">
              <MenuItemShop
                price={coral.price}
                item={coral.name}
                coralLevel={coral.level}
              />
            </ListItem>
          ))}
        </List>
      </div>
    </Dialog>
  );
};
