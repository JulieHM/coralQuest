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
        alignItems: "center",
        height: "10vh",
      }}>
      <BackButton title={"Tilbake"} href={"/game"}></BackButton>
      <p
        style={{
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: "1",
          fontSize: "20px",
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
