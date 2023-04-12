import React from "react";
import { useContext } from "react";
import { Context } from "../../context/Context";
import styles from "../../styles/Home.module.css";
import { ButtonContainer } from "./ButtonContainer";

type MapProps = {
  title: string;
  body: string | undefined;
  src: string | undefined;
  question: string | undefined;
  item: any;
  setItem: any;
  onSave: any;
  number: number;
  handleBack: () => void;
  handleNext: () => void;
  handleSaveItem: () => void;
  isLastQuestion: boolean;
};

export const DivingMap = ({
  title,
  body,
  src,
  question,
  item,
  setItem,
  onSave,
  number,
  handleBack,
  handleNext,
  handleSaveItem,
  isLastQuestion,
}: MapProps) => {
  const [content, setContent] = React.useState("");
  const [isInputEmpty, setIsInputEmpty] = React.useState(true);
  const [hasClickedNext, setHasClickedNext] = React.useState(false);

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    setItem(content);
    setIsInputEmpty(e.target.value.trim() === "");
  };

  const handleNextClick = () => {
    setHasClickedNext(true);
    if (content.trim() !== "") {
      handleNext();
    }
  };

  return (
    <div className={styles["mapPage"]} onSubmit={(e) => e.preventDefault}>
      <h1 className={styles["title"]}>{title}</h1>
      <p className={styles["pMap"]}>{body}</p>
      <iframe
        className={styles["iframeMap"]}
        src={src}
        width="55rem"
        height="350rem"
        style={{ border: "0" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
      <label className={styles["qLabel"]}>{question}</label>
      <textarea
        value={content}
        onChange={handleTextAreaChange}
        name="observation"
        className={styles["textarea"]}
        required></textarea>
      {hasClickedNext && isInputEmpty && (
        <p style={{ color: "red", margin: "2px" }}>
          Du må skrive inn noe før du kan gå videre
        </p>
      )}
      <ButtonContainer
        number={number}
        handleBack={handleBack}
        handleNext={handleNextClick}
        handleSaveItem={handleSaveItem}
        isLastQuestion={isLastQuestion}
      />
    </div>
  );
};
