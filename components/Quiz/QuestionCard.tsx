import * as React from "react";
import { AnswerObject } from "../../pages/quest/1";
import { ButtonWrapper } from "./ButtonWrapper";
import styles from "./Quiz.module.css";

type Props = {
  question: string;
  answers: string[];
  correctAnswer: string;
  callback: any;
  userAnswer: AnswerObject | undefined;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
}) => {
  console.log("userAnswer:", userAnswer);
  return (
    <div className={styles["questionCardWrapper"]}>
      <p
        className={styles["questionText"]}
        dangerouslySetInnerHTML={{ __html: question }}
      />
      <div className={styles["answersWrapper"]}>
        {answers.map((answer: string) => (
          <ButtonWrapper
            correct={userAnswer?.correctAnswer === answer}
            userClicked={userAnswer?.answer === answer}
            key={answer}>
            <button disabled={!!userAnswer} value={answer} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answer }}></span>
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
