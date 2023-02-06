import * as React from "react";
import { AnswerObject } from "../pages/quest/1";

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
    <div>
      <p className="number">
        Question: {questionNum} / {totalQuestions}
      </p>
      <p className="question" dangerouslySetInnerHTML={{ __html: question }} />

      {answers.map((answer: string) => (
        <div
          correct={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}
          key={answer}>
          <button disabled={!!userAnswer} value={answer} onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: answer }}></span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default QuestionCard;
