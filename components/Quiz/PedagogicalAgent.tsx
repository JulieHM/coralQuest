import * as React from "react";
import Image from "next/image";
import styles from "./Quiz.module.css";
import { NextQuestionButton } from "../Button/NextQuestionButton";

type Props = {
  isCorrect: boolean | undefined;
  info: string;
  onClick?: any | null;
  lastQuestion: boolean;
};

const PedagogicalAgent: React.FC<Props> = ({
  isCorrect,
  info,
  onClick,
  lastQuestion,
}) => {
  return (
    <div className={styles.agentWrapper}>
      <div className={styles.agentSpeechBubble}>
        <p>
          {isCorrect ? "Riktig svar!" : "Det er feil. "} {info}{" "}
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}>
          <p>
            {isCorrect
              ? "Gratulerer! To sandollar til deg!"
              : "Bedre lykke neste gang! Svar riktig på neste spørsmål for å tjene flere sanddollar!"}
          </p>

          {isCorrect ? (
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
                <p style={{ color: "#ffffff" }}>&nbsp;{"+2"}</p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      <NextQuestionButton
        title={lastQuestion ? "Fullfør" : "Neste spørmål"}
        onClick={onClick}
      />
    </div>
  );
};

export default PedagogicalAgent;
