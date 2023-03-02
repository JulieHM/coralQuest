import { useContext } from "react";
import Image from "next/image";
import { Context } from "../context/Context";

export const SandDollar = ({}) => {
  const { avatarName, sandDollarCount, setSandDollarCount } =
    useContext(Context);

  return (
    <>
      <div>
        <div
          style={{
            width: "5rem",
            height: "2rem",
            borderRadius: "2rem",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
            background: "#3CB2BA",
            padding: "0.2rem 0.5rem 0.2rem 0.5rem",
          }}>
          <Image
            src="/images/sanddollar.svg"
            width={30}
            height={30}
            alt="sand dollar"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}>
            <p style={{ color: "#ffffff" }}>&nbsp;{sandDollarCount}</p>
          </div>
        </div>
      </div>
    </>
  );
};
