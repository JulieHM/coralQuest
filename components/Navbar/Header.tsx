import React from "react";
import { BackButton } from "../Button/BackButton";
import { SandDollar } from "../SandDollar/SandDollar";

type Props = {
  questionNum?: number;
  totalQuestions?: number;
  gameStarted?: boolean;
};

const Header: React.FC<Props> = ({
  questionNum,
  totalQuestions,
  gameStarted,
}) => {
  return (
    <div
      style={{
        backgroundColor: "#41C2CB",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: "10vh",
        width: "100%",
      }}>
      <BackButton title={"Tilbake"} href={"/game"}></BackButton>
      <p
        style={{
          color: "white",
          fontSize: "1.2rem",
          marginLeft: "-10px",
        }}>
        {gameStarted ? "Spørsmål " + questionNum + " av " + totalQuestions : ""}
      </p>
      <div
        style={{
          marginRight: "15px",
        }}>
        <SandDollar></SandDollar>
      </div>
    </div>
  );
};

export default Header;
