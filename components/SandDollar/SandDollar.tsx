import React from "react";
import Image from "next/image";

export const SandDollar = ({}) => (
  <>
    <div
      style={{
        width: "fit-content",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignContent: "center",
        background: "#3CB2BA",
      }}>
      <Image
        src="/images/sanddollar.svg"
        width={30}
        height={30}
        alt="sand dollar"
      />
      &nbsp;x h
    </div>
  </>
);
