import React from "react";
import { BackButton } from "../Button/BackButton";

type Props = {
  questionNum: number;
  totalQuestions: number;
  gameStarted: boolean;
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
        width: "100%",
        height: "13vh",
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
        {gameStarted ? "Spørsmål " + questionNum + "av " + totalQuestions : ""}
      </p>
    </div>
  );
};

export default Header;
