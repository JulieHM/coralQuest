import * as React from "react";
import styles from "./QuestionCard.module.css";

type Props = {
  isCorrect: boolean | undefined;
  info: string;
  onClick?: any | null;
};

const PedagogicalAgent: React.FC<Props> = ({ isCorrect, info, onClick }) => {
  return (
    <div className={styles.agentWrapper}>
      <p>
        {isCorrect ? "Riktig" : "Feil"} {info}
      </p>
      <button className="next" onClick={onClick}>
        Next Question
      </button>
    </div>
  );
};

export default PedagogicalAgent;
