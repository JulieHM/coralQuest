import * as React from "react";
import Image from "next/image";
import styles from "./Quiz.module.css";

type Props = {
  isCorrect: boolean | undefined;
  info: string;
  onClick?: any | null;
};

const PedagogicalAgent: React.FC<Props> = ({ isCorrect, info, onClick }) => {
  return (
    <div className={styles.agentWrapper}>
      <div className={styles.agentSpeechBubble}>
        <p>
          {isCorrect ? "Riktig svar!" : "Det er feil. "} {info}
        </p>
      </div>
      <Image
        src="/images/crab.svg"
        width={250}
        height={250}
        alt="sand dollar"></Image>
      <button className="next" onClick={onClick}>
        Next Question
      </button>
    </div>
  );
};

export default PedagogicalAgent;
