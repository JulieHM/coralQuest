import * as React from "react";
import { AnswerObject } from "../../pages/quest/1";
import styles from "./QuestionCard.module.css";

type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: AnswerObject | undefined;
  questionNum: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNum,
  totalQuestions,
}) => {
  return (
    <div className={styles.questionCardWrapper}>
      {/* <p className="number">
        Question: {questionNum} / {totalQuestions}
      </p> */}
      <p className="question" dangerouslySetInnerHTML={{ __html: question }} />

      <div className={styles.answerOptionsWrapper}>
        {answers.map((answer: string) => (
          <div
            correct={userAnswer?.correctAnswer === answer}
            userClicked={userAnswer?.answer === answer}
            key={answer}>
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
