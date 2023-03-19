import styles from "../../styles/Home.module.css";
import Image from "next/image";
import "animate.css";
import { ButtonContainer } from "./ButtonContainer";

type DivingIntroProps = {
  title: string;
  intro: string;
  crabType?: string | undefined;
  number: number;
  handleBack: () => void;
  handleNext: () => void;
  handleSaveItem: () => void;
  isLastQuestion: boolean;
};

export const DivingIntro = ({
  intro,
  title,
  crabType,
  number,
  handleBack,
  handleNext,
  handleSaveItem,
  isLastQuestion,
}: DivingIntroProps) => {
  const formattedText = intro.replace(/\*\*(.*?)\*\*/g, `<b>$1</b>`);

  return (
    <div
      style={{
        height: "90vh",
      }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <div
          style={{
            width: "40rem",
          }}
          className={`${styles["agentSpeechBubbleDiving"]} ${styles["pil_venstre"]}`}>
          <p>{title}</p>
          <div dangerouslySetInnerHTML={{ __html: formattedText }} />
        </div>

        <Image
          className={`animate__animated animate__jackInTheBox ${styles.crab}`}
          alt="crab"
          src={`/images/${crabType}.svg`}
          width={250}
          height={250}></Image>
      </div>

      <ButtonContainer
        number={number}
        handleBack={handleBack}
        handleNext={handleNext}
        handleSaveItem={handleSaveItem}
        isLastQuestion={isLastQuestion}
      />
    </div>
  );
};
