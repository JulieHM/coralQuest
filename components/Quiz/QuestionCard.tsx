import * as React from "react";
import { AnswerObject } from "../../pages/quest/1";
import styles from "./Quiz.module.css";

type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: AnswerObject | undefined;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
}) => {
  return (
    <div className={styles.questionCardWrapper}>
      <p className="question" dangerouslySetInnerHTML={{ __html: question }} />

      <div className={styles.answerOptionsWrapper}>
        {answers.map((answer: string) => (
          <div key={answer}>
            <button
              className={styles.answerOptionWrapper}
              disabled={!!userAnswer}
              value={answer}
              onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answer }}></span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
