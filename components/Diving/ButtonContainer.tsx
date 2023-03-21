import React from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import buttonStyles from "../../components/Button/Button.module.css";

interface ButtonContainerProps {
  number: number;
  handleBack: () => void;
  handleNext: () => void;
  handleSaveItem: () => void;
  isLastQuestion: boolean;
}

export const ButtonContainer: React.FC<ButtonContainerProps> = ({
  number,
  handleBack,
  handleNext,
  handleSaveItem,
  isLastQuestion,
}) => {
  return (
    <div className={styles["buttonContainer"]}>
      {number == 0 ? (
        ""
      ) : (
        <button
          className={buttonStyles["nextQuestionButton"]}
          onClick={handleBack}>
          Forrige
        </button>
      )}

      {isLastQuestion ? (
        <button
          className={buttonStyles["nextDivingButton"]}
          onClick={handleSaveItem}>
          <Link className="completeLink" href={"/game"}>
            Fullfør dykketur
          </Link>
        </button>
      ) : (
        <button
          className={buttonStyles["nextDivingButton"]}
          onClick={handleNext}>
          {number == 0 ? "Start dykketur" : "Neste"}
        </button>
      )}
    </div>
  );
};
