import * as React from "react";
import Image from "next/image";
import styles from "./Quiz.module.css";
import { StartQuizButton } from "../Button/StartQuizButton";
import { SandDollar } from "../SandDollar/SandDollar";

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
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p>
            {isCorrect
              ? "Gratulerer! To sandollar til deg!"
              : "Bedre lykke neste gang! Svar riktig på neste spørsmål for å tjene flere sanddollar!"}
          </p>
          <span
            style={{
              backgroundColor: "#41C2CB",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "row",
            }}>
            {isCorrect ? (
              <>
                <Image
                  src="/images/sanddollar.svg"
                  width={30}
                  height={30}
                  alt="crab the crab"></Image>
                <p color="#FFB800">+ 2</p>
              </>
            ) : (
              ""
            )}
          </span>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <Image
          src="/images/crab.svg"
          width={250}
          height={250}
          alt="crab the crab"
          style={{ paddingRight: "40%", marginTop: "-20px" }}></Image>
        <StartQuizButton
          title={lastQuestion ? "Fullfør" : "Neste spørmål"}
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default PedagogicalAgent;
