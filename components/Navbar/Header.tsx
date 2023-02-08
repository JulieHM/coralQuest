import React from "react";
import { MenuButton } from "../Button/MenuButton";

export const Header = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#41C2CB",
          display: "flex",
          width: "100%",
          height: "13vh",
        }}>
        <MenuButton title={"Tilbake"} href={"/game"}></MenuButton>
      </div>
    </>
  );
};
