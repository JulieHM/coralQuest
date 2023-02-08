import React from "react";
import { BackButton } from "../Button/BackButton";

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
        <BackButton title={"Tilbake"} href={"/game"}></BackButton>
      </div>
    </>
  );
};
