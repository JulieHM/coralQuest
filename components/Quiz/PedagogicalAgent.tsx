import * as React from "react";
import { AnswerObject } from "../../pages/quest/1";

type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: AnswerObject | undefined;
  questionNum: number;
  totalQuestions: number;
  info: string;
};

const PedagogicalAgent: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNum,
  totalQuestions,
  info,
}) => {
  return (
    <div>
      <p>{info}</p>
    </div>
  );
};

export default PedagogicalAgent;
