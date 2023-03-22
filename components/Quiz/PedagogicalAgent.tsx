import * as React from "react";
import Image from "next/image";
import styles from "./Quiz.module.css";
import { NextQuestionButton } from "../Button/NextQuestionButton";
import "animate.css";
import { display } from "@mui/system";

type Props = {
  isCorrect: boolean | undefined;
  info: string;
  onClick?: any | null;
  lastQuestion: boolean;
  dollars: number;
};

const PedagogicalAgent: React.FC<Props> = ({
  isCorrect,
  info,
  onClick,
  lastQuestion,
  dollars,
}) => {
  const dollartext = dollars == 1 ? "Én" : dollars == 2 ? "To" : "Tre";

  return (
    <div className={styles["agentWrapper"]}>
      <div className={`${styles["agentSpeechBubble"]} ${styles["pil"]}`}>
        <p>
          {isCorrect ? "Riktig svar!" : "Det er feil. "} {info}{" "}
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: "5px",
          }}>
          <p>
            {isCorrect
              ? `Gratulerer! ${dollartext} sandollar til deg!`
              : "Bedre lykke neste gang! Svar riktig på neste spørsmål for å tjene flere sanddollar!"}
          </p>

          {isCorrect ? (
            <div
              style={{
                width: "4.5rem",
                height: "2rem",
                borderRadius: "2rem",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignContent: "center",
                background: "#3CB2BA",
                padding: "0.2rem 0.5rem 0.2rem 0.5rem",
                marginLeft: "2rem",
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
                <p style={{ color: "#ffffff" }}>&nbsp;{"+ " + dollars}</p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <Image
        className={`animate__animated animate__jackInTheBox ${styles.crab}`}
        alt="crab"
        src={"/images/crab.svg"}
        width={250}
        height={250}></Image>
      <NextQuestionButton
        title={lastQuestion ? "Fullfør" : "Neste spørmål"}
        onClick={onClick}
      />
    </div>
  );
};

export default PedagogicalAgent;
